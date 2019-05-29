

// Triangle calculation

function isTriangle(a, b, c) {
    if(((a + b > c) && (a + c > b) && (c + b > a)) && (a > 0) && (b>0) && (c>0)){
        return true;
    }
    return false;
}

function triangleType (a, b, c) {
        if(isTriangle(a, b, c)){
            if(a===b && a===c && b===c){
               return "Equilateral triangle";
            }
            if((a===b) || (a===c) || (b===c)){
                return "Isosceles triangle";
            }
            if((a*a + b*b === c*c) || (a*a + c*c === b*b) || (b*b + c*c === a*a)){
                return "Right triangle";
            }
            else{
                return  "Scalene triangle";
            }
        }
        return  "Not a triangle";
}

    function triangleArea(a,b,c) {
        var area = Math.sqrt(((a + b + c)/2) * ((a + b + c)/2 - a) * ((a + b + c)/2 - b) * ((a + b + c)/2 - c));
        if(!isTriangle(a,b,c)){
            area = -1;
        }
        return area;
    }


    function calc() {
        var a = parseFloat(document.getElementById("a").value);
        var b = parseFloat(document.getElementById("b").value);
        var c = parseFloat(document.getElementById("c").value);
        document.getElementById("type").innerHTML = triangleType(a,b,c);
        document.getElementById("area").innerHTML = triangleArea(a,b,c);
}


// Speed calculation

var car = ["2017-07-06 19:59:45", "LRS123", 5000, 118];
var speed = 0.0;

function carSpeed() {
    speed = (car[2]/1000)/(car[3]/60/60);
    return Math.round(speed);
}

function displayCarAttributes() {
    document.getElementById("date").innerHTML = car[0];
    document.getElementById("pl-number").innerHTML = car[1];
    document.getElementById("distance").innerHTML = car[2];
    document.getElementById("time").innerHTML = car[3];
    document.getElementById("speed").innerHTML = carSpeed();
}
