
$(function() {
    $( ".project" ).accordion({
      active: false,
      collapsible: true
    });
});

$(".image-container").click(function() {
    if ($(this).hasClass("ui-accordion-header-active")){
        $(".project-name",this).show();
        $("div.material-icons",this).html("&#xe147;");
    }
    else {
        $(".project-name",this).hide();
        $("div.material-icons",this).html("&#xe15c;");
    }
});
