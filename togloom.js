const selectedLetters = document.getElementById("SelectedLetters");
const NewLine = document.getElementById("NewLine");
const letters = document.getElementById("letters");
const selectedUnderLines = document.getElementsByClassName("lineStyle");

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const randomWord = "mongolia";
for (let j = 0; j < randomWord.length; j++) {
  const newLine = document.createElement("div");
  newLine.innerHTML = " _ ";
  newLine.className = "lineStyle";
  NewLine.className = "underLineStyle";
  NewLine.appendChild(newLine);
}

let lives = document.getElementById("lives");
let livesDiv = document.createElement("div");
livesDiv.className = "textStyle";
livesDiv.innerHTML = "Your lives";
lives.appendChild(livesDiv);

let livesScore = document.createElement("div");
livesScore.className = "textStyle";
livesScore.innerHTML = "10";
document.body.appendChild(livesScore);

for (let i = 0; i < alphabet.length; i++) {
  let newElement = document.createElement("div");
  newElement.innerHTML = alphabet[i];
  newElement.className = "backgroundStyle";
  letters.className = "box";
  letters.appendChild(newElement);

  newElement.addEventListener("click", function () {
    let clickedLetter = document.createElement("div");
    // const underScore = document.getElementsByClassName("underScore");
    clickedLetter.innerHTML = alphabet[i];
    clickedLetter.className = "letter";
    clickedLetter.id = i.toString();
    newElement.style.pointerEvents = "none";
    newElement.style.backgroundColor = "white";
    newElement.style.color = "rgb(180, 217, 45)";
    selectedLetters.className = "box1";

    if (randomWord.includes(alphabet[i])) {
      for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] == alphabet[i]) {
          selectedUnderLines[j].innerHTML = alphabet[i];
        }
      }
    } else {
      livesScore.innerHTML -= 1;
    }
    if (livesScore.innerHTML <= 0) {
      alert("Game Over");
      alert("Play Again");
      window.location.reload();
    }

    if (NewLine.innerText.replace(/\s/g, "") === randomWord.toString()) {
      alert("You Win");
      window.location.reload();
    }
  });
}

// if (randomWord.includes(alphabet[i]) == true) {
//   const index = randomWord.indexOf(alphabet[i]);
//   selectedUnderLines[index].innerHTML = alphabet[i];
// }
// else {
//   randomWord[j]
//   livesScore.innerHTML -= 1;
// }
