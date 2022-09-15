const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let score = 10;
let topScore = 0;

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  //   console.log(guessInput);
  const msg = document.querySelector(".msg");
  if (!guessInput) {
    document.querySelector(".msg").innerText = "please enter anumber";
  } else if (randomNumber === guessInput) {
    document.querySelector(
      ".msg"
    ).innerHTML = `congrats you win <i class="fa-solid fa-face-smile fa-2x"></i>`;
    document.querySelector("body").style.background = "green";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score--;
    guessInput > randomNumber
      ? (msg.innerText = "decrease")
      : (msg.innerText = "increase");
  }
});
