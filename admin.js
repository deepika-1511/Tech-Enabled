// ==========================================
// ADMIN LOGIN
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Admin JS loaded successfully");

    const loginForm =
        document.getElementById("loginForm");

    const loginSection =
        document.getElementById("loginSection");

    const dashboard =
        document.getElementById("dashboard");


    // Make sure the login form exists
    if (!loginForm) {

        console.error(
            "ERROR: loginForm was not found."
        );

        return;
    }


    // ======================================
    // LOGIN
    // ======================================

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            console.log("Login button clicked");


            const username =
                document
                    .getElementById("adminUsername")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("adminPassword")
                    .value;


            console.log(
                "Username entered:",
                username
            );


            // DEMO LOGIN
            if (
                username === "admin" &&
                password === "admin123"
            ) {

                console.log(
                    "Login successful"
                );


                // Save login status

                localStorage.setItem(
                    "adminLoggedIn",
                    "true"
                );


                // Hide login

                loginSection.classList.add(
                    "hidden"
                );


                // Show dashboard

                dashboard.classList.remove(
                    "hidden"
                );


                // Load data

                loadDashboard();


            } else {

                console.log(
                    "Invalid login"
                );


                const message =
                    document.getElementById(
                        "loginMessage"
                    );


                message.textContent =
                    "❌ Invalid username or password";


                message.style.color =
                    "#ff5577";

            }

        }
    );


    // ======================================
    // CHECK EXISTING LOGIN
    // ======================================

    const loggedIn =
        localStorage.getItem(
            "adminLoggedIn"
        );


    if (loggedIn === "true") {

        loginSection.classList.add(
            "hidden"
        );

        dashboard.classList.remove(
            "hidden"
        );

        loadDashboard();

    }

});


// ==========================================
// LOGOUT
// ==========================================

function logoutAdmin() {

    localStorage.removeItem(
        "adminLoggedIn"
    );

   window.location.href="admin.html";
}


// ==========================================
// LOAD DASHBOARD
// ==========================================

function loadDashboard() {

    loadBloodDonors();

    loadBloodRequests();

    loadUnionRequests();

    loadStudentQueries();

    loadCanteenOrders ();

    loadLostFound();

    updateStatistics();

}


// ==========================================
// GET DATA
// ==========================================

function getData(key) {

    try {

        const data =
            localStorage.getItem(key);

        if (!data) {
            return [];
        }

        return JSON.parse(data);

    } catch (error) {

        console.error(
            "Storage error:",
            error
        );

        return [];
    }

}


// ==========================================
// STATISTICS
// ==========================================

function updateStatistics() {

    const donors =
        getData("bloodDonors");

    const bloodRequests =
        getData("bloodRequests");

    const unionRequests =
        getData("unionRequests");

    const queries =
        getData("studentQueries");
        const canteenOrders = getData("canteenOrders");
        const lostFoundItems = getData("lostFoundItems");
const lostFoundClaims = getData("lostFoundClaims");

document.getElementById("lostFoundCount")
    .textContent = lostFoundItems.length;

document.getElementById("lostFoundClaimCount")
    .textContent = lostFoundClaims.length;

document.getElementById("canteenOrderCount")
    .textContent = canteenOrders.length;


    document.getElementById(
        "donorCount"
    ).textContent =
        donors.length;


    document.getElementById(
        "bloodRequestCount"
    ).textContent =
        bloodRequests.length;


    document.getElementById(
        "unionRequestCount"
    ).textContent =
        unionRequests.length;


    document.getElementById(
        "queryCount"
    ).textContent =
        queries.length;

}


// ==========================================
// BLOOD DONORS
// ==========================================

function loadBloodDonors() {

    const data =
        getData("bloodDonors");


    const container =
        document.getElementById(
            "donorsContainer"
        );


    container.innerHTML = "";


    if (data.length === 0) {

        container.innerHTML =
            `<div class="empty">
                No blood donors registered yet.
            </div>`;

        return;
    }


    data.forEach(function (donor) {

        const card =
            document.createElement("div");


        card.className =
            "data-card";


        card.innerHTML = `

            <div class="data-content">

                <span class="badge">
                    🩸 ${safe(donor.bloodGroup)}
                </span>

                <h3>
                    ${safe(donor.name)}
                </h3>

                <p>
                    Department:
                    ${safe(donor.department)}
                    <br>

                    Contact:
                    ${safe(donor.phone)}
                    <br>

                    Registered:
                    ${safe(donor.date)}
                </p>

            </div>

            <button
                class="delete-btn"
                onclick="deleteItem(
                    'bloodDonors',
                    ${donor.id}
                )">

                Delete

            </button>
        `;


        container.appendChild(card);

    });

}


// ==========================================
// BLOOD REQUESTS
// ==========================================

function loadBloodRequests() {

    const data =
        getData("bloodRequests");


    const container =
        document.getElementById(
            "bloodRequestsContainer"
        );


    container.innerHTML = "";


    if (data.length === 0) {

        container.innerHTML =
            `<div class="empty">
                No emergency blood requests.
            </div>`;

        return;
    }


    data.forEach(function (request) {

        const card =
            document.createElement("div");


        card.className =
            "data-card";


        card.innerHTML = `

            <div class="data-content">

                <span class="badge">
                    🚨
                    ${safe(request.bloodGroup)}
                </span>

                <h3>
                    ${safe(request.name)}
                </h3>

                <p>
                    Hospital:
                    ${safe(request.hospital)}
                    <br>

                    Contact:
                    ${safe(request.phone)}
                    <br>

                    Details:
                    ${safe(request.message)}
                    <br>

                    Submitted:
                    ${safe(request.date)}
                </p>

            </div>

            <button
                class="delete-btn"
                onclick="deleteItem(
                    'bloodRequests',
                    ${request.id}
                )">

                Delete

            </button>
        `;


        container.appendChild(card);

    });

}


// ==========================================
// UNION REQUESTS
// ==========================================

function loadUnionRequests() {

    const data =
        getData("unionRequests");


    const container =
        document.getElementById(
            "unionRequestsContainer"
        );


    container.innerHTML = "";


    if (data.length === 0) {

        container.innerHTML =
            `<div class="empty">
                No student union requests.
            </div>`;

        return;
    }


    data.forEach(function (request) {

        const card =
            document.createElement("div");


        card.className =
            "data-card";


        card.innerHTML = `

            <div class="data-content">

                <span class="badge">
                    🎓 ${safe(request.type)}
                </span>

                <h3>
                    ${safe(request.name)}
                </h3>

                <p>
                    Class:
                    ${safe(request.className)}
                    <br>

                    Request:
                    ${safe(request.message)}
                    <br>

                    Submitted:
                    ${safe(request.date)}
                </p>

            </div>

            <button
                class="delete-btn"
                onclick="deleteItem(
                    'unionRequests',
                    ${request.id}
                )">

                Delete

            </button>
        `;


        container.appendChild(card);

    });

}


// ==========================================
// STUDENT QUERIES
// ==========================================

function loadStudentQueries() {

    const data =
        getData("studentQueries");


    const container =
        document.getElementById(
            "queriesContainer"
        );


    container.innerHTML = "";


    if (data.length === 0) {

        container.innerHTML =
            `<div class="empty">
                No student queries submitted.
            </div>`;

        return;
    }


    data.forEach(function (query) {

        const card =
            document.createElement("div");


        card.className =
            "data-card";


        card.innerHTML = `

            <div class="data-content">

                <span class="badge">
                    💬 ${safe(
                        query.page || "Campus"
                    )}
                </span>

                <h3>
                    ${safe(
                        query.subject ||
                        "Student Query"
                    )}
                </h3>

                <p>
                    Student:
                    ${safe(query.name)}
                    <br>

                    Message:
                    ${safe(query.message)}
                    <br>

                    Status:
                    ${safe(
                        query.status ||
                        "Pending"
                    )}
                    <br>

                    Submitted:
                    ${safe(query.date)}
                </p>

            </div>

            <button
                class="delete-btn"
                onclick="deleteItem(
                    'studentQueries',
                    ${query.id}
                )">

                Delete

            </button>
        `;


        container.appendChild(card);

    });

}


// ==========================================
// DELETE
// ==========================================

function deleteItem(
    key,
    id
) {

    if (
        !confirm(
            "Delete this record?"
        )
    ) {
        return;
    }


    let data =
        getData(key);


    data =
        data.filter(function (item) {

            return item.id !== id;

        });


    localStorage.setItem(
        key,
        JSON.stringify(data)
    );


    loadDashboard();

}


// ==========================================
// SAFE TEXT
// ==========================================

function safe(value) {

    if (
        value === undefined ||
        value === null
    ) {

        return "";

    }


    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}
/* CANTEEN ORDER MANAGEMENT */

function loadCanteenOrders() {
    const orders = getData("canteenOrders");
    const container = document.getElementById(
        "canteenOrdersContainer"
    );

    if (!container) return;

    container.innerHTML = "";

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty">
                No canteen orders received yet.
            </div>
        `;
        return;
    }

    orders.forEach(order => {
        const card = document.createElement("div");
        card.className = "data-card canteen-order-card";

        const items = (order.items || [])
            .map(item =>
                `${safe(item.name)} × ${Number(item.quantity)}`
            )
            .join("<br>");

        card.innerHTML = `
            <div class="data-content">
                <span class="badge">
                    🍽️ ${safe(order.status || "Pending")}
                </span>

                <h3>${safe(order.id)}</h3>

                <p>
                    <strong>Student:</strong>
                    ${safe(order.name)}<br>

                    <strong>Department:</strong>
                    ${safe(order.className)}<br>

                    <strong>Pickup:</strong>
                    ${safe(order.pickupTime)}<br>

                    <strong>Ordered:</strong>
                    ${safe(order.date)}
                </p>

                <div class="ordered-food">
                    <strong>Food Items</strong>
                    <p>${items}</p>
                </div>

                <h3 class="order-price">
                    ₹${Number(order.total) || 0}
                </h3>
            </div>

            <div class="canteen-actions">
                <label for="status-${safe(order.id)}">
                    Order Status
                </label>

                <select class="order-status">
                    <option value="Pending">Pending</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Ready for Pickup">
                        Ready for Pickup
                    </option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>

                <button class="delete-btn"
                        type="button">
                    Delete Order
                </button>
            </div>
        `;

        const statusSelect = card.querySelector(
            ".order-status"
        );

        statusSelect.value = order.status || "Pending";

        statusSelect.addEventListener("change", () => {
            updateCanteenStatus(
                order.id,
                statusSelect.value
            );
        });

        card.querySelector(".delete-btn")
            .addEventListener("click", () => {
                deleteCanteenOrder(order.id);
            });

        container.appendChild(card);
    });
}

function updateCanteenStatus(orderId, newStatus) {
    const orders = getData("canteenOrders");

    const order = orders.find(
        item => item.id === orderId
    );

    if (!order) return;

    order.status = newStatus;

    localStorage.setItem(
        "canteenOrders",
        JSON.stringify(orders)
    );

    loadCanteenOrders();
}

function deleteCanteenOrder(orderId) {
    if (!confirm("Delete this canteen order?")) {
        return;
    }

    const orders = getData("canteenOrders")
        .filter(order => order.id !== orderId);

    localStorage.setItem(
        "canteenOrders",
        JSON.stringify(orders)
    );

    loadCanteenOrders();
    updateStatistics();
}
/* =========================================
   LOST & FOUND ADMIN MANAGEMENT
========================================= */

function loadLostFound() {
    loadLostFoundItems();
    loadLostFoundClaims();
    updateLostFoundStatistics();
}

function updateLostFoundStatistics() {
    const items = getData("lostFoundItems");
    const claims = getData("lostFoundClaims");

    document.getElementById("lostFoundCount")
        .textContent = items.length;

    document.getElementById("lostFoundClaimCount")
        .textContent = claims.length;
}

/* REPORTED ITEMS */

function loadLostFoundItems() {
    const items = getData("lostFoundItems");
    const container = document.getElementById(
        "lostFoundContainer"
    );

    if (!container) return;

    container.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty">
                No lost or found items reported yet.
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "data-card lf-admin-card";

        const content = document.createElement("div");
        content.className = "data-content";

        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent =
            `${item.type || "Report"} · ${item.status || "Open"}`;

        const title = document.createElement("h3");
        title.textContent = item.name || "Unnamed Item";

        const details = document.createElement("p");
        details.textContent =
            `Category: ${item.category || "-"}\n` +
            `Location: ${item.location || "-"}\n` +
            `Date: ${item.date || "-"}\n` +
            `Reported by: ${item.reporter || "-"}\n` +
            `Department: ${item.className || "-"}\n` +
            `Contact: ${item.contact || "-"}\n` +
            `Description: ${item.description || "-"}`;

        details.style.whiteSpace = "pre-line";

        content.append(badge, title, details);

        const actions = document.createElement("div");
        actions.className = "lf-actions";

        const label = document.createElement("label");
        label.textContent = "Item Status";

        const select = document.createElement("select");
        select.className = "lf-status";

        ["Open", "Under Review", "Returned"].forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            select.appendChild(option);
        });

        select.value = item.status || "Open";

        select.addEventListener("change", () => {
            updateLostFoundStatus(item.id, select.value);
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete Report";

        deleteButton.addEventListener("click", () => {
            deleteLostFoundItem(item.id);
        });

        actions.append(label, select, deleteButton);
        card.append(content, actions);
        container.appendChild(card);
    });
}

function updateLostFoundStatus(itemId, status) {
    const items = getData("lostFoundItems");

    const item = items.find(
        record => record.id === itemId
    );

    if (!item) return;

    item.status = status;

    localStorage.setItem(
        "lostFoundItems",
        JSON.stringify(items)
    );

    loadLostFound();
}

function deleteLostFoundItem(itemId) {
    if (!confirm("Delete this item report?")) return;

    const claims = getData("lostFoundClaims");

    if (claims.some(claim => claim.itemId === itemId)) {
        alert(
            "This item has ownership claims. " +
            "Review or delete those claims first."
        );
        return;
    }

    const items = getData("lostFoundItems")
        .filter(item => item.id !== itemId);

    localStorage.setItem(
        "lostFoundItems",
        JSON.stringify(items)
    );

    loadLostFound();
}

/* OWNERSHIP CLAIMS */

function loadLostFoundClaims() {
    const claims = getData("lostFoundClaims");
    const items = getData("lostFoundItems");

    const container = document.getElementById(
        "lostFoundClaimsContainer"
    );

    if (!container) return;

    container.innerHTML = "";

    if (claims.length === 0) {
        container.innerHTML = `
            <div class="empty">
                No ownership claims submitted yet.
            </div>
        `;
        return;
    }

    claims.forEach(claim => {
        const item = items.find(
            record => record.id === claim.itemId
        );

        const card = document.createElement("div");
        card.className = "data-card lf-admin-card";

        const content = document.createElement("div");
        content.className = "data-content";

        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = claim.status || "Pending";

        const title = document.createElement("h3");
        title.textContent =
            item ? item.name : "Item unavailable";

        const details = document.createElement("p");
        details.textContent =
            `Claimant: ${claim.name || "-"}\n` +
            `Department: ${claim.className || "-"}\n` +
            `Contact: ${claim.contact || "-"}\n` +
            `Ownership Proof: ${claim.proof || "-"}\n` +
            `Submitted: ${claim.date || "-"}`;

        details.style.whiteSpace = "pre-line";

        content.append(badge, title, details);

        const actions = document.createElement("div");
        actions.className = "lf-actions";

        const label = document.createElement("label");
        label.textContent = "Claim Status";

        const select = document.createElement("select");
        select.className = "lf-status";

        [
            "Pending",
            "Under Review",
            "Approved",
            "Rejected"
        ].forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            select.appendChild(option);
        });

        select.value = claim.status || "Pending";

        select.addEventListener("change", () => {
            updateLostFoundClaim(claim.id, select.value);
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete Claim";

        deleteButton.addEventListener("click", () => {
            deleteLostFoundClaim(claim.id);
        });

        actions.append(label, select, deleteButton);
        card.append(content, actions);
        container.appendChild(card);
    });
}

function updateLostFoundClaim(claimId, status) {
    const claims = getData("lostFoundClaims");

    const claim = claims.find(
        record => record.id === claimId
    );

    if (!claim) return;

    claim.status = status;

    localStorage.setItem(
        "lostFoundClaims",
        JSON.stringify(claims)
    );

    loadLostFound();
}

function deleteLostFoundClaim(claimId) {
    if (!confirm("Delete this ownership claim?")) return;

    const claims = getData("lostFoundClaims")
        .filter(claim => claim.id !== claimId);

    localStorage.setItem(
        "lostFoundClaims",
        JSON.stringify(claims)
    );

    loadLostFound();
}
/* SMART CANTEEN AND LOST & FOUND */

/* Change these keys if your page uses different names. */
const CANTEEN_KEY = "canteenOrders";
const LOST_FOUND_KEY = "lostFoundItems";

function loadCanteenOrders() {
    const container =
        document.getElementById("canteenOrdersContainer");

    if (!container) return;

    const orders = getData(CANTEEN_KEY);
    container.innerHTML = "";

    if (orders.length === 0) {
        container.textContent = "No canteen orders yet.";
        return;
    }

    orders.forEach(function (order) {
        const card = document.createElement("div");
        card.className = "data-card";

        const details = document.createElement("div");
        details.className = "data-content";

        const heading = document.createElement("h3");
        heading.textContent =
            order.name || order.studentName || "Student";

        const info = document.createElement("p");
        info.textContent =
            "Items: " +
            (order.items
                ? JSON.stringify(order.items)
                : order.food || order.item || "-") +
            " | Total: ₹" +
            (order.total || order.totalAmount || 0) +
            " | Status: " +
            (order.status || "Pending");

        const button = document.createElement("button");
        button.className = "delete-btn";
        button.textContent = "Delete";

        button.onclick = function () {
            deleteAdminRecord(CANTEEN_KEY, order.id);
        };

        details.append(heading, info);
        card.append(details, button);
        container.appendChild(card);
    });
}


function loadLostFoundItems() {
    const container =
        document.getElementById("lostFoundContainer");

    if (!container) return;

    const reports = getData(LOST_FOUND_KEY);
    container.innerHTML = "";

    if (reports.length === 0) {
        container.textContent =
            "No lost and found reports yet.";
        return;
    }

    reports.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "data-card";

        const details = document.createElement("div");
        details.className = "data-content";

        const heading = document.createElement("h3");
        heading.textContent =
            item.itemName || item.title || "Reported Item";

        const info = document.createElement("p");
        info.textContent =
            "Type: " + (item.type || "-") +
            " | Reported by: " +
            (item.reporter || item.name || "-") +
            " | Location: " +
            (item.location || "-") +
            " | Status: " +
            (item.status || "Open");

        const button = document.createElement("button");
        button.className = "delete-btn";
        button.textContent = "Delete";

        button.onclick = function () {
            deleteAdminRecord(LOST_FOUND_KEY, item.id);
        };

        details.append(heading, info);
        card.append(details, button);
        container.appendChild(card);
    });
}


function deleteAdminRecord(key, id) {
    if (!confirm("Delete this record?")) return;

    const records = getData(key).filter(function (record) {
        return String(record.id) !== String(id);
    });

    localStorage.setItem(key, JSON.stringify(records));

    loadCanteenOrders();
    loadLostFoundItems();
}


function refreshNewAdminSections() {
    loadCanteenOrders();
    loadLostFoundItems();
}

document.addEventListener("DOMContentLoaded", function () {
    refreshNewAdminSections();
});