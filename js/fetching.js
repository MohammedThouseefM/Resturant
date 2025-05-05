document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("card-cont");

  function displayCards(category) {
      fetch("js/datas.json")
          .then(response => response.json())
          .then(datas => {
              container.innerHTML = '';

              datas[category].forEach(card => {
                  const cardHtml = `
                  <div class="foodcard" data-aos="fade-up" data-aos-delay="200">
                      <div class="foodimg">
                          <img src="${card.src}" width="100%" height="100%" alt="${card.title}">
                      </div>
                      <div class="fooddetail">
                          <p class="foodname">${card.title}</p>
                          <hr>
                          <p class="fooddsp">${card.content}</p>
                      </div>
                      <div class="price">
                          <p class="priceval">${card.price}</p>
                      </div>
                      <div class="price">
                          <button><i class="fa-solid fa-cart-shopping"></i></button>
                      </div>
                  </div>`;
                  
                  container.innerHTML += cardHtml;
              });
          })
          .catch(error => console.error("Error fetching data:", error));
  }

  document.getElementById("drinks-btn").addEventListener("click", () => displayCards("coolDrinks"));
  document.getElementById("pizza-btn").addEventListener("click", () => displayCards("Foods"));
  document.getElementById("snacks-btn").addEventListener("click", () => displayCards("snacks"));
});
