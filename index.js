const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const picture = document.getElementById("pic");

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
