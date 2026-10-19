export function lengthOfLastWord(s: string): number {
    const regex: RegExp = /\w+/g;
    const words: string[] = s.match(regex) ?? [];
    const length: number = words.length > 0 ? words[words.length-1].length : 0;
    return length;
};
