function drop_handler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.dataTransfer.clearData();
}

function dragover_handler(ev) {
    ev.preventDefault();
}

function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

