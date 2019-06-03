var board = [

    [-1, 1, -1, 1, -1, 1, -1, 1],

    [1, -1, 1, -1, 1, -1, 1, -1],

    [-1, 1, -1, 1, -1, 1, -1, 1],

    [0, -1, 0, -1, 0, -1, 0, -1],

    [-1, 0, -1, 0, -1, 0, -1, 0],

    [2, -1, 2, -1, 2, -1, 2, -1],

    [-1, 2, -1, 2, -1, 2, -1, 2],

    [2, -1, 2, -1, 2, -1, 2, -1]

];

var PLAYER_1 = 1;

var PLAYER_2 = 2;

var players3000 = {

    PLAYER_1: {

        figure1: {name: 'figure1', status: 0, playerId: PLAYER_1,},

        figure2: {name: 'figure2', status: 0, playerId: PLAYER_1,},

        figure3: {name: 'figure3', status: 0, playerId: PLAYER_1,},

        figure4: {name: 'figure4', status: 0, playerId: PLAYER_1,},

        figure5: {name: 'figure5', status: 0, playerId: PLAYER_1,},

        figure6: {name: 'figure6', status: 0, playerId: PLAYER_1,},

        figure7: {name: 'figure7', status: 0, playerId: PLAYER_1,},

        figure8: {name: 'figure8', status: 0, playerId: PLAYER_1,},

        figure9: {name: 'figure9', status: 0, playerId: PLAYER_1,},

        figure10: {name: 'figure10', status: 0, playerId: PLAYER_1,},

        figure11: {name: 'figure11', status: 0, playerId: PLAYER_1,},

        figure12: {name: 'figure12', status: 0, playerId: PLAYER_1,},

    },

    PLAYER_2: {

        figure1: {name: 'figure13', status: 0, playerId: PLAYER_2,},

        figure2: {name: 'figure14', status: 0, playerId: PLAYER_2,},

        figure3: {name: 'figure15', status: 0, playerId: PLAYER_2,},

        figure4: {name: 'figure16', status: 0, playerId: PLAYER_2,},

        figure5: {name: 'figure17', status: 0, playerId: PLAYER_2,},

        figure6: {name: 'figure18', status: 0, playerId: PLAYER_2,},

        figure7: {name: 'figure19', status: 0, playerId: PLAYER_2,},

        figure8: {name: 'figure20', status: 0, playerId: PLAYER_2,},

        figure9: {name: 'figure21', status: 0, playerId: PLAYER_2,},

        figure10: {name: 'figure22', status: 0, playerId: PLAYER_2,},

        figure11: {name: 'figure23', status: 0, playerId: PLAYER_2,},

        figure12: {name: 'figure24', status: 0, playerId: PLAYER_2,},

    }

};

var tieKuriuReikia = document.getElementsByClassName('tie-kuriu-reikia');

for (var i = 0; i < tieKuriuReikia.length; i++) {

    var elm = tieKuriuReikia[i];

    elm.addEventListener('dragover', function (e) {

        allowDrop(e, this.getAttribute('id'));

    });

    elm.addEventListener('drop', function (e) {

        drop(e);

    });

}

/**

 *

 * @param {string} figureId

 * @returns {Object|null}

 */

function getFigureObjFromFigureId(figureId) {

    // Surisimas

    var figureObj = null;

    for (var k = 0; k < players3000.PLAYER_1.length; k++) {

        var item = players3000.PLAYER_1[k];

        if (item.name === figureId) {

            figureObj = item;

            break;

        }

    }

    if (!figureObj) {

        for (var k = 0; k < players3000.PLAYER_2.length; k++) {

            var item = players3000.PLAYER_2[k];

            if (item.name === figureId) {

                figureObj = item;

                break;

            }

        }

    }

    if (!figureObj) {

        alert('Pasitikrink ID ');

    }



    return figureObj;

}

var figureElements = document.getElementsByClassName('figure');

for (var i = 0; i < figureElements.length; i++) {

    var elm = figureElements[i];

    elm.addEventListener('dragstart', function (e) {

        var figureObj = getFigureObjFromFigureId(this.getAttribute('id'));



        drag(e);

    });

}

function allowDrop(e, positionId) {

    e.preventDefault();

    isDropAllowed = true;

    var positionElm = document.getElementById(positionId);

    console.log(draginamasElementas);

    var figures = positionElm.getElementsByClassName('figure');

    var figureElm = null;

    if (figures.length) {

        figureElm = figures[0];

    }

    if (figureElm) {

        isDropAllowed = false;

    }

    console.log(positionElm);

    console.log(figureElm);

    console.log(draginamasElementas);

}

var draginamasElementas = null;

var isDropAllowed = false;

function drag(e) {

    draginamasElementas = e.target;

    e.dataTransfer.setData("text", e.target.id);

}

function drop(e) {

    console.log(e);

    e.preventDefault();

    if (!isDropAllowed) {

        return false;

    }

    var data = e.dataTransfer.getData("text");

    e.target.appendChild(document.getElementById(data));

}