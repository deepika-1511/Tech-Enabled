const ITEMS_KEY = "lostFoundItems";
const CLAIMS_KEY = "lostFoundClaims";

const icons = {
    Electronics: "📱",
    Books: "📚",
    "ID Cards": "🪪",
    Bags: "🎒",
    Keys: "🔑",
    Accessories: "⌚",
    "Water Bottles": "🧴",
    Other: "📦"
};

function readData(key) {
    try {
        const value = JSON.parse(
            localStorage.getItem(key) || "[]"
        );
        return Array.isArray(value) ? value : [];
    } catch {
        return [];
    }
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function makeId(prefix) {
    return prefix + "-" + Date.now() + "-" +
        Math.random().toString(36).slice(2, 6);
}

const reportForm = document.getElementById("reportForm");
const dateInput = document.getElementById("itemDate");
dateInput.max = new Date().toLocaleDateString("en-CA");
dateInput.value = dateInput.max;

reportForm.addEventListener("submit", event => {
    event.preventDefault();

    const report = {
        id: makeId("LF"),
        type: document.getElementById("reportType").value,
        category: document.getElementById("itemCategory").value,
        name: document.getElementById("itemName").value.trim(),
        location: document.getElementById("itemLocation").value.trim(),
        date: dateInput.value,
        reporter: document.getElementById("reporterName").value.trim(),
        className: document.getElementById("reporterClass").value.trim(),
        contact: document.getElementById("contact").value.trim(),
        description: document.getElementById("description").value.trim(),
        status: "Open",
        createdAt: new Date().toISOString()
    };

    try {
        const reports = readData(ITEMS_KEY);
        reports.unshift(report);
        saveData(ITEMS_KEY, reports);
    } catch {
        document.getElementById("formMessage").textContent =
            "Unable to save the report on this device.";
        return;
    }

    reportForm.reset();
    dateInput.value = dateInput.max;

    document.getElementById("formMessage").textContent =
        "✓ Report submitted! Reference: " + report.id;

    renderReports();
    document.getElementById("browse").scrollIntoView({
        behavior: "smooth"
    });
});

function renderReports() {
    const reports = readData(ITEMS_KEY);
    const search = document.getElementById("searchItems")
        .value.trim().toLowerCase();

    const type = document.getElementById("filterType").value;
    const category = document.getElementById("filterCategory").value;
    const grid = document.getElementById("itemsGrid");

    document.getElementById("lostCount").textContent =
        reports.filter(r =>
            r.type === "Lost" && r.status !== "Returned"
        ).length;

    document.getElementById("foundCount").textContent =
        reports.filter(r =>
            r.type === "Found" && r.status !== "Returned"
        ).length;

    document.getElementById("returnedCount").textContent =
        reports.filter(r => r.status === "Returned").length;

    const filtered = reports.filter(report => {
        const matchesSearch =
            [report.name, report.location, report.description]
                .some(value =>
                    String(value || "").toLowerCase().includes(search)
                );

        const matchesType =
            type === "All" ||
            (type === "Returned"
                ? report.status === "Returned"
                : report.type === type &&
                  report.status !== "Returned");

        const matchesCategory =
            category === "All" ||
            report.category === category;

        return matchesSearch && matchesType && matchesCategory;
    });

    grid.innerHTML = "";

    if (filtered.length === 0) {
        grid.textContent = "No matching reports found.";
        return;
    }

    filtered.forEach(report => {
        const card = document.createElement("article");
        card.className = "item-card";

        const icon = document.createElement("div");
        icon.className = "item-icon";
        icon.textContent = icons[report.category] || "📦";

        const badge = document.createElement("span");
        badge.className = "badge " +
            (report.status === "Returned"
                ? "returned"
                : report.type === "Found" ? "found" : "");

        badge.textContent =
            report.status === "Returned"
                ? "Returned"
                : report.type;

        const title = document.createElement("h3");
        title.textContent = report.name;

        const details = document.createElement("p");
        details.textContent =
            `${report.category} • ${report.location}`;

        const date = document.createElement("p");
        date.textContent = `Date: ${report.date}`;

        const description = document.createElement("p");
        description.textContent = report.description;

        card.append(icon, badge, title, details, date, description);

        if (report.type === "Found" &&
            report.status !== "Returned") {
            const button = document.createElement("button");
            button.className = "primary-btn";
            button.textContent = "Claim This Item →";
            button.addEventListener("click", () =>
                openClaim(report.id, report.name)
            );
            card.appendChild(button);
        }

        grid.appendChild(card);
    });
}

let selectedItemId = null;

function openClaim(id, name) {
    selectedItemId = id;
    document.getElementById("claimItemTitle").textContent = name;
    document.getElementById("claimModal")
        .classList.remove("hidden");
}

document.getElementById("closeClaim")
    .addEventListener("click", closeClaim);

function closeClaim() {
    selectedItemId = null;
    document.getElementById("claimModal")
        .classList.add("hidden");
}

document.getElementById("claimForm")
    .addEventListener("submit", event => {
        event.preventDefault();

        const claim = {
            id: makeId("CLAIM"),
            itemId: selectedItemId,
            name: document.getElementById("claimName").value.trim(),
            className: document.getElementById("claimClass").value.trim(),
            contact: document.getElementById("claimContact").value.trim(),
            proof: document.getElementById("claimProof").value.trim(),
            status: "Pending",
            date: new Date().toISOString()
        };

        const reports = readData(ITEMS_KEY);
        const item = reports.find(r =>
            r.id === selectedItemId &&
            r.type === "Found" &&
            r.status !== "Returned"
        );

        if (!item) {
            alert("This item is no longer available for claiming.");
            closeClaim();
            return;
        }

        try {
            const claims = readData(CLAIMS_KEY);
            claims.unshift(claim);
            saveData(CLAIMS_KEY, claims);
        } catch {
            alert("Unable to save your claim.");
            return;
        }

        alert(
            "Claim submitted. Reference: " + claim.id +
            "\nThe college office must verify ownership."
        );

        event.target.reset();
        closeClaim();
    });

document.getElementById("searchItems")
    .addEventListener("input", renderReports);

document.getElementById("filterType")
    .addEventListener("change", renderReports);

document.getElementById("filterCategory")
    .addEventListener("change", renderReports);

window.addEventListener("storage", event => {
    if (event.key === ITEMS_KEY) renderReports();
});

renderReports();