const mood_elements = `
<div class="items_between w_full " id="mood_section">
    <span class="text_xl text_bold">What's your mood</span>
    <span><a href="/mood">view all <span class="text-sm">&gt;</span></a></span>
</div>
<div class="mood_grid gap_lg items_center" id="mood">
    <!-- grid cards -->
    <div class="flex_col gap_sm ">
        <a href="/mood">
            <div class="items_center mood_box icon-xl"><i class="fa-solid fa-heart"></i></div>

        </a>
        <span>Love</span>
    </div>

    <div class="flex_col gap_sm">
        <a href="/mood">
            <div class="items_center mood_box icon-xl"><i class="fa-solid fa-bullseye"></i></div>

        </a>
        <span>Motivation</span>
    </div>
    <div class="flex_col gap_sm">
        <a href="/mood">
            <div class="items_center mood_box icon-xl"><i class="fa-solid fa-heart-crack"></i></div>

        </a>
        <span>Breakup</span>
    </div>
    <div class="flex_col gap_sm">
        <a href="/mood">
            <div class="items_center mood_box icon-xl"><i class="fa-solid fa-face-sad-tear"></i></div>

        </a>
        <span>Sad</span>
    </div>
    <div class="flex_col gap_sm">
        <a href="/mood">
            <div class="items_center mood_box icon-xl"><i class="fa-solid fa-handshake"></i></div>
        </a>
        <span>Friendship</span>
    </div>
</div>
`;

const Mood = () => {
  const mood = document.createElement("mood");
  mood.classList.add("flex_col");
  mood.classList.add("gap_lg");
  mood.classList.add("item_container");
  mood.innerHTML = mood_elements;
  const main = document.querySelector("main");
  main.appendChild(mood);
};

export default Mood;
