$(document).ready(function() {

	checkSize();
    $(window).resize(checkSize);

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


    }

}