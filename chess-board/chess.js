
const chess = document.querySelector('.chess');

function chessBoard() {
  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 8; l++) {
      const el = document.createElement('div');
      chess.appendChild(el);
      el.classList.add('cell');
      el.setAttribute('row', k);
      el.setAttribute('col', l);
      if ((k + l) % 2 !== 0) {
        el.classList.add('black');
      }
      el.addEventListener('click', function () {
        for (let k = 0; k < 8; k++) {
          for (let l = 0; l < 8; l++) {
            let myEl = document.querySelector(`.cell[row="${k}"][col="${l}"]`);
            if(myEl.classList.contains('red')) {
              myEl.classList.remove('red');
            }
          }
        }
        const currRow = this.getAttribute('row');
        const currCol = this.getAttribute('col');
        let r = 0;
        let c = 0;
        let mxr = 8;
        let mxc = 8;
        let cc = currCol;
        for (let p = currRow; p >= r; p--) {
          if (cc >= 0) {
            const x = document.querySelector(`.cell[row="${p}"][col="${cc}"]`);
            cc--;
            x.classList.add('red');
          }
        }
        cc = currCol;
        for (let p = currRow; p >= r; p--) {
          if (cc <= mxc) {
            const x = document.querySelector(`.cell[row="${p}"][col="${cc}"]`);
            cc++;
            x.classList.add('red');
          }
        }
        cc = currCol;
        for (let p = currRow; p < mxr; p++) {
          if (cc < mxc) {
            const x = document.querySelector(`.cell[row="${p}"][col="${cc}"]`);
            cc++;
            x.classList.add('red');
          }
        }
        cc = currCol;
        for (let p = currRow; p < mxr; p++) {
          if (cc >= 0) {
            const x = document.querySelector(`.cell[row="${p}"][col="${cc}"]`);
            cc--;
            x.classList.add('red');
          }
        }
        // cr = currRow;
        // for (let p = currCol; p < mxc; p--) {
        //   if (cr < mxr) {
        //     const x = document.querySelector(`.cell[row="${cr}"][col="${p}"]`);
        //     console.log(x);
        //     cr++;
        //     x.classList.add('red');
        //   }
        // }
      });
    }
  }
}

chessBoard();
