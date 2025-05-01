document.addEventListener("DOMContentLoaded", function () {
    // Get the container element
    var container = document.getElementById("card-cont");
  
    // Function to fetch and display cards based on the provided category
    function displayCards(category) {
      fetch("js/datas.json")
        .then(response => response.json())
        .then(datas => {
          // Clear the container before appending new cards
          container.innerHTML = '';
  
          // Iterate over the selected category of data and create Bootstrap cards
          datas[category].forEach(card => {
            var cardHtml = `
              <div class="foodcard">
                <div class="foodimg">
                    <img src="${card.src}" width="100%" height="100%" alt="loading...">
                </div>
                <div class="fooddetail">
                    <p class="foodname">${card.title}</p>
                    <hr>
                    <p class="fooddsp">${card.content}</p>
                </div>
                <div class="praice">
                    <p class="praiceval">${card.price}</p>
                </div>
            </div>
            `;
  
            // Append the card HTML to the container
            container.innerHTML += cardHtml;
          });
        })
        .catch(error => console.error("Error fetching data:", error));
    }
  
    // Attach click event listeners to buttons
    document.getElementById("drinks-btn").addEventListener("click", function () {
      displayCards("coolDrinks");
    });
  
    document.getElementById("pizza-btn").addEventListener("click", function () {
      displayCards("Foods");
    });
  
    document.getElementById("snacks-btn").addEventListener("click", function () {
      displayCards("snacks");
    });
  });