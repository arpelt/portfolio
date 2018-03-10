
$(function() {
    $(".project").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
});

$(".image-container").click(function() {
    if ($(this).hasClass("ui-accordion-header-active")){
        $("div.material-icons",this).html("&#xe147;");
    }
    else {
        $("div.material-icons",this).html("&#xe15c;");
    }
});
