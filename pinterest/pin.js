const pins = [
    { height: 160, id: 1 },
    { height: 70, id: 2 },
    { height: 130, id: 3 },
    { height: 160, id: 4 },
    { height: 70, id: 5 },
    { height: 130, id: 6 },
    { height: 70, id: 7 },
    { height: 80, id: 8 },
    { height: 100, id: 9 },
    { height: 130, id: 10 },
    { height: 140, id: 11 },
    { height: 160, id: 12 },
    { height: 100, id: 13 },
    { height: 60, id: 14 }
];

const NUM_COLS = 3;
const gap = 10;
const COL_WIDTH = 70;

function arrange() {
    let cols = Array(NUM_COLS).fill(0);
    pins.map((p) => {
        let shortestcol = 0;
        for (let i = 1; i < NUM_COLS; i++) {
            if (cols[i] < cols[shortestcol]) {
                shortestcol = i;
            }
        }

        let left = shortestcol * COL_WIDTH + gap * shortestcol;
        let top = gap + cols[shortestcol];
        cols[shortestcol] = top + p.height;

        return {
            ...pin,
            top,
            left
        }
    })
}
