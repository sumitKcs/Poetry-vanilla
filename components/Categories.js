const main = document.querySelector("main");

const Categories = (CATEGORIES) => {
  let categories_items = "";
  CATEGORIES.map((category) => {
    const url = "/category?" + category;
    categories_items =
      categories_items +
      ` <div class="flex_col gap_sm category_item self_center" id="category">
    <a href=${url}>
        <div class="items_center category_box self_center">
        <span class="category_text items_center self_center text_lg">${category}</span>
        </div>

    </a>
</div>`;
  });

  const categories_wrapper = `
<div class="items_between w_full ">
    <span class="text_xl text_bold">Choose Category</span>
    <span><a href="/mood">view all <span class="text-sm">&gt;</span></a></span>
</div>
<div class="category_grid gap_sm items_center self_center" id="category">
    <!-- grid cards -->
    ${categories_items}
</div>`;

  const categories = document.createElement("categories");
  categories.classList.add("flex_col");
  categories.classList.add("gap_lg");
  categories.classList.add("item_container");
  categories.innerHTML = categories_wrapper;
  main.appendChild(categories);
};

export default Categories;
