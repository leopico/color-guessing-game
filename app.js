const guessValue = document.querySelector(".guess_value");
const squares = document.querySelectorAll(".square");
const resetBtn = document.querySelector(".reset_button");

let colors = [];
let isWin = false;

for (let i = 0; i < 9; i++) {
  colors.push(
    `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`
  );
}
// console.log(colors);

squares.forEach((square, i) => {
  square.style.backgroundColor = colors[i];
  square.setAttribute("color", colors[i]);
});

const valueForGuess = colors[Math.floor(Math.random() * 9)]; //0 - 8
guessValue.innerHTML = valueForGuess;

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    const guessedColor = e.target.getAttribute("color");
    if (!isWin) {
      if (guessedColor === valueForGuess) {
        squares.forEach((square) => {
          square.style.backgroundColor = valueForGuess;
        });
        isWin = true;
      } else {
        square.style.backgroundColor = "#0C1722";
      }
    }
  });
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
