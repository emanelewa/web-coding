/*focus window*/
$(document).ready(function () {

    $("html, body").animate({ scrollTop: 0 }, "slow");


});



// change li a color
$(document).ready(function () {
    $("#menu a").click(function () {
        $("#menu a").css("color", "#0076a3");
        $(this).css("color", "#f8941d");
    })
});




/*fixed menu*/
var myMenu = document.getElementById("menu");
function down() {
    if(myMenu.style.display === "none"){
        myMenu.style.display = "block";
    }else {
        myMenu.style.display = "none";
    }
}


/*appear fixed menu*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-200px";
    }
}





/* slider*/
document.getElementsByTagName('html')[0].className += ' js';


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


//Statistics
$('.timer').countTo();




/*pop up form*/
$(function() {

    // contact form animations
    $('#contact').click(function() {
        $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
        var container = $("#contactForm");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.fadeOut();
        }
    });

});


/*programs*/

    $(function() {
        $(".auto .carousel").jCarouselLite({
            auto: 800,
            speed: 1000
        });
    });


/*students*/

(function(global, $){
    $('.gallery-items').imagelistexpander({
        prefix: "gallery-"
    });
})(this, jQuery);



/*navbar*/
$(document).ready(function () {
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

