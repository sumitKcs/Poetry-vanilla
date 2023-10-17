import APP_DATA from "./data.js";

const navigation = document.getElementById("main_navigation");
const fragment = document.createDocumentFragment();

let list = "";
APP_DATA.MENU.map((item) => {
  list = list + ` <a key={item} href="/${item}"> ${item} </a>`;
});

navigation.innerHTML = list;


