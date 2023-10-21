const side_bar = document.getElementById("side_bar");
const menu_icon = document.getElementById("menu_icon");
const sidebar_close_button = document.getElementById("sidebar_close_button");
const like_button = document.getElementById("like_button");
const save_button = document.getElementById("save_button");
const tab_container = document.getElementById("tab_container");
const tab_1 = document.getElementById("tab_1");
const tab_2 = document.getElementById("tab_2");
const tab_3 = document.getElementById("tab_3");

// toggle mobile menu
menu_icon.addEventListener("click", () => {
  side_bar.style.display = "flex";
});

sidebar_close_button.addEventListener("click", () => {
  side_bar.style.display = "none";
});

function likeHandler(e) {
  like_button.innerHTML = `<i class="fa-solid fa-heart  icon-xl text_red"></i>`;
  like_button.removeEventListener("click", likeHandler);
  like_button.addEventListener("click", filledLikeHandler);
}

function filledLikeHandler(e) {
  like_button.innerHTML = `<i
  class="fa-regular fa-heart icon-xl">`;
  like_button.removeEventListener("click", filledLikeHandler);
  like_button.addEventListener("click", likeHandler);
}

function saveHandler(e) {
  save_button.innerHTML = `<i class="fa-solid fa-bookmark text_red"></i>`;
  save_button.removeEventListener("click", saveHandler);
  save_button.addEventListener("click", filledSaveHandler);
  console.log("called");
}

function filledSaveHandler(e) {
  save_button.innerHTML = `<i class="fa-regular fa-bookmark icon-xl"></i>`;
  save_button.removeEventListener("click", filledSaveHandler);
  save_button.addEventListener("click", saveHandler);
}
tab_1.style.display = "grid";
tab_container.appendChild(tab_1);

function firstTabHandler(e) {
  tab_1.style.display = "grid";
  tab_container.innerHTML = "";
  tab_container.appendChild(tab_1);
}

function secontTabHandler(e) {
  tab_2.style.display = "grid";
  tab_container.innerHTML = "";
  tab_container.appendChild(tab_2);
}
function thirdTabHandler(e) {
  tab_3.style.display = "grid";
  tab_container.innerHTML = "";
  tab_container.appendChild(tab_3);
}
