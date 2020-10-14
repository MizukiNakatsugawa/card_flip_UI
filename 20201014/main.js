const header = function header(rootDir) {
    $.ajax({
        url: rootDir + "include/header.html",
        cache: false,
        async: false,
        datatype: 'html',
        success: function(html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

const footer = function footer(rootDir) {
    $.ajax({
        url: rootDir + "include/footer.html",
        cache: false,
        async: false,
        datatype: 'html',
        success: function(html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

export {header, footer};