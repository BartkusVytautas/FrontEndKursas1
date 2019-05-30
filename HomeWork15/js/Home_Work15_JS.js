var drop = function drop_handler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.dataTransfer.clearData();
}

var dragover = function dragover_handler(ev) {
    ev.preventDefault();
}

var dragstart = function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function set_global_attributes_onLoad (){
    var iconArray = document.getElementsByTagName('i');
    var squareArray = document.getElementsByTagName('td');
    for (var i =0; i<iconArray.length; i++){
        iconArray[i].draggable = true;
        iconArray[i].ondragstart = dragstart;
    }
    for(var i = 0; i < squareArray.length; i++){
        squareArray[i].ondrop = drop;
        squareArray[i].ondragover = dragover;
    }
}



