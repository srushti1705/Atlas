const data = [
  { country: "India", capital: "New Delhi" },
  { country: "France", capital: "Paris" },
  { country: "Japan", capital: "Tokyo" },
  { country: "England", capital: "London"}
];

const cardContainer = document.getElementById("card-container");

function showCard(index) {
  const item = data[index];
  cardContainer.innerHTML = `
    <div class="card">
      <h2>${item.country}</h2>
      <p>Capital: ${item.capital}</p>
    </div>
  `;
}

document.querySelector(".start-btn").addEventListener("click", () => {
  showCard(0); // show first item for now
});