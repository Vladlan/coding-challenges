// z___x
// |
// y
class Box2d {
    oz = 2;
    oy = 1;
    ox = 1;
    R() {
        const ox = this.ox;
        this.ox = this.oz;
        this.oz = ox;
        return [this.oy, 1];
    }
    U() {
        const oy = this.oy;
        this.oy = this.oz;
        this.oz = oy;
        return [this.oy, -1];
    }
    D () {
        const oy = this.oy;
        this.oy = this.oz;
        this.oz = oy;
        return [this.oy, 1];
    }
    L () {
        const ox = this.ox;
        this.ox = this.oz;
        this.oz = ox;
        return [this.ox, -1];
    }
}

getStartPosition = (arr) => {
    for (let y = 0; y < arr.length; y++) {
        const row = arr[y];
        for (let x = 0; x < row.length; x++) {
            const cell = row[x];
            if (cell === "B") {
                return [x, y];
            }
        }
    }
}

function bloxSolver(arr){
    
}



module.exports = { bloxSolver, Box2d, getStartPosition };