const QuoteOfTheDay = (QUOTES) => {
  let quotes = "";

  QUOTES.map((quote) => {
    quotes =
      quotes +
      ` <h1>${quote.title}</h1>
      <p class="text_lg">${quote.quote}</p>
      <span class="text_bold ">${quote.author}</span>
      `;
  });

  const quotes_wrapper = `<section class="w_full items_centers self_center">
    <div class=" items_center self_center">
        <div class="thought_of_the_day flex_col gap_lg" id="thought_of_the_day">
            ${quotes}
        </div>
    </div>
</section>`;

  const quoteOfTheDay = document.createElement("quoteOfTheDay");
  quoteOfTheDay.classList.add("w_full");
  quoteOfTheDay.classList.add("items_centers");
  quoteOfTheDay.classList.add("self_center");
  quoteOfTheDay.innerHTML = quotes_wrapper;

  const main = document.querySelector("main");

  main.appendChild(quoteOfTheDay);
};

export default QuoteOfTheDay;
