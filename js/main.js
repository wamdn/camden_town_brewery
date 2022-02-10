//console.log('Hello World !');
var $baseWp = $("#base-wp");
var $wallpaper;
var nth;
var colorListe = ["darkRed","blue","black","darkRed","black","black","red","black"]
$(".beer").hover(function() {
    nth = $(this).data('nth');
    $wallpaper = $(".wallpaper:nth-of-type("+ nth +")");
    $baseWp.stop().animate({
        opacity : 0
    }, 400);
    $wallpaper.stop().animate({
        opacity : 1
    }, 400);
    $(".menu").addClass(colorListe[nth-1]);
}, function() {

    $wallpaper.stop().animate({
        opacity : 0
    }, 600);
    $baseWp.stop().animate({
        opacity : 1
    }, 400);
    $(".menu").removeClass(colorListe[nth-1]);

});
