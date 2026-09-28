// ==========================================
// SMART LIBRARY
// ==========================================


// ==========================================
// DEMO BOOK DATA
// ==========================================

const libraryBooks = [

    {
        id: "book001",

        title: "Java Programming",

        author: "Herbert Schildt",

        category: "Computer Science",

        edition: "Demo Edition",

        isbn: "9780000000001",

        shelf: "CS-A12",

        location:
            "Central Library - First Floor",

        availability: "Available",

        description:
            "A reference book for learning Java programming concepts and object-oriented programming."
    },


    {
        id: "book002",

        title: "Database Management Systems",

        author: "Abraham Silberschatz",

        category: "Computer Science",

        edition: "Demo Edition",

        isbn: "9780000000002",

        shelf: "CS-B04",

        location:
            "Central Library - First Floor",

        availability: "Issued",

        description:
            "A reference book covering database systems, SQL and database concepts."
    },


    {
        id: "book003",

        title: "Engineering Mathematics",

        author: "Demo Author",

        category: "Mathematics",

        edition: "Demo Edition",

        isbn: "9780000000003",

        shelf: "MAT-A02",

        location:
            "Central Library - Ground Floor",

        availability: "Available",

        description:
            "A mathematics reference book for college students."
    },


    {
        id: "book004",

        title: "Python Programming",

        author: "Demo Author",

        category: "Computer Science",

        edition: "Demo Edition",

        isbn: "9780000000004",

        shelf: "CS-A15",

        location:
            "Central Library - First Floor",

        availability: "Available",

        description:
            "A beginner-friendly reference book for Python programming."
    },


    {
        id: "book005",

        title: "Operating System Concepts",

        author: "Abraham Silberschatz",

        category: "Computer Science",

        edition: "Demo Edition",

        isbn: "9780000000005",

        shelf: "CS-C08",

        location:
            "Central Library - First Floor",

        availability: "Available",

        description:
            "Reference material for operating systems and system concepts."
    },


    {
        id: "book006",

        title: "Software Engineering",

        author: "Ian Sommerville",

        category: "Computer Science",

        edition: "Demo Edition",

        isbn: "9780000000006",

        shelf: "SE-A05",

        location:
            "Central Library - First Floor",

        availability: "Issued",

        description:
            "Reference material for software engineering principles and development processes."
    },


    {
        id: "book007",

        title: "Web Technologies",

        author: "Demo Author",

        category: "Web Development",

        edition: "Demo Edition",

        isbn: "9780000000007",

        shelf: "WEB-B02",

        location:
            "Central Library - Ground Floor",

        availability: "Available",

        description:
            "Reference book covering HTML, CSS, JavaScript and web development."
    },


    {
        id: "book008",

        title: "Artificial Intelligence Basics",

        author: "Demo Author",

        category: "Artificial Intelligence",

        edition: "Demo Edition",

        isbn: "9780000000008",

        shelf: "AI-C03",

        location:
            "Central Library - First Floor",

        availability: "Available",

        description:
            "An introductory reference book about artificial intelligence."
    },
 {   
  id: "book-031",
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt and David Thomas",
  category: "Computer Science",
  shelf: "CS-A14",
  location: "First Floor",
  availability: "Available",
  description: "Practical techniques for software development."
},
{
  id: "book-032",
  title: "Head First Design Patterns",
  author: "Eric Freeman and Elisabeth Robson",
  category: "Computer Science",
  shelf: "CS-A15",
  location: "First Floor",
  availability: "Available",
  description: "Object-oriented software design patterns."
},
{
  id: "book-033",
  title: "Computer Organization and Design",
  author: "David A. Patterson and John L. Hennessy",
  category: "Computer Science",
  shelf: "CS-A16",
  location: "First Floor",
  availability: "Issued",
  description: "Computer architecture and hardware fundamentals."
},
{
  id: "book-034",
  title: "Hands-On Machine Learning",
  author: "Aurélien Géron",
  category: "Computer Science",
  shelf: "CS-A17",
  location: "First Floor",
  availability: "Available",
  description: "Machine learning with practical examples."
},
{
  id: "book-035",
  title: "The Web Application Hacker's Handbook",
  author: "Dafydd Stuttard and Marcus Pinto",
  category: "Computer Science",
  shelf: "CS-A18",
  location: "First Floor",
  availability: "Available",
  description: "Web application security concepts."
},
{
  id: "book-036",
  title: "Ponniyin Selvan",
  author: "Kalki Krishnamurthy",
  category: "Tamil",
  shelf: "TAM-B01",
  location: "Ground Floor",
  availability: "Available",
  description: "Historical Tamil novel set during the Chola period."
},
{
  id: "book-037",
  title: "Sivagamiyin Sabatham",
  author: "Kalki Krishnamurthy",
  category: "Tamil",
  shelf: "TAM-B02",
  location: "Ground Floor",
  availability: "Issued",
  description: "Historical Tamil novel."
},
{
  id: "book-038",
  title: "Thirukkural",
  author: "Thiruvalluvar",
  category: "Tamil",
  shelf: "TAM-B03",
  location: "Ground Floor",
  availability: "Available",
  description: "Classical Tamil work on ethics and life."
},
{
  id: "book-039",
  title: "Silappathikaram",
  author: "Ilango Adigal",
  category: "Tamil",
  shelf: "TAM-B04",
  location: "Ground Floor",
  availability: "Available",
  description: "One of the five great Tamil epics."
},
{
  id: "book-040",
  title: "Parthiban Kanavu",
  author: "Kalki Krishnamurthy",
  category: "Tamil",
  shelf: "TAM-B05",
  location: "Ground Floor",
  availability: "Available",
  description: "Historical Tamil fiction."
},
{
  id: "book-041",
  title: "The God of Small Things",
  author: "Arundhati Roy",
  category: "English",
  shelf: "ENG-C03",
  location: "Ground Floor",
  availability: "Available",
  description: "Award-winning Indian English novel."
},
{
  id: "book-042",
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  category: "English",
  shelf: "ENG-C04",
  location: "Ground Floor",
  availability: "Issued",
  description: "Classic novel exploring justice and prejudice."
},
{
  id: "book-043",
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  category: "English",
  shelf: "ENG-C05",
  location: "Ground Floor",
  availability: "Available",
  description: "Classic American novel."
},
{
  id: "book-044",
  title: "A Short History of Nearly Everything",
  author: "Bill Bryson",
  category: "Science",
  shelf: "SCI-D01",
  location: "Second Floor",
  availability: "Available",
  description: "Accessible introduction to scientific discoveries."
},
{
  id: "book-045",
  title: "The Selfish Gene",
  author: "Richard Dawkins",
  category: "Science",
  shelf: "SCI-D02",
  location: "Second Floor",
  availability: "Available",
  description: "Evolutionary biology and genetics."
},
{
  id: "book-046",
  title: "Quantitative Aptitude for Competitive Examinations",
  author: "R. S. Aggarwal",
  category: "Competitive Exams",
  shelf: "EXAM-E01",
  location: "Ground Floor",
  availability: "Available",
  description: "Quantitative aptitude and placement preparation."
},
{
  id: "book-047",
  title: "A Modern Approach to Verbal & Non-Verbal Reasoning",
  author: "R. S. Aggarwal",
  category: "Competitive Exams",
  shelf: "EXAM-E02",
  location: "Ground Floor",
  availability: "Available",
  description: "Logical reasoning and aptitude practice."
},
{
  id: "book-048",
  title: "Word Power Made Easy",
  author: "Norman Lewis",
  category: "Competitive Exams",
  shelf: "EXAM-E03",
  location: "Ground Floor",
  availability: "Issued",
  description: "English vocabulary development."
},
{
  id: "book-049",
  title: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  category: "General Knowledge",
  shelf: "GK-F02",
  location: "Ground Floor",
  availability: "Available",
  description: "An overview of human history."
},
{
  id: "book-050",
  title: "The Discovery of India",
  author: "Jawaharlal Nehru",
  category: "General Knowledge",
  shelf: "GK-F03",
  location: "Ground Floor",
  availability: "Available",
  description: "An exploration of Indian history and culture."
}

];


// ==========================================
// VARIABLES
// ==========================================

let currentCategory = "All";


// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateStatistics();

        createCategoryButtons();

        displayBooks(libraryBooks);

    }
);


// ==========================================
// STATISTICS
// ==========================================

function updateStatistics() {

    const total =
        libraryBooks.length;


    const available =
        libraryBooks.filter(
            book =>
                book.availability === "Available"
        ).length;


    const issued =
        libraryBooks.filter(
            book =>
                book.availability === "Issued"
        ).length;


    document.getElementById(
        "totalBooks"
    ).textContent = total;


    document.getElementById(
        "availableBooks"
    ).textContent = available;


    document.getElementById(
        "issuedBooks"
    ).textContent = issued;

}


// ==========================================
// CREATE CATEGORY BUTTONS
// ==========================================

function createCategoryButtons() {

    const container =
        document.getElementById(
            "categoryButtons"
        );


    const categories = [

        "All",

        ...new Set(
            libraryBooks.map(
                book => book.category
            )
        )

    ];


    container.innerHTML = "";


    categories.forEach(
        category => {

            const button =
                document.createElement("button");


            button.className =
                "category-button";


            if (category === "All") {

                button.classList.add(
                    "active"
                );

            }


            button.textContent =
                category;


            button.onclick =
                function () {

                    currentCategory =
                        category;


                    document
                        .querySelectorAll(
                            ".category-button"
                        )
                        .forEach(
                            btn =>
                                btn.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );


                    searchBooks();

                };


            container.appendChild(
                button
            );

        }
    );

}


// ==========================================
// SEARCH BOOKS
// ==========================================

function searchBooks() {

    const input =
        document.getElementById(
            "bookSearch"
        );


    const search =
        input.value
            .toLowerCase()
            .trim();


    let results =
        libraryBooks.filter(
            book => {

                const matchesSearch =

                    book.title
                        .toLowerCase()
                        .includes(search)

                    ||

                    book.author
                        .toLowerCase()
                        .includes(search)

                    ||

                    book.category
                        .toLowerCase()
                        .includes(search);


                const matchesCategory =

                    currentCategory === "All"

                    ||

                    book.category ===
                    currentCategory;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    displayBooks(results);

}


// ==========================================
// DISPLAY BOOKS
// ==========================================

function displayBooks(books) {

    const grid =
        document.getElementById(
            "booksGrid"
        );


    const noBooks =
        document.getElementById(
            "noBooks"
        );


    grid.innerHTML = "";


    if (books.length === 0) {

        noBooks.style.display =
            "block";

        return;

    }


    noBooks.style.display =
        "none";


    books.forEach(
        book => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "book-card";


            const availabilityClass =

                book.availability ===
                "Available"

                    ? "available"

                    : "issued";


            card.innerHTML = `

                <div class="book-icon">
                    📖
                </div>

                <span class="book-category">
                    ${book.category}
                </span>

                <h3>
                    ${book.title}
                </h3>

                <div class="book-author">
                    By ${book.author}
                </div>

                <div class="book-info">

                    <div>
                        Shelf:
                        <strong>
                            ${book.shelf}
                        </strong>
                    </div>

                    <div>
                        Location:
                        <strong>
                            ${book.location}
                        </strong>
                    </div>

                </div>

                <span class="availability ${availabilityClass}">
                    ${book.availability}
                </span>

                <button
                    class="details-button"
                    onclick="viewBook('${book.id}')">

                    View Book Details →

                </button>

            `;


            grid.appendChild(
                card
            );

        }
    );

}


// ==========================================
// OPEN BOOK DETAILS
// ==========================================

function viewBook(id) {

    window.location.href =
        "book-details.html?id=" +
        encodeURIComponent(id);

}


// ==========================================
// LIBRARY QUERY
// ==========================================

const libraryQueryForm =
    document.getElementById(
        "libraryQueryForm"
    );


if (libraryQueryForm) {

    libraryQueryForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "libraryStudentName"
                    )
                    .value.trim();


            const subject =
                document
                    .getElementById(
                        "libraryQuerySubject"
                    )
                    .value.trim();


            const message =
                document
                    .getElementById(
                        "libraryQueryMessage"
                    )
                    .value.trim();


            let queries =
                JSON.parse(
                    localStorage.getItem(
                        "studentQueries"
                    )
                ) || [];


            queries.push({

                id: Date.now(),

                page: "Library",

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
                "✅ Library query submitted successfully!"
            );


            libraryQueryForm.reset();

        }
    );

}