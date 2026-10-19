export function lengthOfLastWord(s) {
    const regex = /\w+/g;
    const words = s.match(regex) ?? [];
    const length = words.length > 0 ? words[words.length - 1].length : 0;
    return length;
}
;
