
function area(height, width) {
    return height * width;
}

function perimeter(height, width) {
    return 2*height + 2*width;
}

function diagonal(height, width) {
    return Math.sqrt((height*height + width*width))
}

function calc() {
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    document.getElementById("area").innerHTML = area(height, width);
    document.getElementById("perimeter").innerHTML = perimeter(height, width);
    document.getElementById("diagonal").innerHTML = diagonal(height, width);
}

