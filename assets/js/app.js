const side_bar = document.getElementById("side_bar");
const menu_icon = document.getElementById("menu_icon");
const sidebar_close_button = document.getElementById("sidebar_close_button");
const like_button = document.getElementById("like_button");
const save_button = document.getElementById("save_button");
const tab_container = document.getElementById("tab_container");
const tab_1 = document.getElementById("tab_1");
const tab_2 = document.getElementById("tab_2");
const tab_3 = document.getElementById("tab_3");
const chip_1 = document.getElementById("chip_1");
const chip_2 = document.getElementById("chip_2");
const chip_3 = document.getElementById("chip_3");
const reaction_icons = document.querySelectorAll(".reaction_icons");
console.log("reactionicon", reaction_icons);

if (tab_1) {
  tab_1.style.display = "flex";
  tab_container.innerHTML = "";
  tab_container.appendChild(tab_1);
}

// toggle mobile menu
menu_icon.addEventListener("click", () => {
  side_bar.style.display = "flex";
});

sidebar_close_button.addEventListener("click", () => {
  side_bar.style.display = "none";
});

// tabs handler - profile section

function firstTabHandler(e) {
  tab_1.style.display = "flex";
  tab_container.innerHTML = "";
  tab_container.appendChild(tab_1);
}

function secondTabHandler(e) {
  tab_2.style.display = "flex";
  tab_container.innerHTML = "";
  tab_container.appendChild(tab_2);
}
function thirdTabHandler(e) {
  tab_3.style.display = "flex";
  tab_container.innerHTML = "";
  tab_container.appendChild(tab_3);
}

// chips handler - profile section
function firstChipHandler(e) {
  chip_1.style.display = "flex";
  tab_container.innerHTML = "";
  tab_container.appendChild(chip_1);
}

function secondChipHandler(e) {
  chip_2.style.display = "flex";
  tab_container.innerHTML = "";
  tab_container.appendChild(chip_2);
}
function thirdChipHandler(e) {
  chip_3.style.display = "flex";
  tab_container.innerHTML = "";
  tab_container.appendChild(chip_3);
}

// sher card reaction button toggling
// Define a click event handler function
function toggleFill() {
  // Check if the SVG is currently filled with red
  const currentFill = this.getAttribute("fill");
  if (currentFill === "red") {
    // If it's already red, change it back to white (or any other color)
    this.setAttribute("fill", "white");
  } else {
    // If it's not red, fill it with red
    this.setAttribute("fill", "red");
  }
}

// Add the click event listener to each SVG element
reaction_icons.forEach((icon) => {
  icon.addEventListener("click", toggleFill);
});
