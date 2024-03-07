const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".card-text");
const nextBtn = document.querySelector(".nextBtn");

function getQuote() {
  const request = fetch("https://api.kanye.rest");
  request.then((data) => {
    let thought = data.json();
    thought.then((thought) => {
      cardText.textContent = thought.quote;
    });
  });
}
cardTitle.textContent = "Thought of the Day!";

nextBtn.addEventListener("click", () => {
  getQuote();
});

nextBtn.addEventListener("click", () => {
  nextBtn.setAttribute("class", "btn btn-danger");
});
