$(function(){

$("#down").on("click",function(){
    $("#box").animate({ 
    top: "250px"},2000);
        ("#box").stop();
});


   $("#up").on("click",function(){
    $("#box").animate({ 
    top: "-=250px"},2000);
    ("#box").stop();
});

   $("#left").on("click",function(){
    $("#box").animate({ //animates css for the element "box"
    marginLeft : "-=50px"},2000);
    ("#box").stop();
   });

   $("#right").on("click",function(){
    $("#box").animate({ 
       left: "250px"},2000);
       ("#box").stop();
   });
   $("#fadeout").on("click",function(){
    $("#box").fadeOut("slow");
    ("#box").stop();
});
   $("#fadein").on("click",function(){
    $("#box").fadeIn("slow");
    ("#box").stop();
   });

   $("#reset").on("click",function(){
    var old_css = $("#box").prev().css();
    $("#box").css(old_css);
    ("#box").stop();
   });


});
