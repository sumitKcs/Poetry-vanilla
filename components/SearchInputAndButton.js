const searchInput = ` 
<div class="search_wrapper items_center ">
    <input type="text" placeholder="mohabbat, zindagi, raat">
    <span class="search_icon icon-xl"><i class="fa-solid fa-magnifying-glass"></i></span>
</div>
<div class=" items_center"><button class="search_button">Search</button></div>
`;
const search = document.createElement("search");
search.classList.add("search");
search.innerHTML = searchInput;

const SearchInputAndButton = () => {
  const main = document.querySelector("main");

  main.appendChild(search);
};

export default SearchInputAndButton;
