// ==========================================
// TECH ENABLED CAMPUS - HOME
// ==========================================


// NAVIGATION

function openNavigation() {
    window.location.href = "navigation.html";
}


// LIBRARY

function openLibrary() {
    window.location.href = "library.html";
}


// BLOOD DONATION

function openBlood() {
    window.location.href = "blood-donation.html";
}


// STUDENT UNION

function openUnion() {
    window.location.href = "union.html";
}


// ADMIN

function openAdmin() {
    window.location.href = "admin.html";
}


// QUERY

function openQuery() {

    const section =
        document.getElementById("querySection");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}


// SMART SEARCH

function smartSearch() {

    const input =
        document.getElementById("smartSearchInput");

    if (!input) return;

    const search =
        input.value.toLowerCase().trim();


    if (search === "") {

        alert("Please enter something to search.");

        return;
    }


    // CAMPUS / NAVIGATION

    if (
        search.includes("campus") ||
        search.includes("department") ||
        search.includes("lab") ||
        search.includes("laboratory") ||
        search.includes("restroom") ||
        search.includes("water") ||
        search.includes("canteen") ||
        search.includes("auditorium") ||
        search.includes("office") ||
        search.includes("sports")
    ) {

        window.location.href =
            "navigation.html";

        return;
    }


    // LIBRARY

    if (
        search.includes("library") ||
        search.includes("book") ||
        search.includes("author")
    ) {

        window.location.href =
            "library.html";

        return;
    }


    // BLOOD

    if (
        search.includes("blood") ||
        search.includes("donor")
    ) {

        window.location.href =
            "blood-donation.html";

        return;
    }


    // UNION

    if (
        search.includes("union") ||
        search.includes("representative")
    ) {

        window.location.href =
            "union.html";

        return;
    }


    alert(
        "No matching service found.\n\n" +
        "Try: Campus, Library, Book, Blood, Donor or Union."
    );
}


// STUDENT QUERY

const queryForm =
    document.getElementById("queryForm");


if (queryForm) {

    queryForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("studentName")
                    .value.trim();


            const subject =
                document
                    .getElementById("querySubject")
                    .value.trim();


            const message =
                document
                    .getElementById("queryMessage")
                    .value.trim();


            let queries =
                JSON.parse(
                    localStorage.getItem("studentQueries")
                ) || [];


            queries.push({

                id: Date.now(),

                page: "Home",

                name: name,

                subject: subject,

                message: message,

                date:
                    new Date().toLocaleString(),

                status: "Pending"

            });


            localStorage.setItem(
                "studentQueries",
                JSON.stringify(queries)
            );


            alert(
                "✅ Your query has been submitted successfully!"
            );


            queryForm.reset();

        }
    );

}