const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let score = 10;
let topScore = 0;

document.querySelector(".check-btn").addEventListener("click", () => {
  let guessInput = Number(document.querySelector(".guess-input").value);
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
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-down"></i> DECREASE`)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-up"></i> INCREASE`);
    } else {
      msg.innerHTML = `you lost <i class="fa-solid fa-face-sad-tear"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      document.querySelector("body").style.background = "red";
      document.querySelector(".check-btn").disabled = true;
    }
    document.querySelector(".score").textContent = score;
  }
});

//*************AGAİN *//////////////
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").style.background = "#2d3436";
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = "Starting..";
  console.log(randomNumber);
});
