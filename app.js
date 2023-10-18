import APP_DATA from "./data.js";

const navigation = document.getElementById("main_navigation");
const fragment = document.createDocumentFragment();
const slider = document.getElementById("slider");
const collection = document.getElementById("collection");
const category = document.getElementById("category");
const latest_blog = document.getElementById("latest_blog");
const writer = document.getElementById("writer");
const thought_of_the_day = document.getElementById("thought_of_the_day");
const side_bar = document.getElementById("side_bar");
const menu_icon = document.getElementById("menu_icon");
const sidebar_close_button = document.getElementById("sidebar_close_button");

// main menu
let list = "";
APP_DATA.MENU.map((item) => {
  list = list + ` <a key={item} href="/${item}"> ${item} </a>`;
});

navigation.innerHTML = list;

// slider images

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

// collections

let collections = "";
APP_DATA.COLLECTIONS.map((collection) => {
  const url = "/collection?" + collection;
  collections =
    collections +
    ` <div class="flex_col gap_sm ">
 <a href=${url}>
   <div class="items_center collection_box shadow">
     <img src=${collection.image} alt=${collection}/>
   </div>
 </a>
 <span>${collection.name}</span>
</div>`;
});

collection.innerHTML = collections;

// categories

let categories = "";
APP_DATA.CATEGORIES.map((category) => {
  const url = "/category?" + category;
  categories =
    categories +
    ` <div class="flex_col gap_sm category_item self_center" id="category">
    <a href=${url}>
        <div class="items_center category_box self_center">
        <span class="category_text items_center self_center text_lg">${category}</span>
        </div>

    </a>
</div>`;
});

category.innerHTML = categories;

// latest blogs

let latest_blogs = "";

APP_DATA.BLOGS_LATEST.map((blog) => {
  const url = "/blog?" + blog.title;
  latest_blogs =
    latest_blogs +
    `<a href=${url}><div class="shadow">
  <div class="latest_blog_image_wrapper">
      <img src=${blog.thumbnail}
          alt="blog">
      <div class=" latest_blog_content flex_col gap_sm">
          <h3>${blog.title}</h3>
          <p class="blog_description">
              ${blog.description}
          </p>
      </div>
  </div>
</div>`;
});
latest_blog.innerHTML = latest_blogs;

//writers

let writers = "";
APP_DATA.WRITERS.map((writer) => {
  const url = "/writer?" + writer.name;
  writers =
    writers +
    ` <div class="flex_col gap_sm ">
 <a href=${url}>
   <div class="items_center collection_box shadow">
     <img src=${writer.image} alt=${writer.name}/>
   </div>
 </a>
 <span>${writer.name}</span>
</div>`;
});

writer.innerHTML = writers;

// thought of the day

let thoughts = "";

APP_DATA.THOUGHT_OF_THE_DAY.map((thought) => {
  thoughts =
    thoughts +
    ` <h1>${thought.title}</h1>
  <p class="text_lg">${thought.quote}</p>
  <span class="text_bold ">${thought.author}</span>
  `;
});

thought_of_the_day.innerHTML = thoughts;

// toggle side bar
menu_icon.addEventListener("click", () => {
  side_bar.style.display = "flex";
});

sidebar_close_button.addEventListener("click", () => {
  side_bar.style.display = "none";
});
