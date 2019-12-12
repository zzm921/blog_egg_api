

$(function () {
    let id = getUrlParam("id")
    $.ajax({
        type: "GET",
        url: "http://129.204.95.132/cloud/api/articles/" + id,
        dataType: "json",
        success: function (data) {
            var html = '<h2 style="text-align: center;">' + data.title + '</h2>'
            html += '<div id="test-editormd-view"></div> '
            $("#article_content").html(html)
            var testEditormdView = editormd.markdownToHTML("test-editormd-view", {
                markdown: data.content,//+ "\r\n" + $("#append-test").text(),
                htmlDecode: "style,script,iframe",  // you can filter tags decode
                tocm: true,    // Using [TOCM]
                emoji: true,
                taskList: true,
                tex: true,  // 默认不解析
                flowChart: true,  // 默认不解析
                sequenceDiagram: true,  // 默认不解析
            });
        }

    });
})