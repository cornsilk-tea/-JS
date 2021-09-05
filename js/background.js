const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const choosenImage = images[Math.floor(Math.random()*images.length)]
// const bgImage = document.createElement("img");


// bgImage.src = `img/${choosenImage}`;
// // document.body.style.backgroundImage = bgImage.src
// document.body.appendChild(bgImage)
const body = document.querySelector("body");

const IMG_NUMBER = 9;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${choosenImage}`;
  image.classList.add("bgImage");
  body.appendChild(image);
  image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);

  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
