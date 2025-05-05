const alldatas = [
    {
        title: "Mango Juice ",
        content: "The king of fruits turned into a golden, pulpy delight.",
        src: "/foods/juice1.jpg",
        price: "30rs"
    },
    {
        title: "Pomegranate Juice",
        content: "Rich in antioxidants, deep red, and full of blessings",
        src: "/foods/juice2.jpeg",
        price: "25rs"
    },
    {
        title: "Orange Juice",
        content: "A classic, tangy, vitamin C-packed sipper.",
        src: "/foods/juice3.jpeg",
        price: "45rs"
    }, {
        title: "Butter Chicken ",
        content: "Lorem ipsum dolor sit amet consectetur.",
        src: "/foods/food2.jpg",
        price: "110rs"
    },
    {
        title: "Paneer Tikka",
        content: "Lorem ipsum dolor sit amet consectetur.",
        src: "/foods/food3.png",
        price: "70rs"
    },
    {
        title: "Tandoori Chicken",
        content: "Lorem ipsum dolor sit amet consectetur.",
        src: "/foods/food4.webp",
        price: "200rs"
    }, {
        title: "Murukku (Chakli) ",
        content: "South Indian spiral snack, crunchy and made with rice flour.",
        src: "/foods/snack3.png",
        price: "50rs"
    },
    {
        title: "Nachos with Cheese Dip",
        content: "Corn chips loaded with melty cheese or salsa.",
        src: "/foods/snack4.jpg",
        price: "40rs"
    }, {
        title: "Noodles (Hakka/Chili)",
        content: "Lorem ipsum dolor sit amet consectetur.",
        src: "/foods/food6.jpg",
        price: "70rs"
    },
    {
        title: "Mutton Rogan Josh",
        content: "Lorem ipsum dolor sit amet consectetur.",
        src: "/foods/food7.jpg",
        price: "180rs"
    },
    {
        title: "Shawarma ",
        content: "Lorem ipsum dolor sit amet consectetur.",
        src: "/foods/food8.avif",
        price: "90rs"
    },
    {
        title: "Apple Juice",
        content: "Sweet, crisp, and gentle on the stomach.",
        src: "/foods/juice6.webp",
        price: "35rs"
    }
]

const foodContainer = document.getElementById('card-cont');

alldatas.forEach(card => {
    const foodCardHTML = `
        <div class="foodcard" data-aos="fade-up" data-aos-delay="200">
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
            <div class="praice">
                    <button><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
        </div>
    `;
    foodContainer.innerHTML += foodCardHTML;
});

let cart = [];
const cartItemsContainer = document.getElementById("cartitems");
const totalAmountElement = document.getElementById("total");
const cartCountElement = document.getElementById("cart-count"); // 🔥 New line

// Update the cart UI
function updateCart() {
    cartCountElement.innerText = cart.length; // 👈 Update cart count

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "Your cart is empty";
        totalAmountElement.innerText = "0.00 rs";
        return;
    }

    cartItemsContainer.innerHTML = ""; // clear previous
    let total = 0;

    cart.forEach((item, index) => {
        const itemPrice = parseFloat(item.price.replace("rs", ""));
        total += itemPrice;

        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
            <p>${item.title} - ${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalAmountElement.innerText = `${total.toFixed(2)} rs`;
}

// Add to cart handler
function addToCart(item) {
    cart.push(item);
    updateCart();
}

// Attach add to cart buttons
document.querySelectorAll(".foodcard").forEach((card, index) => {
    const button = card.querySelector("button");
    button.addEventListener("click", () => {
        addToCart(alldatas[index]);
    });
});

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
