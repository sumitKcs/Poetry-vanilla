const Writers = (WRITERS) => {
  let writers_list = "";
  WRITERS.map((writer) => {
    const url = "/writer?" + writer.name;
    writers_list =
      writers_list +
      ` <div class="flex_col gap_sm ">
 <a href=${url}>
   <div class="items_center collection_box shadow">
     <img src=${writer.image} alt=${writer.name}/>
   </div>
 </a>
 <span>${writer.name}</span>
</div>`;
  });

  const Writer_wrapper = `
    <div class="items_between w_full ">
        <span class="text_xl text_bold">Writers</span>
        <span><a href="/writers">view all <span class="text-sm">&gt;</span></a></span>
    </div>


    <div class="collection_grid gap_sm items_center" id="writer">
        <!-- grid cards -->
        ${writers_list}

    </div>`;

  const writers = document.createElement("writers");
  writers.classList.add("flex_col");
  writers.classList.add("gap_lg");
  writers.classList.add("item_container");
  writers.innerHTML = Writer_wrapper;

  const main = document.querySelector("main");

  main.appendChild(writers);
};

export default Writers;
