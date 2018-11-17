var windowLocation = encodeURI(window.location);
var pageTitle = encodeURI(document.title);
var myYukonHost = 'http://localhost:4000/save-form/';
jQuery("#navbar #wb-bnr, body.ext-border-box").prepend(
    "<div class='container'>" +
    "<div class='row'><div class='col-xs-6'>" +
    "<div class='row pull-left' style='margin: 2em 1em'>" +
    "<a style='background-color:#ffcd57; border-radius: 4px; padding: 1em; text-decoration: none; color: #000'"+
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