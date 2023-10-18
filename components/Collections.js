const main = document.querySelector("main");

const Collections = (COLLECTIONS) => {
  let collection_items = "";
  COLLECTIONS.map((collection) => {
    const url = "/collection?" + collection;
    collection_items =
      collection_items +
      ` <div class="flex_col gap_sm ">
 <a href=${url}>
   <div class="items_center collection_box shadow">
     <img src=${collection.image} alt=${collection}/>
   </div>
 </a>
 <span>${collection.name}</span>
</div>`;
  });

  const collection_wrapper = `
<div class="items_between w_full ">
    <span class="text_xl text_bold">Browse Collections</span>
    <span><a href="/collections">view all <span class="text-sm">&gt;</span></a></span>
</div>


<div class="collection_grid gap_sm items_center" id="collection">
    <!-- grid cards -->
    ${collection_items}

</div>`;

  const collection = document.createElement("collection");
  collection.classList.add("flex_col");
  collection.classList.add("gap_lg");
  collection.classList.add("item_container");
  collection.innerHTML = collection_wrapper;
  main.appendChild(collection);
};

export default Collections;
