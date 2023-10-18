const LatestBLogs = (BLOGS_LATEST) => {
  let latest_blogs = "";

  BLOGS_LATEST.map((blog) => {
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
  const Latest_blogs_wrapper = `   
    <div class="items_between w_full ">
        <span class="text_xl text_bold">Latest Blogs</span>
        <span><a href="/mood">view all <span class="text-sm">&gt;</span></a></span>
    </div>
    <div class=" latest_blog gap_sm " id="latest_blog">
        <!-- grid cards -->
        ${latest_blogs}
    </div>
    </div>`;
  const blogs = document.createElement("blogs");
  blogs.classList.add("flex_col");
  blogs.classList.add("gap_lg");
  blogs.classList.add("item_container");
  blogs.innerHTML = Latest_blogs_wrapper;

  const main = document.querySelector("main");

  main.appendChild(blogs);
};

export default LatestBLogs;
