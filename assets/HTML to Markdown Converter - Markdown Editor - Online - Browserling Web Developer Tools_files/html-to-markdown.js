$(function () {
    mkTool('html-to-markdown', function (text) {
        return toMarkdown(text);
    });
});
