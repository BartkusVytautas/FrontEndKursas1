/**
 * GAME START FUNCTION
 */
function startTheGame() {
    var figuresArray = document.getElementsByTagName('i');
    for (var i = 0; i<figuresArray.length; i++){
        figuresArray[i].style.setProperty("display", "block", "important");
    }
}


/**
 * Chess board
 * @type {*[]}
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
        position: "C2",
    },

    wk : {
        playerId: 2,
        figureID: "wk",
        status: 1,
        position: "D2",
    },

    wq : {
        playerId: 2,
        figureID: "wq",
        status: 1,
        position: "E2",
    },

    wb2 : {
        playerId: 2,
        figureID: "wb2",
        status: 1,
        position: "F2",
    },

    wk2 : {
        playerId: 2,
        figureID: "wk2",
        status: 1,
        position: "G2",
    },

    wr2 : {
        playerId: 2,
        figureID: "wr2",
        status: 1,
        position: "H2",
    },

};



    var squareArray = document.getElementsByClassName('square');
    for (var i = 0; i < squareArray.length; i++) {
        squareArray[i].addEventListener('dragstart', function (e){

        });

    }

