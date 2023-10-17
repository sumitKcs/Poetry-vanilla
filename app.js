import APP_DATA from "./data.js";

const navigation = document.getElementById("main_navigation");
const fragment = document.createDocumentFragment();
const slider = document.getElementById("slider");
const collection = document.getElementById("collection");
const category = document.getElementById("category");
const latest_blog = document.getElementById("latest_blog");

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

let collections = "";
APP_DATA.COLLECTIONS.map((collection) => {
  collections =
    collections +
    ` <div class="flex_col gap_sm ">
 <a href="/mood">
   <div class="items_center collection_box shadow">
     <img src=${collection.image} alt=${collection}/>
   </div>
 </a>
 <span>${collection.name}</span>
</div>`;
});

collection.innerHTML = collections;

let categories = "";
APP_DATA.CATEGORIES.map((category) => {
  const url = "/" + `${category}`;
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

let latest_blogs = "";

APP_DATA.BLOGS_LATEST.map((blog) => {
  latest_blogs =
    latest_blogs +
    `<div class="shadow">
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
