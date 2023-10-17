import APP_DATA from "./data.js";

const navigation = document.getElementById("main_navigation");
const fragment = document.createDocumentFragment();
const slider = document.getElementById("slider");

let list = "";
APP_DATA.MENU.map((item) => {
  list = list + ` <a key={item} href="/${item}"> ${item} </a>`;
});

navigation.innerHTML = list;

APP_DATA.SLIDER_IMAGES.map((image) => {
  const div = document.createElement("div");
  div.classList.add("swiper-slide");
  const img = document.createElement("img");
  img.src = image;
  div.appendChild(img);
  fragment.appendChild(div);
});
slider.innerHTML = "";
slider.appendChild(fragment);
fragment.innerHTML = "";
