const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const picture = document.getElementById("pic");
const mainContainer = document.getElementById("picture__container");
const rect = document.getElementById("rect");
const zoom = document.getElementById("zoom");

// List of Pictures
picList = [pic1, pic2, pic3, pic4];

// Active Picture
let picActive = 1;

// Add border to the active side image
pic1.classList.add("img-active");

// change active image
const changeImage = (imgSrc, n) => {
  // change the main image
  picture.src = imgSrc;
  //   remove the border from the previous active side image
  picList[picActive - 1].classList.remove("img-active");
  // add to the active image
  picList[n - 1].classList.add("img-active");
  //   update the active side picture
  picActive = n;
};

// Width and Heigth of the main picture in px
let w1 = mainContainer.offsetWidth;
let h1 = mainContainer.offsetHeight;

// zoom ratio
let ratio = 3;

// zoom background-image size
zoom.style.backgroundSize = `${w1 * ratio}px  ${h1 * ratio}px`;
// coordinates of the mouse
let x, y, xx, yy;

// Width and Height  of the selector
let w2 = rect.offsetWidth;
let h2 = rect.offsetHeight;

// zoom window width and height
zoom.style.width = `400px`;
zoom.style.height = `400px`;

// half of the  width and height
w2 = w2 / 2;
h2 = h2 / 2;

// moving the selector box
const move = e => {
  // How far is the mouse cursor from an element
  // x far from left
  x = e.offsetX;
  // y far from top
  y = e.offsetY;

  xx = x * ratio;
  yy = x * ratio;

  // Keeping the selector inside the picture
  // left of picture
  if (x < w2) {
    x = w2;
  }

  // right of picture
  if (x > w1 - w2) {
    x = w1 - w2;
  }

  //   top of picture
  if (y < h2) {
    y = h2;
  }

  // bottom of picture
  if (y > h1 - h2) {
    y = h1 - h2;
  }

  //   change the position of the selector
  rect.style.left = x + "px";
  rect.style.top = y + "px";

  //   changing background image of zoom window
  zoom.style.backgroundPosition = `-${xx * ratio}px -${yy * ratio}px`;
};

mainContainer.addEventListener("mousemove", event => {
  move(event);
  addOpacty();
});

const addOpacty = () => {
  rect.classList.add("rect-active");
};
