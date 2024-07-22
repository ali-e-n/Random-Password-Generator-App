const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pass1El = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");

let passGenerated = false;
let clrBtnStatus = document.getElementById("clr-btn");
if (!passGenerated) {
  clrBtnStatus.style.display = "none";
}

//Generate Password button functionality

function generatePass() {
  if (!passGenerated) {
    for (let i = 0; i < 15; i++) {
      let randomizedPass1 = Math.floor(Math.random() * characters.length);

      pass1El.textContent += characters[randomizedPass1];
    }

    for (let i = 0; i < 15; i++) {
      let randomizedPass2 = Math.floor(Math.random() * characters.length);

      pass2El.textContent += characters[randomizedPass2];
    }

    passGenerated = true;
    clrBtnStatus.style.display = "";
  }
}

//Clear button functionality

function clr() {
  pass1El.textContent = "";
  pass2El.textContent = "";
  passGenerated = false;
  clrBtnStatus.style.display = "none";
}

//To make the Password copied to clipboard when clicked

document.addEventListener("DOMContentLoaded", () => {
  const pass1El = document.getElementById("pass1-el");
  const pass2El = document.getElementById("pass2-el");
  const copiedMessage = document.getElementById("copiedMessage");

  function copyTextToClipboard(text) {
    // Create a temporary textarea element to hold the text
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;

    // Append the textarea to the body, select the text, and copy it
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Show the "Text Copied" message
    copiedMessage.style.display = "block";

    // Hide the message after 2 seconds
    setTimeout(() => {
      copiedMessage.style.display = "none";
    }, 2000);
  }

  pass1El.addEventListener("click", () => {
    copyTextToClipboard(pass1El.innerText);
  });

  pass2El.addEventListener("click", () => {
    copyTextToClipboard(pass2El.innerText);
  });
});
