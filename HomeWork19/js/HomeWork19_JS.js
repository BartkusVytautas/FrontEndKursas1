$(function (){
    var buttonElm =  $("#butt");
    buttonElm.mouseover(function(){
        $("#paragraph").hide();
    });
    buttonElm.mouseleave(function(){
        $("#paragraph").show();
    });

    var circle_1 = $("#circle-1");
    var circle_2 = $("#circle-2");
    var circle_3 = $("#circle-3");

    circle_1.click(function () {
        removeCircles(circle_2, circle_3);

    });
    circle_2.click(function () {
        removeCircles(circle_1, circle_3);

    });
    circle_3.click(function () {
        removeCircles(circle_1, circle_2);

    });

    circle_1.dblclick(function () {
        showCircles(circle_2, circle_3);
    });

    circle_2.dblclick(function () {
        showCircles(circle_1, circle_3);
    });

    circle_3.dblclick(function () {
        showCircles(circle_2, circle_1);
    });

    function removeCircles(firstCircle, secondCircle) {
        firstCircle.hide(2000);
        secondCircle.hide(2000);
    }

    function showCircles(firstCircle, secondCircle) {
        firstCircle.show(2000);
        secondCircle.show(2000);
    }



});

