// Here You can type your custom JavaScript...
jQuery("#navbar #wb-bnr").prepend(
    "<div class='container'>" +
    "<div class='row'><div class='col-xs-6'>" +
    "<div class='row pull-left'><button>Save to MyYG</button></div></div></div></div>")

jQuery("[href*='.pdf']").parent().append("<a class='btn btn-primary'>Save To MyYG</a>")