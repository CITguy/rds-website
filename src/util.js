import stripIndent from 'strip-indent';

function snippet (raw) {
    // https://regex101.com/r/hKMzZP/4
    let normalized = raw.replace(/(\s+^\s+$|\s+(?=>))/gm, '');
    return stripIndent(normalized).trim();
}

export default {
    snippet,
};
