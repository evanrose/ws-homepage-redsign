$(document).ready(function() {

	checkSize();
    $(window).resize(checkSize);
	
	$(".jump-link").click(function(event) {
		event.preventDefault();
		var _which = $(this).attr("href");
		$("html,body").animate({
			scrollTop: $(_which).offset().top
		}, 500, function() {
			window.location.hash = _which;
		});
	});
	
	$(".load-overlay-video").fancybox();

});

function checkSize() {
    
    // Use a body class
    if ( $(".mobile").css("display") == "block" ) {
        
        //768
        $(".hemnet .person-container").detach().appendTo(".hemnet .cs-text");
        $(".daughters .cs-image").detach().prependTo(".daughters .img-container");
        $(".barbie .person-container").detach().appendTo(".barbie .position-right");
    
    }

    if ( $(".desktop").css("display") == "block" ) {
        $(".daughters .cs-image").detach().prependTo(".daughters .img-container");

    }

    //1280
    if ( $("body").css("width") >= "1280px" ) {
        
        $(".daughters .cs-image").detach().prependTo(".daughters .img-container");
        $(".hemnet .person-container").detach().appendTo(".hemnet .position-right");
        $(".barbie .person-container").detach().appendTo(".barbie .position-right");

        //$(".who-we-are .ws-sec-content").detach().insertBefore(".who-we-are h2");
        //$(".who-we-are .ws-sec-container").detach().insertAfter(".who-we-are .tablet-right");
    
    }
	
	$(".full-width-background").each(function() {
		var _this = $(this);
		var _margin_left = -1 * ( ( $(window).width() - _this.outerWidth(true) ) / 2 );
		$(_this).find(".background-color").css({
			width: $(window).width() + "px",
			"margin-left": _margin_left + "px"
		});
	});
}