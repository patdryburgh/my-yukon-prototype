// Here You can type your custom JavaScript...

var windowLocation = encodeURI(window.location);
var pageTitle = encodeURI(document.title);
var myYukonHost = 'http://127.0.0.1:4000/save-form/';
jQuery("#navbar #wb-bnr").prepend(
    "<div class='container'>" +
    "<div class='row'><div class='col-xs-6'>" +
    "<div class='row pull-left'>" +
    "<a class='btn btn-primary'style='background-color:#ffcd57'"+
    " href='"+
    myYukonHost +
    "?theForm=" +
    windowLocation +
    "&pageTitle="+
    pageTitle +
    "'>Save to MyYukon</a></div></div></div></div>"
)

jQuery("[href*='.pdf']").each(function(idx, element) {
    console.log(element);
    var elementhref = encodeURI(jQuery(element).attr('href'));
    var pageTitle = encodeURI(document.title + " | " + jQuery(element).text())
    jQuery(element).parent().append(
    "<a class='btn btn-primary' style='background-color:#ffcd57'" +
    "href='"+
    myYukonHost +
    "?theForm=" +
    elementhref +
    '&pageTitle=' +
    pageTitle +
    "'>" +
    "Save To MyYukon</a>"
    );
})