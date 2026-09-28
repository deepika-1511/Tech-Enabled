/* ==========================================
   TECH ENABLED CAMPUS
   SMART CAMPUS NAVIGATION
   ========================================== */


/* 1. CAMPUS LOCATION DATA */

const campusLocations = [
    {
        id: 1,
        name: "Computer Science Department",
        category: "department",
        icon: "🏫",
        building: "Computer Science Block",
        floor: "First Floor",
        room: "CS-101",
        description: "Department of Computer Science and academic classrooms."
    },
    {
        id: 2,
        name: "Computer Science Laboratory",
        category: "lab",
        icon: "💻",
        building: "Computer Science Block",
        floor: "First Floor",
        room: "Lab 01",
        description: "Computer laboratory for programming and practical sessions."
    },
    {
        id: 3,
        name: "Computer Laboratory 2",
        category: "lab",
        icon: "💻",
        building: "Computer Science Block",
        floor: "Ground Floor",
        room: "Lab 02",
        description: "Practical computing laboratory."
    },
    {
        id: 4,
        name: "Women's Restroom",
        category: "restroom",
        icon: "🚻",
        building: "Main Block",
        floor: "Ground Floor",
        room: "Near Room 105",
        description: "Women's restroom facility."
    },
    {
        id: 5,
        name: "Men's Restroom",
        category: "restroom",
        icon: "🚻",
        building: "Main Block",
        floor: "Ground Floor",
        room: "Near Room 106",
        description: "Men's restroom facility."
    },
    {
        id: 6,
        name: "Drinking Water Station 01",
        category: "water",
        icon: "💧",
        building: "Main Block",
        floor: "Ground Floor",
        room: "Near Reception",
        description: "Drinking water facility."
    },
    {
        id: 7,
        name: "Drinking Water Station 02",
        category: "water",
        icon: "💧",
        building: "Computer Science Block",
        floor: "First Floor",
        room: "Near Laboratory",
        description: "Drinking water facility."
    },
    {
        id: 8,
        name: "Central Library",
        category: "library",
        icon: "📚",
        building: "Library Block",
        floor: "Ground + First Floor",
        room: "Library",
        description: "Campus library with books and reading resources."
    },
    {
        id: 9,
        name: "College Canteen",
        category: "canteen",
        icon: "🍴",
        building: "Canteen Block",
        floor: "Ground Floor",
        room: "Canteen",
        description: "Food and refreshment facility."
    },
    {
        id: 10,
        name: "College Auditorium",
        category: "auditorium",
        icon: "🎤",
        building: "Auditorium Block",
        floor: "Ground Floor",
        room: "Main Hall",
        description: "Venue for seminars, competitions and college events."
    },
    {
        id: 11,
        name: "College Administration Office",
        category: "office",
        icon: "🏢",
        building: "Main Block",
        floor: "Ground Floor",
        room: "Office 01",
        description: "Administrative and student service office."
    },
    {
        id: 12,
        name: "Sports Ground",
        category: "sports",
        icon: "🏃",
        building: "Sports Area",
        floor: "Ground",
        room: "Sports Ground",
        description: "Outdoor sports and student activity area."
    }
];


/* 2. SEARCH AND FILTER STATE */

let activeCategory = "all";


/* 3. DISPLAY LOCATION CARDS */

function displayLocations(locations = campusLocations) {

    const container =
        document.getElementById("locationContainer");

    const count =
        document.getElementById("locationCount");

    if (!container) {
        console.error(
            "locationContainer is missing in navigation.html"
        );
        return;
    }

    container.innerHTML = "";

    if (count) {
        count.textContent = locations.length;
    }

    if (locations.length === 0) {

        const empty = document.createElement("div");

        empty.className = "no-results";

        empty.innerHTML = `
            <div style="font-size:40px;">🔍</div>
            <h3>No Location Found</h3>
            <p>Try another search or category.</p>
        `;

        container.appendChild(empty);
        return;
    }

    locations.forEach(function (location) {

        const card = document.createElement("article");

        card.className = "location-card";

        const icon = document.createElement("div");
        icon.className = "location-icon";
        icon.textContent = location.icon;

        const category = document.createElement("span");
        category.className = "location-category";
        category.textContent =
            location.category.toUpperCase();

        const title = document.createElement("h3");
        title.textContent = location.name;

        const description = document.createElement("p");
        description.textContent = location.description;

        const info = document.createElement("div");
        info.className = "location-info";

        [
            ["📍 Building", location.building],
            ["🏢 Floor", location.floor],
            ["🚪 Room", location.room]
        ].forEach(function (entry) {

            const item = document.createElement("div");

            const label = document.createElement("strong");
            label.textContent = entry[0];

            const value = document.createElement("span");
            value.textContent = entry[1];

            item.append(label, value);
            info.appendChild(item);
        });

        const buttons = document.createElement("div");
        buttons.className = "location-buttons";

        const detailsButton =
            document.createElement("button");

        detailsButton.type = "button";
        detailsButton.textContent = "Details";

        detailsButton.addEventListener(
            "click",
            function () {
                showDetails(location.id);
            }
        );

        const directionButton =
            document.createElement("button");

        directionButton.type = "button";
        directionButton.textContent = "🧭 Directions";

        directionButton.addEventListener(
            "click",
            function () {
                showDirection(location.id);
            }
        );

        buttons.append(
            detailsButton,
            directionButton
        );

        card.append(
            icon,
            category,
            title,
            description,
            info,
            buttons
        );

        container.appendChild(card);
    });
}


/* 4. SEARCH LOCATIONS */

function searchLocations() {

    const input =
        document.getElementById("searchInput");

    const keyword = input
        ? input.value.trim().toLowerCase()
        : "";

    const results = campusLocations.filter(
        function (location) {

            const searchableText = [
                location.name,
                location.category,
                location.building,
                location.floor,
                location.room,
                location.description
            ].join(" ").toLowerCase();

            const matchesSearch =
                searchableText.includes(keyword);

            const matchesCategory =
                activeCategory === "all" ||
                location.category === activeCategory;

            return matchesSearch && matchesCategory;
        }
    );

    displayLocations(results);
}


/* 5. CATEGORY FILTERS */

function filterLocations(category, button) {

    activeCategory = category;

    document.querySelectorAll(".filter-btn")
        .forEach(function (btn) {
            btn.classList.remove("active");
        });

    if (button) {
        button.classList.add("active");
    }

    /* Clear old search when changing categories */

    const input =
        document.getElementById("searchInput");

    if (input) {
        input.value = "";
    }

    searchLocations();
}


/* 6. LOCATION DETAILS */

function showDetails(id) {

    const location = campusLocations.find(
        function (item) {
            return item.id === id;
        }
    );

    if (!location) return;

    alert(
        "📍 " + location.name +
        "\n\nBuilding: " + location.building +
        "\nFloor: " + location.floor +
        "\nRoom: " + location.room +
        "\n\n" + location.description
    );
}


/* 7. CAMPUS DIRECTIONS */

function showDirection(id) {

    const location = campusLocations.find(
        function (item) {
            return item.id === id;
        }
    );

    if (!location) return;

    alert(
        "🧭 CAMPUS DIRECTIONS\n\n" +
        "Start: Main Entrance\n\n" +
        "Destination: " + location.name +
        "\n\nBuilding: " + location.building +
        "\nFloor: " + location.floor +
        "\nRoom: " + location.room +
        "\n\nPlease refer to the campus map " +
        "for the building's position."
    );
}


/* 8. CAMPUS MAP LOCATION DETAILS */

const mapLocationDetails = {

    "Main Block":
        "Main academic block shown in the central area of the campus layout.",

    "Library":
        "Select the library location from the campus navigation guide.",

    "Auditorium":
        "Campus auditorium and event facilities.",

    "Hostel":
        "Hostel buildings are shown along the lower part of the campus layout.",

    "Parking":
        "Parking shed is shown near the entrance along NH 209.",

    "Main Entrance":
        "The campus entrance connects to NH 209."
};


function showMapLocation(name) {

    const display =
        document.getElementById("selectedMapLocation");

    if (!display) return;

    display.textContent =
        name + ": " +
        (
            mapLocationDetails[name] ||
            "Location details will be updated soon."
        );
}


/* 9. STUDENT QUERY FORM */

function setupNavigationQuery() {

    const form =
        document.getElementById("navigationQueryForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("queryName")
                .value.trim();

        const subject =
            document.getElementById("querySubject")
                .value.trim();

        const message =
            document.getElementById("queryMessage")
                .value.trim();

        if (!name || !subject || !message) {
            alert("Please complete all fields.");
            return;
        }

        let queries = [];

        try {
            const saved =
                JSON.parse(
                    localStorage.getItem("studentQueries")
                );

            queries = Array.isArray(saved)
                ? saved
                : [];

        } catch (error) {
            console.error(
                "Could not read student queries:",
                error
            );
        }

        queries.push({
            id: Date.now(),
            page: "Navigation",
            name: name,
            subject: subject,
            message: message,
            date: new Date().toLocaleString(),
            status: "Pending"
        });

        try {

            localStorage.setItem(
                "studentQueries",
                JSON.stringify(queries)
            );

            alert(
                "✅ Your query has been submitted!"
            );

            form.reset();

        } catch (error) {

            console.error(
                "Could not save student query:",
                error
            );

            alert(
                "Unable to save your query. Please try again."
            );
        }
    });
}


/* 10. INITIALIZE PAGE */

function initializeNavigation() {

    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {

        /* Search while typing */

        searchInput.addEventListener(
            "input",
            searchLocations
        );

        /* Search using Enter */

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    event.preventDefault();
                    searchLocations();
                }
            }
        );
    }

    displayLocations(campusLocations);

    setupNavigationQuery();

    console.log(
        "Smart Campus Navigation loaded successfully."
    );
}


/* Start after HTML has loaded */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeNavigation
    );

} else {

    initializeNavigation();
}