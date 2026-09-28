const canteenMenu = [
    {
        id: 1,
        name: "Idli",
        category: "Breakfast",
        price: 20,
        icon: "🍚",
        description: "Two soft idlis with chutney and sambar."
    },
    {
        id: 2,
        name: "Plain Dosa",
        category: "Breakfast",
        price: 35,
        icon: "🥞",
        description: "Crispy dosa served with chutney."
    },
    {
        id: 3,
        name: "Masala Dosa",
        category: "Breakfast",
        price: 50,
        icon: "🥞",
        description: "Dosa filled with potato masala."
    },
    {
        id: 4,
        name: "Pongal",
        category: "Breakfast",
        price: 35,
        icon: "🍲",
        description: "Traditional South Indian breakfast."
    },
    {
        id: 5,
        name: "Veg Meals",
        category: "Lunch",
        price: 70,
        icon: "🍛",
        description: "Rice with sambar, rasam and vegetables."
    },
    {
        id: 6,
        name: "Veg Fried Rice",
        category: "Lunch",
        price: 65,
        icon: "🍚",
        description: "Rice with fresh vegetables."
    },
    {
        id: 7,
        name: "Lemon Rice",
        category: "Lunch",
        price: 35,
        icon: "🍋",
        description: "Tangy South Indian lemon rice."
    },
    {
        id: 8,
        name: "Curd Rice",
        category: "Lunch",
        price: 30,
        icon: "🍚",
        description: "Rice mixed with fresh curd."
    },
    {
        id: 9,
        name: "Samosa",
        category: "Snacks",
        price: 15,
        icon: "🥟",
        description: "Crispy snack with potato filling."
    },
    {
        id: 10,
        name: "Veg Puff",
        category: "Snacks",
        price: 20,
        icon: "🥐",
        description: "Freshly baked vegetable puff."
    },
    {
        id: 11,
        name: "Sandwich",
        category: "Snacks",
        price: 40,
        icon: "🥪",
        description: "Fresh vegetable sandwich."
    },
    {
        id: 12,
        name: "French Fries",
        category: "Snacks",
        price: 45,
        icon: "🍟",
        description: "Crispy potato fries."
    },
    {
        id: 13,
        name: "Tea",
        category: "Drinks",
        price: 12,
        icon: "🍵",
        description: "Freshly prepared hot tea."
    },
    {
        id: 14,
        name: "Coffee",
        category: "Drinks",
        price: 15,
        icon: "☕",
        description: "Traditional South Indian filter coffee."
    },
    {
        id: 15,
        name: "Fresh Lime Juice",
        category: "Drinks",
        price: 25,
        icon: "🍹",
        description: "Refreshing lime juice."
    },
    {
        id: 16,
        name: "Chocolate Milkshake",
        category: "Drinks",
        price: 55,
        icon: "🥤",
        description: "Chilled chocolate milkshake."
    }
];

let cart = {};
let activeCategory = "All";

const foodGrid = document.getElementById("foodGrid");
const searchInput = document.getElementById("foodSearch");

function getStoredOrders() {
    try {
        const orders = JSON.parse(
            localStorage.getItem("canteenOrders") || "[]"
        );
        return Array.isArray(orders) ? orders : [];
    } catch {
        return [];
    }
}

function renderMenu() {
    const search = searchInput.value.trim().toLowerCase();

    const filtered = canteenMenu.filter(food => {
        const matchesCategory =
            activeCategory === "All" ||
            food.category === activeCategory;

        const matchesSearch =
            food.name.toLowerCase().includes(search) ||
            food.category.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
    });

    foodGrid.innerHTML = "";

    if (filtered.length === 0) {
        foodGrid.textContent = "No matching food found.";
        return;
    }

    filtered.forEach(food => {
        const card = document.createElement("article");
        card.className = "food-card";

        card.innerHTML = `
            <div class="food-image">${food.icon}</div>

            <div class="food-info">
                <span class="food-category">
                    ${food.category}
                </span>

                <h3>${food.name}</h3>

                <p class="food-description">
                    ${food.description}
                </p>

                <div class="food-bottom">
                    <span class="price">₹${food.price}</span>

                    <button class="add-btn" type="button">
                        + Add
                    </button>
                </div>
            </div>
        `;

        card.querySelector(".add-btn")
            .addEventListener("click", () => addToCart(food.id));

        foodGrid.appendChild(card);
    });
}

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
        activeCategory = button.dataset.category;
        renderMenu();
    });
});

searchInput.addEventListener("input", renderMenu);

function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    renderCart();
}

function changeQuantity(id, amount) {
    cart[id] = (cart[id] || 0) + amount;

    if (cart[id] <= 0) {
        delete cart[id];
    }

    renderCart();
}

function renderCart() {
    const container = document.getElementById("cartItems");
    const countElement = document.getElementById("cartCount");
    const totalElement = document.getElementById("cartTotal");

    container.innerHTML = "";

    let total = 0;
    let count = 0;

    Object.entries(cart).forEach(([id, quantity]) => {
        const food = canteenMenu.find(
            item => item.id === Number(id)
        );

        if (!food) return;

        total += food.price * quantity;
        count += quantity;

        const item = document.createElement("div");
        item.className = "cart-item";

        item.innerHTML = `
            <div>
                <h4>${food.name}</h4>
                <p>₹${food.price * quantity}</p>
            </div>

            <div class="quantity-controls">
                <button class="minus" type="button">−</button>
                <span>${quantity}</span>
                <button class="plus" type="button">+</button>
            </div>
        `;

        item.querySelector(".minus")
            .addEventListener("click", () => {
                changeQuantity(food.id, -1);
            });

        item.querySelector(".plus")
            .addEventListener("click", () => {
                changeQuantity(food.id, 1);
            });

        container.appendChild(item);
    });

    if (count === 0) {
        container.textContent = "Your cart is empty.";
    }

    countElement.textContent = `${count} items`;
    totalElement.textContent = `₹${total}`;
}

document.getElementById("orderForm")
    .addEventListener("submit", event => {
        event.preventDefault();

        const name = document
            .getElementById("studentName")
            .value.trim();

        const className = document
            .getElementById("studentClass")
            .value.trim();

        const pickupTime = document
            .getElementById("pickupTime")
            .value;

        const items = [];
        let total = 0;

        Object.entries(cart).forEach(([id, quantity]) => {
            const food = canteenMenu.find(
                item => item.id === Number(id)
            );

            if (!food) return;

            items.push({
                id: food.id,
                name: food.name,
                price: food.price,
                quantity
            });

            total += food.price * quantity;
        });

        if (items.length === 0) {
            alert("Please add food to your cart.");
            return;
        }

        if (!name || !className || !pickupTime) {
            alert("Please complete your pickup details.");
            return;
        }

        const order = {
            id: "CAN-" + Date.now(),
            name,
            className,
            pickupTime,
            items,
            total,
            status: "Pending",
            date: new Date().toLocaleString()
        };

        const orders = getStoredOrders();
        orders.unshift(order);

        try {
            localStorage.setItem(
                "canteenOrders",
                JSON.stringify(orders)
            );
        } catch {
            alert("Unable to save order on this device.");
            return;
        }

        document.getElementById("confirmedOrderId")
            .textContent = order.id;

        document.getElementById("confirmedPickup")
            .textContent = `Pickup time: ${pickupTime}`;

        document.getElementById("confirmationModal")
            .classList.remove("hidden");

        cart = {};
        renderCart();
        event.target.reset();
        renderOrderHistory();
    });

function renderOrderHistory() {
    const container = document.getElementById("orderHistory");
    const orders = getStoredOrders();

    container.innerHTML = "";

    if (orders.length === 0) {
        container.textContent = "No orders placed yet.";
        return;
    }

    orders.forEach(order => {
        const card = document.createElement("div");
        card.className = "history-card";

        const title = document.createElement("h3");
        title.textContent = order.id;

        const details = document.createElement("p");
        details.textContent =
            `${order.name} • ${order.className}`;

        const foodList = document.createElement("p");
        foodList.textContent = order.items
            .map(item => `${item.name} × ${item.quantity}`)
            .join(", ");

        const pickup = document.createElement("p");
        pickup.textContent = `Pickup: ${order.pickupTime}`;

        const amount = document.createElement("p");
        amount.textContent = `Total: ₹${order.total}`;

        const status = document.createElement("span");
        status.className = "status";

        if (order.status === "Ready for Pickup") {
            status.classList.add("ready");
        }

        status.textContent = order.status;

        card.append(
            title,
            details,
            foodList,
            pickup,
            amount,
            status
        );

        container.appendChild(card);
    });
}

document.getElementById("closeModal")
    .addEventListener("click", () => {
        document.getElementById("confirmationModal")
            .classList.add("hidden");
    });

renderMenu();
renderCart();
renderOrderHistory();