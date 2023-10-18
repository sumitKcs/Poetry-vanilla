const Header = (MENU, LOGO) => {
  let list = "";
  MENU.map((item) => {
    list = list + ` <a key=${item} href="/${item.toLowerCase()}"> ${item} </a>`;
  });

  const header_elements = ` 
<div class="mobile_menu icon-xl" id="menu_icon">
    <i class="fa-solid fa-bars"></i>
</div>
<div class="logo items_left">
    <img src="${LOGO}" alt="logo">
</div>
<nav class="items_center text_large" id="main_navigation">
    ${list}
</nav>
<a href="/routes/user" class="login items_right text_large">Login</a>
`;

  const aside = `<aside class="side_navigation text_lg shadow" id="side_bar">
<div class=" items_right" id="sidebar_close_button"><button class="close_button text_lg text_bold">X</button>
</div>
<div class="side_navigation_col1 gap_sm">
    <div class="items_left gap_sm "><i class="fa-solid fa-magnifying-glass icon_lg"></i><span>Search</span>
    </div>
    <div class="items_left gap_sm"><i class="fa-solid fa-feather-pointed icon_lg"></i><span>Writers</span></div>
    <div class="items_left gap_sm"><i class="fa-regular fa-newspaper icon_lg"></i><span>Blog</span></div>
    <div class="items_left gap_sm"><i class="fa-regular fa-face-smile-wink icon_lg"></i><span>Shayari
            Moods</span></div>
    <div class="items_left gap_sm"><i class="fa-solid fa-shop"></i><span>Store
        </span></div>
    <div class="items_left gap_sm"><i class="fa-brands fa-whatsapp icon_lg"></i><span>Whatsapp Community</span>
    </div>

</div>

<div class="w-full side_navigation_col2 gap_lg ">
    <div>
        <hr>
    </div>
    <div class=" w-full items_center gap_lg ">
        <a href=""><i class="fa-brands fa-youtube icon_lg"></i></a>
        <a href=""><i class="fa-brands fa-facebook icon_lg"></i></a>
        <a href=""><i class="fa-brands fa-square-instagram icon_lg"></i></a>
        <a href=""><i class="fa-brands fa-discord icon_lg"></i></a>
    </div>
</div>
</aside>`;

  const temp_div = document.createElement("div");
  temp_div.innerHTML = aside;

  const header = document.createElement("header");
  header.classList.add("shadow");
  header.id = "header";
  header.innerHTML = header_elements;

  document.body.insertBefore(header, document.body.firstChild);
  document.body.insertBefore(temp_div.firstChild, document.body.firstChild);
};

// toggle side bar
const ToggleSideBar = () => {
  const side_bar = document.getElementById("side_bar");
  const menu_icon = document.getElementById("menu_icon");
  const sidebar_close_button = document.getElementById("sidebar_close_button");
  menu_icon.addEventListener("click", () => {
    side_bar.style.display = "flex";
  });

  sidebar_close_button.addEventListener("click", () => {
    side_bar.style.display = "none";
  });
};

export { Header, ToggleSideBar };

/*  */
