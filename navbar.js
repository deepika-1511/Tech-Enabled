/* COMMON NAVIGATION FOR ALL PAGES */

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.getElementById("commonNavbar");

    if (!navbar) return;

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const menuItems = [
        { name: "Home", link: "index.html" },
        { name: "Campus", link: "navigation.html" },
        { name: "Library", link: "library.html" },
        { name: "Blood", link: "blood-donation.html" },
        { name: "Union", link: "union.html" },
        { name: "Smart Canteen", link: "canteen.html" },
        { name: "Lost & Found", link: "lost-found.html" }
    ];

    navbar.innerHTML = `
        <div class="common-brand">
            <a href="index.html">
                <span class="brand-symbol">⚡</span>
                <span>
                    <strong>TECH ENABLED</strong>
                    <small>CAMPUS</small>
                </span>
            </a>
        </div>

        <button class="mobile-menu-btn"
                id="mobileMenuBtn"
                type="button"
                aria-expanded="false"
                aria-controls="commonMenu">
            ☰
        </button>

        <nav class="common-menu" id="commonMenu">
            ${menuItems.map(item => `
                <a href="${item.link}"
                   class="${currentPage === item.link ? "active" : ""}">
                    ${item.name}
                </a>
            `).join("")}
        </nav>

        <a href="admin.html" class="common-admin">
            Admin
        </a>
    `;

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const menu =
        document.getElementById("commonMenu");

    menuButton.addEventListener("click", function () {
        const isOpen = menu.classList.toggle("show");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
});
function displayCampusLocations(locations = campusLocations) {
    const container =
        document.getElementById("locationsgrid");

    if (!container) {
        console.error("Location container not found");
        return;
    }

    container.innerHTML = "";

    if (locations.length === 0) {
        container.innerHTML =
            "<p>No matching locations found.</p>";
        return;
    }

    locations.forEach(function (location) {
        const card = document.createElement("div");
        card.className = "location-card";

        const icon = document.createElement("div");
        icon.className = "location-icon";
        icon.textContent = location.icon || "📍";

        const title = document.createElement("h3");
        title.textContent = location.name;

        const category = document.createElement("span");
        category.className = "location-category";
        category.textContent = location.category;

        const details = document.createElement("p");
        details.textContent =
            "Building: " + (location.building || "-") +
            "\nFloor: " + (location.floor || "-") +
            "\nRoom: " + (location.room || "-");

        const description = document.createElement("p");
        description.textContent = location.description || "";

        card.append(
            icon,
            category,
            title,
            details,
            description
        );

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    displayCampusLocations();
});
/* CAMPUS DIRECTORY - LOCATION CARDS */

const directoryLocations = [
    {
        name: "Computer Science Department",
        icon: "💻",
        category: "Department",
        location: "Computer Science Block"
    },
    {
        name: "Computer Science Laboratory",
        icon: "🖥️",
        category: "Laboratory",
        location: "Computer Science Block"
    },
    {
        name: "Computer Laboratory 2",
        icon: "💻",
        category: "Laboratory",
        location: "Computer Science Block"
    },
    {
        name: "Women's Restroom",
        icon: "🚻",
        category: "Restroom",
        location: "Main Block"
    },
    {
        name: "Men's Restroom",
        icon: "🚻",
        category: "Restroom",
        location: "Main Block"
    },
    {
        name: "Drinking Water Station 1",
        icon: "💧",
        category: "Water",
        location: "Main Block"
    },
    {
        name: "Drinking Water Station 2",
        icon: "💧",
        category: "Water",
        location: "Computer Science Block"
    },
    {
        name: "Central Library",
        icon: "📚",
        category: "Library",
        location: "Library Block"
    },
    {
        name: "College Canteen",
        icon: "🍽️",
        category: "Canteen",
        location: "Canteen Block"
    },
    {
        name: "College Auditorium",
        icon: "🎤",
        category: "Auditorium",
        location: "Auditorium Block"
    },
    {
        name: "Administration Office",
        icon: "🏢",
        category: "Office",
        location: "Main Block"
    },
    {
        name: "Sports Ground",
        icon: "🏃",
        category: "Sports",
        location: "Sports Area"
    }
];

function renderDirectoryCards() {
    const container =
        document.getElementById("campusLocationCards");

    if (!container) return;

    container.innerHTML = "";

    directoryLocations.forEach(function (place) {
        const card = document.createElement("div");
        card.className = "campus-directory-card";

        const icon = document.createElement("div");
        icon.className = "directory-icon";
        icon.textContent = place.icon;

        const title = document.createElement("h3");
        title.textContent = place.name;

        const category = document.createElement("span");
        category.textContent = place.category;

        const location = document.createElement("p");
        location.textContent = place.location;

        card.append(icon, category, title, location);
        container.appendChild(card);
    });
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        renderDirectoryCards
    );
} else {
    renderDirectoryCards();
}