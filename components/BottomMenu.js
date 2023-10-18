const bottom_menu_items = `<a href="/"><i class="fa-solid fa-house"></i></a>
<a href="/routes/explore"><i class="fa-solid fa-compass"></i></a>
<a href="/routes/write"><i class="fa-solid fa-pen-to-square"></i></a>
<a href="/routes/store"><i class="fa-solid fa-store"></i></a>
<a href="/routes/user"><i class="fa-solid fa-user"></i></a>`;

const bottom_menu_wrapper = `
<div class="bottom_menu_items icon_lg" id="bottom_menu">
${bottom_menu_items}
</div>
`;

const bottom_menu = document.createElement("bottom_menu");
bottom_menu.classList.add("bottom_menu");
bottom_menu.classList.add("shadow");
bottom_menu.innerHTML = bottom_menu_wrapper;

const BottomMenu = () => {
  document.body.appendChild(bottom_menu);
};

export default BottomMenu;
