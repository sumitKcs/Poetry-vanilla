const ImageSlider = (SLIDER_IMAGES) => {
  const fragment = document.createDocumentFragment();
  const slider = document.getElementById("slider");
  SLIDER_IMAGES.map((image) => {
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
};

export default ImageSlider;
