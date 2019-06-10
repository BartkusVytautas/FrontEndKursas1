$(function (){
    var buttonElm =  $("#butt");
    buttonElm.mouseover(function(){
        $("#paragraph").hide();
    });
    buttonElm.mouseleave(function(){
        $("#paragraph").show();
    });
});

