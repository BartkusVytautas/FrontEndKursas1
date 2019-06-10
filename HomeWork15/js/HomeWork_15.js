/**
 * GAME START FUNCTION
 */
var figuresArray = document.getElementsByTagName('i');
function startTheGame() {
    document.getElementById('button').style.setProperty("display", "none", "important");
    for (var i = 0; i < figuresArray.length; i++){
        figuresArray[i].style.setProperty("display", "block", "important");
        figuresArray[i].draggable = true;
    }
    dragStartHandler();
    dragOverHandler();
    dropHandler();
}


/**
 * Chess board
 * @type {*[object}
 */
var board = [
    [{position: "A8", isOccupied: true}, {position: "B8", isOccupied: true}, {position: "C8", isOccupied: true}, {position: "D8", isOccupied:true}, {position:"E8", isOccupied: true}, {position:"F8", isOccupied: true}, {position: "G8", isOccupied: true}, {position: "H8", isOccupied: true}],
    [{position: "A7", isOccupied: true}, {position: "B7", isOccupied: true}, {position: "C7", isOccupied: true}, {position: "D7", isOccupied:true}, {position:"E7", isOccupied: true}, {position:"F7", isOccupied: true}, {position: "G7", isOccupied: true}, {position: "H7", isOccupied: true}],
    [{position: "A6", isOccupied: false}, {position: "B6", isOccupied: false}, {position: "C6", isOccupied: false}, {position: "D6", isOccupied:false}, {position:"E6", isOccupied: false}, {position:"F6", isOccupied: false}, {position: "G6", isOccupied: false}, {position: "H6", isOccupied: false}],
    [{position: "A5", isOccupied: false}, {position: "B5", isOccupied: false}, {position: "C5", isOccupied: false}, {position: "D5", isOccupied:false}, {position:"E5", isOccupied: false}, {position:"F5", isOccupied: false}, {position: "G5", isOccupied: false}, {position: "H5", isOccupied: false}],
    [{position: "A4", isOccupied: false}, {position: "B4", isOccupied: false}, {position: "C4", isOccupied: false}, {position: "D4", isOccupied:false}, {position:"E4", isOccupied: false}, {position:"F4", isOccupied: false}, {position: "G4", isOccupied: false}, {position: "H4", isOccupied: false}],
    [{position: "A3", isOccupied: false}, {position: "B3", isOccupied: false}, {position: "C3", isOccupied: false}, {position: "D3", isOccupied:false}, {position:"E3", isOccupied: false}, {position:"F3", isOccupied: false}, {position: "G3", isOccupied: false}, {position: "H3", isOccupied: false}],
    [{position: "A2", isOccupied: true}, {position: "B2", isOccupied: true}, {position: "C2", isOccupied: true}, {position: "D2", isOccupied:true}, {position:"E2", isOccupied: true}, {position:"F2", isOccupied: true}, {position: "G2", isOccupied: true}, {position: "H2", isOccupied: true}],
    [{position: "A1", isOccupied: true}, {position: "B1", isOccupied: true}, {position: "C1", isOccupied: true}, {position: "D1", isOccupied:true}, {position:"E1", isOccupied: true}, {position:"F1", isOccupied: true}, {position: "G1", isOccupied: true}, {position: "H1", isOccupied: true}],
];

/**
 * Figures object:
 */

var figures = {

    // Player One
    br1 : {
        playerId: 1,
        figureID: "br1",
        status: 1,
        position: "A8",
    },

    bk1 : {
        playerId: 1,
        figureID: "bk1",
        status: 1,
        position: "B8",
    },

    bb1 : {
        playerId: 1,
        figureID: "bb1",
        status: 1,
        position: "C8",
    },

    bk : {
        playerId: 1,
        figureID: "bk",
        status: 1,
        position: "D8",
    },

    bq : {
        playerId: 1,
        figureID: "bq",
        status: 1,
        position: "E8",
    },

    bb2 : {
        playerId: 1,
        figureID: "bb2",
        status: 1,
        position: "F8",
    },

    bk2 : {
        playerId: 1,
        figureID: "bk2",
        status: 1,
        position: "G8",
    },

    br2 : {
        playerId: 1,
        figureID: "br2",
        status: 1,
        position: "H8",
    },

    bp1 : {
        playerId: 1,
        figureID: "bp1",
        status: 1,
        position: "A7",
    },

    bp2 : {
        playerId: 1,
        figureID: "bp2",
        status: 1,
        position: "B7",
    },

    bp3 : {
        playerId: 1,
        figureID: "bp3",
        status: 1,
        position: "C7",
    },

    bp4 : {
        playerId: 1,
        figureID: "bp4",
        status: 1,
        position: "D7",
    },

    bp5 : {
        playerId: 1,
        figureID: "bp5",
        status: 1,
        position: "E7",
    },

    bp6 : {
        playerId: 1,
        figureID: "bp6",
        status: 1,
        position: "F7",
    },

    bp7 : {
        playerId: 1,
        figureID: "bp7",
        status: 1,
        position: "G7",
    },

    bp8 : {
        playerId: 1,
        figureID: "bp8",
        status: 1,
        position: "H7",
    },

// Player 2

    wp1 : {
        playerId: 2,
        figureID: "wp1",
        status: 1,
        position: "A2",
    },

    wp2 : {
        playerId: 2,
        figureID: "wp2",
        status: 1,
        position: "B2",
    },

    wp3 : {
        playerId: 2,
        figureID: "wp3",
        status: 1,
        position: "C2",
    },

    wp4 : {
        playerId: 2,
        figureID: "wp4",
        status: 1,
        position: "D2",
    },

    wp5 : {
        playerId: 2,
        figureID: "wp5",
        status: 1,
        position: "E2",
    },

    wp6 : {
        playerId: 2,
        figureID: "wp6",
        status: 1,
        position: "F2",
    },

    wp7 : {
        playerId: 2,
        figureID: "wp7",
        status: 1,
        position: "G2",
    },

    wp8 : {
        playerId: 2,
        figureID: "wp8",
        status: 1,
        position: "H2",
    },

    wr1 : {
        playerId: 2,
        figureID: "wr1",
        status: 1,
        position: "A1",
    },

    wk1 : {
        playerId: 2,
        figureID: "wk1",
        status: 1,
        position: "B1",
    },

    wb1 : {
        playerId: 2,
        figureID: "wb1",
        status: 1,
        position: "C1",
    },

    wk : {
        playerId: 2,
        figureID: "wk",
        status: 1,
        position: "D1",
    },

    wq : {
        playerId: 2,
        figureID: "wq",
        status: 1,
        position: "E1",
    },

    wb2 : {
        playerId: 2,
        figureID: "wb2",
        status: 1,
        position: "F1",
    },

    wk2 : {
        playerId: 2,
        figureID: "wk2",
        status: 1,
        position: "G1",
    },

    wr2 : {
        playerId: 2,
        figureID: "wr2",
        status: 1,
        position: "H1",
    },

};
var squareArray = document.getElementsByClassName('square');

var currentObject = null;
var figureId = "";
var turnCounter = 0;

/**
 * Dragsart function and getting figure ID
 * @param ev
 */
function dragStart (ev){
    ev.dataTransfer.setData("text/plain", ev.target.id);
    figureId = ev.target.getAttribute('id');

}

/**
 * Gets the dragged figure object
 * @param figureId {string}
 * @returns {object}
 */
function getFigureObject (figureId){
    var x;
    for (x in figures){
        if(figures[x].figureID === figureId){
            var draggedObject = figures[x];
            break;
        }
    }
    return draggedObject;
}

/**
 * Gets a figure object, which is being dropped on by other figure
 * @param figurePosition {String}
 * @returns {object}
 */
var draggedOverObject = null;
function getDraggedOverObject(figurePosition) {
    var y;
    for (y in figures){
        if(figures[y].position === figurePosition){
            draggedOverObject = figures[y];
            break;
        }
    }
    return draggedOverObject;
}
var draggedX = 0;
var draggedY = 0;
var draggedFromSquare = null;

/**
 *Drag start handler function
 */
function dragStartHandler() {
    for (var j = 0; j < figuresArray.length; j++) {
        figuresArray[j].addEventListener('dragstart', function (e) {
            dragStart(e);
            currentObject = getFigureObject(figureId);
            for (var k = 0; k < board.length; k++){
                for (var m =0; m < board[k].length;m++){
                    var squares = board[k][m];
                    if (squares.position === currentObject.position){
                        draggedFromSquare = board[k][m];
                        draggedX=m;
                        draggedY=k;
                        break;
                    }
                }
            }
        });
    }
}

/**
 * Drag over handler
 */
function dragOverHandler () {
    for (var i = 0; i < squareArray.length; i++){
        squareArray[i].addEventListener('dragover', function(e){
            e.preventDefault();

        });
    }
    for (var j = 0; j < figuresArray.length; j++){
        figuresArray[j].addEventListener('dragover', function (e) {
            e.preventDefault();
        });
    }

}
var droppedOnSquare = null;
var draggedOver = null;
var droppedX = 0;
var droppedY = 0;
var isSquarempty = false;
var isDropAllowed = true;
var deltaX = 0;
var deltaY = 0;
var maxX = 0;
var minX = 0;
var maxY = 0;
var minY = 0;

/**
 * Drop handler function
 */
function dropHandler() {
    for(var i = 0; i < squareArray.length; i++){
        let square = squareArray[i];

        squareArray[i].addEventListener('drop', function (e) {
            e.preventDefault();
            if((currentObject.playerId === 2) && (turnCounter % 2 !== 0)){
                return false;
            }
            if((currentObject.playerId === 1) && (turnCounter % 2 === 0)){
                return false;
            }
            for(var j = 0; j<board.length; j++){
                for (var l = 0; l < board[j].length; l++){

                    if (square.getAttribute('id') === board[j][l].position){
                        droppedOnSquare = board[j][l];
                        droppedX = l;
                        droppedY = j;
                        deltaX = droppedX - draggedX;
                        deltaY = droppedY - draggedY;
                        if(deltaX < 0){
                            deltaX *=-1;
                        }
                        if(deltaY < 0){
                            deltaY *=-1;
                        }
                        if(droppedX < draggedX){
                            maxX = draggedX;
                            minX = droppedX;
                        }else{
                            maxX = droppedX;
                            minX = draggedX;
                        }
                        if (droppedY < draggedY){
                            maxY = draggedY;
                            minY = droppedY;
                        }else{
                            maxY = droppedY;
                            minY = draggedY;
                        }
                        draggedOver = getDraggedOverObject(droppedOnSquare.position);
                        isSquarempty = !droppedOnSquare.isOccupied;
                        if(!isLegalMove(currentObject.figureID, currentObject, draggedOver )){
                            return false;
                        }
                        if (!isDropAllowed){
                            return false;
                        }
                        var data = e.dataTransfer.getData("Text");
                        square.appendChild(document.getElementById(data));
                        board[j][l].isOccupied = true;
                        draggedFromSquare.isOccupied = false;
                        currentObject.position = board[j][l].position;
                        turnCounter++;
                        if(turnCounter % 2 ===0){
                            document.getElementById('turn-color').style.backgroundColor = "white";
                        }else{
                            document.getElementById('turn-color').style.backgroundColor = "black";
                        }

                    }
                }
            }
        });
    }
}


/**
 * Function to determine if a move is legal
 * @param figureId {String}
 * @param object1 {object}
 * @param object2 {object}
 * @returns {boolean}
 */
function isLegalMove(figureId, object1, object2){
    var isLegalMoveBool = false;
    switch (figureId) {
        case "bp1":case "bp2":case "bp3":case "bp4":case "bp5":case "bp6":case "bp7":case "bp8":

            if(((droppedY - draggedY) === 1) && (droppedX === draggedX) && (isSquarempty)){
                isLegalMoveBool = true;
                currentObject.status = 2;
                break;
            }
            if ((((droppedY - draggedY) === 2) && (droppedX === draggedX)) && (currentObject.status ===1) && (isSquarempty)){
                isLegalMoveBool = true;
                currentObject.status = 2;
                break;
            }
            if(((droppedY - draggedY) === 1) && (((droppedX - draggedX) ===1) || ((droppedX - draggedX) ===-1)) && !isSquarempty){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            break;
        case "wp1":case "wp2":case "wp3":case "wp4":case "wp5":case "wp6":case "wp7":case "wp8":
            if(((droppedY - draggedY) === -1) && (droppedX === draggedX) && (isSquarempty)){
                isLegalMoveBool = true;
                currentObject.status = 2;
                break;
            }
            if ((((droppedY - draggedY) === -2)) && (currentObject.status ===1) && (droppedX === draggedX) && (isSquarempty)){
                isLegalMoveBool = true;
                currentObject.status = 2;
                break;
            }
            if(((droppedY - draggedY) === -1) && (((droppedX - draggedX) ===1) || ((droppedX - draggedX) ===-1)) && !isSquarempty){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            break;
        case "wk1":case "wk2":case "bk1":case "bk2":
            if(((droppedX - draggedX) ===2) && (((droppedY - draggedY)===1) || ((droppedY-draggedY)===-1))){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            if(((droppedX - draggedX) ===-2) && (((droppedY - draggedY)===1) || ((droppedY-draggedY)===-1))){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            if(((droppedY - draggedY) ===2) && (((droppedX - draggedX)===1) || ((droppedX-draggedX)===-1))){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            if(((droppedY - draggedY) ===-2) && (((droppedX - draggedX)===1) || ((droppedX-draggedX)===-1))){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;

            }
            break;
        case "bb1":case "bb2":case "wb1":case "wb2":
            if((deltaX === deltaY) && canJumpOverDiagonal()){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            break;

        case "wk":case "bk":
            if((deltaX < 2) && (deltaY < 2)){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            break;
        case "br1":case "br2":case "wr1":case "wr2":
            if(((deltaX === 0) || (deltaY === 0)) && canJumpOverStraight()){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            break;
        case "bq":case "wq":
            if((((deltaX === 0) || (deltaY === 0)) && canJumpOverStraight()) || ((((droppedY - draggedY) === (droppedX - draggedX)) || ((droppedY - draggedY) === (droppedX - draggedX)*(-1))) && canJumpOverDiagonal())){
                isLegalMoveBool = true;
                allowDrop(object1, object2);
                break;
            }
            break;



    }
    return isLegalMoveBool;
}

/**Function to determine if it is possible to drop the dragged figure on other figure and delete the
 * figure if its allowed
 *
 * @param object1 {object}
 * @param object2 {object}
 */
function allowDrop(object1, object2) {
    if((object2 !== undefined && object2 !== null)) {
        if (object1.playerId !== object2.playerId) {
            isDropAllowed = true;
            if(object2.figureID === "wk"){
                document.getElementById('chess-table').style.setProperty('display', 'none', 'important');
                document.getElementById('turn-color').style.setProperty('display', 'none', 'important');
                alert("Player 1 won");
            }
            if(object2.figureID === "bk"){
                document.getElementById('chess-table').style.setProperty('display', 'none', 'important');
                document.getElementById('turn-color').style.setProperty('display', 'none', 'important');
                alert("Player 2 won");
            }
            document.getElementById(object2.figureID).remove();

        }
        else{
            isDropAllowed =  false;
        }
    }

}

/**
 * A function  to determine if a diagonal move is legal and  doesnt contain any figures between dragged position and dropped position
 * @returns {boolean}
 */
function canJumpOverDiagonal () {
    if((((droppedX - draggedX) > 0) && (droppedY - draggedY) > 0) || (((droppedX - draggedX) < 0) && (droppedY - draggedY) < 0)){
    for (var k = minX +1; k < maxX;) {
        for (var l = minY + 1; l < maxY; l++) {
            console.log(board[l][k]);
            if (board[l][k].isOccupied) {
                return false;
            }
            k++;
        }
    }
    }
    if (((droppedX - draggedX) + (droppedY - draggedY)) === 0){
        for (var n = maxX -1; n > minX;){
            for( var o = minY +1; o < maxY; o++){
                console.log(board[o][n]);
                if (board[o][n].isOccupied){
                    return false;
                }
                n--;
            }
        }
    }
    return  true;
}

/**
 * A function to determine if a straight move is legal and doesnt contain any figures between dropped and dragged positions
 * @returns {boolean}
 */
function canJumpOverStraight(){
    if (deltaY === 0){
        for (var i = minX + 1; i < maxX; i++){
            if (board[draggedY][i].isOccupied){
                return false;
            }
        }
    }
    if(deltaX === 0){
        for (var j = minY +1; j < maxY; j++){
            if(board[j][draggedX].isOccupied){
                return false;
            }
        }
    }
    return true;
}

