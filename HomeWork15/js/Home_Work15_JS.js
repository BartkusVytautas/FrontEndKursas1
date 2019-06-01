var squareArray = [];


var drop = function drop_handler(ev) {
    ev.preventDefault();

            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
            ev.dataTransfer.clearData();

};

var dragover = function dragover_handler(ev) {
    ev.preventDefault();
};

var dragstart = function dragstart_handler(ev) {

    ev.dataTransfer.setData("text/plain", ev.target.id);
};

function set_global_attributes_onLoad () {
    var iconArray = document.getElementsByTagName('i');
    var tdArray = document.getElementsByTagName('td');

    for (var j = 0; j < tdArray.length; j++) {
        if (!((j === 0) || (j % 9 === 0) || (j > 72))) {
            tdArray[j].ondrop = drop;
            tdArray[j].ondragover = dragover;
            squareArray.push(tdArray[j]);
                for (var i = 0; i < iconArray.length; i++) {
                    iconArray[i].draggable = true;
                    iconArray[i].ondragstart = dragstart;
                    }
            }
        }

}

function startTheGame() {
    var iarray = document.getElementsByTagName('i');
    for (var i = 0; i<iarray.length; i++){
        iarray[i].style.setProperty("display", "block", "important");
    }
}



