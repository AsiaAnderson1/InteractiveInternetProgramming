
$(function(){    

    //all of jquery your code goes here
    $("#btn1").on("click",function(){
        $(".wrapperDiv").hide();
    });
    
    $("#btn2").on("click",function(){
        $(".wrapperDiv").show();
    });
   
    //Your instructions ask for the first two divs to be black but the picture in the lab is showing every other div as black.
    // I just followed the worded instructions to the best of my ability.
    $("#btn3").on("click",function(){
        $("#1").text("one");
        $("#2").text("two");
        $("#3").text("three");
        $("#4").text("four");
        $("#1").css({"background-color" : "black", "color" : "white"});
        $("#2").css({"background-color" : "black", "color" : "white"}); 
        $("#3").css({"background-color" : "white", "color" : "black"});
        $("#4").css({"background-color" : "white", "color" : "black"});
    });

     $("#wrapper").hover(function(){
     $(".wrapperDiv").removeAttr("style");
        $("#1").text("1");
        $("#2").text("2");
        $("#3").text("3");
        $("#4").text("4");
        $("#4").css("background-color","yellow");
      
    });
      

  $("#wrapper").mouseout(function(){
    $(".wrapperDiv").removeAttr("style");

     });

});
