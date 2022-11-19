const resetButton = document.querySelector("#reset");
const playtoSelect = document.querySelector("#playto");

let winningScore = parseInt(playtoSelect.value);
let isGameOver = false;

const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

function updataScores(current, other) {
  current.score += 1;
  if (current.score === winningScore) {
    isGameOver = true;
    current.display.classList.add("has-text-success");
    other.display.classList.add("has-text-danger");
    current.button.disabled = true;
    other.button.disabled = true;
  }
  current.display.textContent = current.score;
}

p1Button.addEventListener("click", () => updataScores(p1, p2));
p2Button.addEventListener("click", () => updataScores(p2, p1));

function resetPlayer(player) {
  player.score = 0;
  player.display.textContent = 0;
  player.button.disabled = false;
  player.display.classList.remove("has-text-success", "has-text-danger");
}

function reset() {
  isGameOver = false;
  resetPlayer(p1);
  resetPlayer(p2);
}

resetButton.addEventListener("click", reset);

playtoSelect.addEventListener("change", () => {
  winningScore = parseInt(playtoSelect.value);
  reset();
});
