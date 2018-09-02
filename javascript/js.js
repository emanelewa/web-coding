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

/*var myHeader = document.getElementById("show");
if( window.scrollY > 20){
    myHeader.style.display = "block";
}else {
    myHeader.style.display = "none";
}*/








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