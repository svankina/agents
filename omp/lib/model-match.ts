/**
 * Abbreviation-aware ranking for model pickers.
 *
 * OMP's shared fuzzy matcher requires each query token to match inside one
 * word, as a contiguous word-start substring, or as a 2–4 letter acronym. A
 * natural abbreviation such as `op55` for `claude-opus-5-5` is none of those,
 * so it matches nothing. Here a token may instead be consumed by consecutive
 * *word prefixes*: `op` + `5` + `5` walks opus → 5 → 5.
 */

/** Skipping a word between two pieces of one token: `op5` should prefer opus-5 over opus-4-5. */
const INNER_SKIP_COST = 10;
/** Every piece costs; fewer, longer prefixes are the more deliberate match. */
const PIECE_COST = 1;
/** A piece that stops short of its word's end. */
const PARTIAL_WORD_COST = 0.5;
/** Build dates (`20250805`) are this long; they break ties after the version. */
const DATE_DIGITS = 6;
/** Plain substring anywhere in the compact text ranks after every prefix chain. */
const SUBSTRING_COST = 20;
const MIN_SUBSTRING_LENGTH = 3;

/** Cheapest way to consume `token` as prefixes of `words` in order, or undefined. */
function prefixChainCost(token: string, words: string[]): number | undefined {
	const width = words.length + 1;
	const memo = new Map<number, number | undefined>();
	const solve = (offset: number, next: number): number | undefined => {
		if (offset === token.length) return 0;
		const key = offset * width + next;
		if (memo.has(key)) return memo.get(key);
		let best: number | undefined;
		for (let index = next; index < words.length; index++) {
			const word = words[index];
			// Leading skips are free: `op55` needs no `anthropic/claude` prefix.
			const skip = offset === 0 ? 0 : (index - next) * INNER_SKIP_COST;
			const limit = Math.min(word.length, token.length - offset);
			for (let length = 1; length <= limit && word[length - 1] === token[offset + length - 1]; length++) {
				const rest = solve(offset + length, index + 1);
				if (rest === undefined) continue;
				const cost = skip + PIECE_COST + (length < word.length ? PARTIAL_WORD_COST : 0) + rest;
				if (best === undefined || cost < best) best = cost;
			}
		}
		memo.set(key, best);
		return best;
	};
	return solve(0, 0);
}

function tokenCost(token: string, words: string[]): number | undefined {
	const chain = prefixChainCost(token, words);
	if (token.length < MIN_SUBSTRING_LENGTH) return chain;
	const at = words.join("").indexOf(token);
	const substring = at < 0 ? undefined : SUBSTRING_COST + at * 0.01;
	if (chain === undefined) return substring;
	return substring === undefined ? chain : Math.min(chain, substring);
}

/** Positive when `a` is the newer model: version numbers descending, then build date. */
function compareNewest(aWords: string[], bWords: string[]): number {
	const split = (words: string[]) => {
		const numbers = words.filter(word => /^[0-9]+$/.test(word));
		return {
			version: numbers.filter(word => word.length < DATE_DIGITS).map(Number),
			date: Number(numbers.find(word => word.length >= DATE_DIGITS) ?? 0),
		};
	};
	const a = split(aWords);
	const b = split(bWords);
	for (let index = 0; index < Math.max(a.version.length, b.version.length); index++) {
		const diff = (a.version[index] ?? -1) - (b.version[index] ?? -1);
		if (diff !== 0) return diff;
	}
	return a.date - b.date;
}

/**
 * Items whose text matches every query token, cheapest first; equally good
 * matches list the newest model first, then keep input order. Whitespace
 * separates tokens; punctuation inside one is ignored, so `5-5` and `55` are
 * the same token.
 */
export function rankByAbbreviation<T>(items: readonly T[], query: string, textOf: (item: T) => string): T[] {
	const tokens = query
		.toLowerCase()
		.split(/\s+/)
		.map(token => token.replace(/[^a-z0-9]/g, ""))
		.filter(token => token.length > 0);
	if (tokens.length === 0) return [...items];
	const ranked: { item: T; words: string[]; cost: number; order: number }[] = [];
	items.forEach((item, order) => {
		// Alphanumeric runs, split again at letter/digit boundaries: `gpt-4o` → gpt, 4, o.
		const words = textOf(item).toLowerCase().match(/[a-z]+|[0-9]+/g) ?? [];
		let total = 0;
		for (const token of tokens) {
			const cost = tokenCost(token, words);
			if (cost === undefined) return;
			total += cost;
		}
		ranked.push({ item, words, cost: total, order });
	});
	ranked.sort((a, b) => a.cost - b.cost || compareNewest(b.words, a.words) || a.order - b.order);
	return ranked.map(entry => entry.item);
}
