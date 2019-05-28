var triangleTypeString = "";

function isTriangle(a, b, c) {
    if((a + b > c) && (a + c > b) && (c + b > a)){
        return true;
    }
    return false;

}

function triangleType (a, b, c) {
        if(isTriangle(a, b, c)){
            if((a===b) && (a===c) && (b===c)){
                triangleTypeString = "Equilateral triangle"
            }
            if(((a===b) || (a===c) || (b===c))){
                triangleTypeString = "Isosceles triangle";
            }
            if((a*a + b*b === c*c) || (a*a + c*c === b*b) || (b*b + c*c === a*a)){
                triangleTypeString = "Right triangle"
            }
            else{
                triangleTypeString = "Scalene triangle"
            }
        }
        else{
            triangleTypeString = "Not a triangle"
        }
        return triangleTypeString;
    }

    function triangleArea(a,b,c) {
        var area = Math.sqrt(((a + b + c)/2) * ((a + b + c)/2 - a) * ((a + b + c)/2 - b) * ((a + b + c)/2 - c));
        if(!isTriangle(a,b,c)){
            area = 0;
        }
        return area;
    }


    function calc() {
        var a = parseInt(document.getElementById("a").value);
        var b = parseInt(document.getElementById("b").value);
        var c = parseInt(document.getElementById("c").value);
        document.getElementById("type").innerHTML = triangleType(a,b,c);
        document.getElementById("area").innerHTML = triangleArea(a,b,c);
        console.log(isTriangle(a,b,c));
}


