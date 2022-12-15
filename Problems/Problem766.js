const { default: AVLTree } = require('avl');

function rotateRight(array) {
    var result = [];
    array.forEach(function (a, i, aa) {
        a.forEach(function (b, j, bb) {
            result[bb.length - j - 1] = result[bb.length - j - 1] || [];
            result[bb.length - j - 1][i] = b;
        });
    });
    return result;
}

const shapes = {
    square: [1, 0, 0, 0],
    topL: [1, 0, 1, 1],
    bottomL: [1, 1, 0, 1],
    bigSquare: [1, 1, 1, 1],
    upRectangle: [1, 0, 1, 0],
    sideRectangle: [1, 1, 0, 0]
}

const directions = [
    'up',
    'down',
    'right',
    'left'
]

const colors = {
    null: 0,
    red: 1,
    green: 2,
    yellow: 3,
    magenta: 4,
    blue: 5,
    lightBlue: 6
}

class PuzzlePiece {

    constructor(id, color, shape, pos, toCopy) {
        if (toCopy instanceof PuzzlePiece){

            this.id = toCopy.id;
            this.color = toCopy.color;
            this.shape = toCopy.shape;
            this.pos = {
                x: toCopy.pos.x,
                y: toCopy.pos.y
            }

        } else {
            this.id = id;
            this.color = color;
            this.shape = shape;
            this.pos = pos;
        }
    }

    move = function(direction, gameState, shallow) {
        if (shallow == undefined) shallow = true;

        gameState = this.subtractPiece(gameState);

        switch (direction) {
            case 'up':

                //Check pos OOB
                if (gameState[0][this.pos.y+1] == undefined) return false;

                //Check shape OOB
                if ((this.shape[2] || this.shape[3]) && (gameState[0][this.pos.y+2] == undefined)) return false;

                //Check squares empty
                if ((!gameState[this.pos.x][this.pos.y+1])) {
                    if ((this.shape[1] ? !gameState[this.pos.x+1][this.pos.y+1] : true)) {
                        if ((this.shape[2] ? !gameState[this.pos.x][this.pos.y+2] : true)) {
                            if ((this.shape[3] ? !gameState[this.pos.x+1][this.pos.y+2] : true)) {
                                if (!shallow) this.pos.y += 1;
                                return true;
                            }
                        }
                    }
                }

                return false;

            case 'right':

                //Check pos OOB
                if (gameState[this.pos.x+1] == undefined) return false;

                //Check shape OOB
                if ((this.shape[1] || this.shape[3]) && gameState[this.pos.x+2] == undefined) return false;

                //Check squares empty
                if ((!gameState[this.pos.x+1][this.pos.y])) {
                    if ((this.shape[1] ? !gameState[this.pos.x+2][this.pos.y] : true)) {
                        if ((this.shape[2] ? !gameState[this.pos.x+1][this.pos.y+1] : true)) {
                            if ((this.shape[3] ? !gameState[this.pos.x+2][this.pos.y+1] : true)) {
                                if (!shallow) this.pos.x += 1;
                                return true;
                            }
                        }
                    }
                }

                return false;

            case 'down':

                //Check pos OOB
                if (gameState[this.pos.x][this.pos.y-1] == undefined) return false;

                //Check shape OOB

                //Check squares empty
                if ((!gameState[this.pos.x][this.pos.y-1])) {
                    if ((this.shape[1] ? !gameState[this.pos.x+1][this.pos.y-1] : true)) {
						if ((this.shape[3] ? !gameState[this.pos.x+1][this.pos.y] : true)) {
							if (!shallow) this.pos.y -= 1;
							return true;
						}
                    }
                }

                return false;

            case 'left':

                //Check pos OOB
                if (gameState[this.pos.x-1] == undefined) return false;

                //Check shape OOB

                //Check squares empty
                if ((!gameState[this.pos.x-1][this.pos.y])) {
					if ((this.shape[2] ? !gameState[this.pos.x-1][this.pos.y+1] : true)) {
						if ((this.shape[3] ? !gameState[this.pos.x][this.pos.y+1] : true)) {
							if (!shallow) this.pos.x -= 1;
							return true;
						}
					}
                }

                return false;

            default:
                return undefined;
        }

    }

    subtractPiece = function(gameState) {
        let toReturn = gameState;

        toReturn[this.pos.x][this.pos.y] = 0;
        if (toReturn[this.pos.x+1] != undefined) {
            toReturn[this.pos.x+1][this.pos.y] = (this.shape[1] ? 0 : toReturn[this.pos.x+1][this.pos.y]);
        }
        if (toReturn[this.pos.x][this.pos.y+1] != undefined) {
            toReturn[this.pos.x][this.pos.y+1] = (this.shape[2] ? 0 : toReturn[this.pos.x][this.pos.y+1]);
        }
        if (toReturn[this.pos.x+1] != undefined && toReturn[this.pos.x+1][this.pos.y+1] != undefined) {
            toReturn[this.pos.x+1][this.pos.y+1] = (this.shape[3] ? 0 : toReturn[this.pos.x+1][this.pos.y+1]);
        }

        return toReturn;

    }

}

class Puzzle {
    pieces = []

    constructor(width, height, toCopy) {
        if (toCopy instanceof Puzzle) {
            this.width = toCopy.width;
            this.height = toCopy.height;
            for (let piece of toCopy.pieces) {
                this.pieces.push(new PuzzlePiece(undefined, undefined, undefined, undefined, piece));
            }
        } else {
            this.width = width,
            this.height = height;
        }
    }

    addPieces = function(piecesToAdd) {
        this.pieces = this.pieces.concat(piecesToAdd);
    }

    buildGameState = function() {

        let toReturn = [];
        for (let x = 0; x < this.width; x++) {
            let toPush = [];
            for (let y = 0; y < this.height; y++) {
                toPush.push(0);
            }
            toReturn.push(toPush);
        }
        for (let piece of this.pieces) {

            toReturn[piece.pos.x][piece.pos.y] = (toReturn[piece.pos.x][piece.pos.y] ? 1 : piece.shape[0]);

            if (toReturn[piece.pos.x+1] != undefined) {
                toReturn[piece.pos.x+1][piece.pos.y] = (toReturn[piece.pos.x+1][piece.pos.y] ? 1 : piece.shape[1]);
            }
            if (toReturn[piece.pos.x][piece.pos.y+1] != undefined) {
                toReturn[piece.pos.x][piece.pos.y+1] = (toReturn[piece.pos.x][piece.pos.y+1] ? 1 : piece.shape[2]);
            }
            if (toReturn[piece.pos.x+1] != undefined && toReturn[piece.pos.x+1][piece.pos.y+1] != undefined) {
                toReturn[piece.pos.x+1][piece.pos.y+1] = (toReturn[piece.pos.x+1][piece.pos.y+1] ? 1 : piece.shape[3]);
            }

        }
        return toReturn;

    }

    buildGameColors = function(){
        let toReturn = [];
        for (let x = 0; x < this.width; x++) {
            let toPush = [];
            for (let y = 0; y < this.height; y++) {
                toPush.push('null');
            }
            toReturn.push(toPush);
        }
        for (let piece of this.pieces) {

            toReturn[piece.pos.x][piece.pos.y] = piece.color;

            if (toReturn[piece.pos.x+1] == 'null' && piece.shape[1]) {
                toReturn[piece.pos.x+1][piece.pos.y] = piece.color;
            }
            if (toReturn[piece.pos.x][piece.pos.y+1] == 'null' && piece.shape[2]) {
                toReturn[piece.pos.x][piece.pos.y+1] = piece.color;
            }
            if (toReturn[piece.pos.x+1] && toReturn[piece.pos.x+1][piece.pos.y+1] == 'null' && piece.shape[3]) {
                toReturn[piece.pos.x+1][piece.pos.y+1] = piece.color;
            }

        }
        toReturn = toReturn.map(x => x.map(y=> colors[y]));
        return toReturn.flat().join('');
    }

    movePiece = function(id, direction, shallow) {

        let pieceToMove = this.pieces.find(x => x.id == id)

        if (pieceToMove) {
            return pieceToMove.move(direction, this.buildGameState(), shallow);
        } else {
            return false;
        }

    }

    printPuzzle = function () {
        let toReturn = [];
        for (let x = 0; x < this.width; x++) {
            let toPush = [];
            for (let y = 0; y < this.height; y++) {
                toPush.push('null');
            }
            toReturn.push(toPush);
        }
        for (let piece of this.pieces) {

            toReturn[piece.pos.x][piece.pos.y] = piece.color;

            if (toReturn[piece.pos.x+1] && toReturn[piece.pos.x+1][piece.pos.y] == 'null' && piece.shape[1]) {
                toReturn[piece.pos.x+1][piece.pos.y] = piece.color;
            }
            if (toReturn[piece.pos.x][piece.pos.y+1] == 'null' && piece.shape[2]) {
                toReturn[piece.pos.x][piece.pos.y+1] = piece.color;
            }
            if (toReturn[piece.pos.x+1] && toReturn[piece.pos.x+1][piece.pos.y+1] == 'null' && piece.shape[3]) {
                toReturn[piece.pos.x+1][piece.pos.y+1] = piece.color;
            }

        }
        let array = rotateRight(toReturn.map(x => x.map(y => y.substr(0, 1).toUpperCase())));
        let toPrint = '';
        array.forEach(x => {
            x.forEach(y => {
                toPrint += `${y} `
            })
            toPrint += '\n';
        })
        return toPrint;
    }

}

const babyPuzzle = [
    new PuzzlePiece(0, 'green', shapes.topL, {x: 0, y: 1}),
    new PuzzlePiece(1, 'red', shapes.square, {x: 0, y: 0}),
    new PuzzlePiece(2, 'red', shapes.square, {x: 1, y: 0}),
    new PuzzlePiece(3, 'red', shapes.square, {x: 2, y: 0}),
    new PuzzlePiece(4, 'red', shapes.square, {x: 3, y: 0}),
    new PuzzlePiece(5, 'red', shapes.square, {x: 1, y: 1}),
    new PuzzlePiece(6, 'red', shapes.square, {x: 2, y: 1}),
    new PuzzlePiece(7, 'red', shapes.square, {x: 2, y: 2})
]

const bigPuzzle = [
    //Magenta block
    new PuzzlePiece(0, 'magenta', shapes.square, {x: 0, y: 0}),
    new PuzzlePiece(1, 'magenta', shapes.square, {x: 1, y: 0}),
    new PuzzlePiece(2, 'magenta', shapes.square, {x: 0, y: 1}),
    new PuzzlePiece(3, 'magenta', shapes.square, {x: 1, y: 1}),
    new PuzzlePiece(4, 'magenta', shapes.square, {x: 0, y: 2}),
    new PuzzlePiece(5, 'magenta', shapes.square, {x: 1, y: 2}),
    //Light blue rectangle
    new PuzzlePiece(6, 'lightBlue', shapes.sideRectangle, {x: 2, y: 0}),
    //Blue square
    new PuzzlePiece(7, 'blue', shapes.bigSquare, {x: 2, y: 1}),
    //Yellow rectangles
    new PuzzlePiece(8, 'yellow', shapes.upRectangle, {x: 4, y: 1}),
    new PuzzlePiece(9, 'yellow', shapes.upRectangle, {x: 5, y: 2}),
    //Green l's
    new PuzzlePiece(10, 'green', shapes.bottomL, {x: 4, y: 0}),
    new PuzzlePiece(11, 'green', shapes.bottomL, {x: 2, y: 3}),
    //Red l's
    new PuzzlePiece(12, 'red', shapes.topL, {x: 1, y: 3}),
    new PuzzlePiece(13, 'red', shapes.topL, {x: 4, y: 3})
]

const testPuzzle = [
    new PuzzlePiece(0, 'red', shapes.topL, {x: 0, y: 1}),
    new PuzzlePiece(1, 'green', shapes.bottomL, {x: 1, y: 0})
]
let counter = 0;

async function Problem766() {
    let basePuzzle = new Puzzle(6,5);
    basePuzzle.addPieces(bigPuzzle);

    let tree = new AVLTree(undefined, true);

    tree.insert(basePuzzle.buildGameColors());

    let recur = async function(tempPuzzle, depth) {
        counter++;

        if (counter %5000 == 0)console.log(`Counter: ${counter} Depth: ${depth}`);
        
        for (let piece of tempPuzzle.pieces) {
            for (dir of directions) {
                let moveCheck = tempPuzzle.movePiece(piece.id, dir, true);
                if (moveCheck) {

                    let copy = new Puzzle(undefined, undefined, tempPuzzle);
                    copy.movePiece(piece.id, dir, false);
                        
                    if (tree.insert(copy.buildGameColors()) != null) {

                        await recur(copy, depth+1);

                    }
                }
            }
        }

    }

    await recur(basePuzzle, 0);

    return `Size: ${tree.size}`;

}

module.exports = {Problem766};