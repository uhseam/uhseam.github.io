// script.js
let noCount = 0;
let yesPressed = false;

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const app = document.getElementById("app");
const loveBear = document.getElementById("loveBear");
const question = document.getElementById("question");

noButton.addEventListener("click", function() {
  noCount++;
  yesButton.style.fontSize = `${noCount * 20 + 16}px`; // Adjusting the "Yes" button size
  const phrases = [
    "NO",
    "Are you sure pookie dookie???",
    "...why?",
    "What the hells?",
    "FINE, JUST SAY YOU DON'T LOVE ME",
    "I'm crying right now",
    "PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE",
    "I'm breaking up with you",
    "I didn't actually mean that, I'm sorry",
    "(ಥ﹏ಥ)",
  ];
  noButton.innerText = phrases[Math.min(noCount, phrases.length - 1)];
});

yesButton.addEventListener("click", function() {
  yesPressed = true;
  if (yesPressed) {
    app.innerHTML = `<img src="https://gifdb.com/images/high/sweet-mochi-cats-love-bdyrh8sbc04airl4.gif" alt="Bear Kisses"/><div class="text-4xl font-bold my-4">Ok yay!!!</div>`;
  }
});