'use strict';

const showdown = require('showdown');

module.exports = function (markdown) {
    const converter = new showdown.Converter({
        disableForced4SpacesIndentedSublists: true,
        emoji: true,
        literalMidWordAsterisks: true,
        literalMidWordUnderscores: true,
        omitExtraWLInCodeBlocks: true,
        requireSpaceBeforeHeadingText: true,
        tables: true,
        tablesHeaderId: true,
        tasklists: true,
    });

    return `<div>${converter.makeHtml(markdown)}</div>`;
};
