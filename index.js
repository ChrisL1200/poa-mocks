$(document).ready(function(){
    $("td[colspan=5]").find("table").hide();
    $("table").click(function(event) {
        event.stopPropagation();
        var $target = $(event.target);
        if ( $target.closest("td").attr("colspan") > 1 ) {
            $target.slideUp();
        } else {
            $target.closest("tr").next().find("table").slideToggle();
        }                    
    });
  });