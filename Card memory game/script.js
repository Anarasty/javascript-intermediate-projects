const moves = document.querySelector("#moves-count"),
  timeValue = document.querySelector("#time"),
  startButton = document.querySelector("#start"),
  stopButton = document.querySelector("#stop"),
  gameContainer = document.querySelector(".game-container"),
  result = document.querySelector("#result"),
  controls = document.querySelector(".controls-container");

let cards,
  interval,
  firstCard = false,
  secondCard = false;

const items = [
  { name: "bee", image: "bee.png" },
  { name: "cat", image: "cat.png" },
  { name: "cow", image: "cow.png" },
  { name: "elephant", image: "elephant.png" },
  { name: "fox", image: "fox.png" },
  { name: "hen", image: "hen.png" },
  { name: "jellyfish", image: "jellyfish.png" },
  { name: "koala", image: "koala.png" },
  { name: "penguin", image: "penguin.png" },
  { name: "toucan", image: "toucan.png" },
  { name: "turtle", image: "turtle.png" },
  { name: "whale", image: "whale.png" },
];

let seconds = 0, 
    minutes = 0;

let movesCount = 0,
    winCount = 0;

const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
};

let secondsValue = seconds < 10