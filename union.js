// ==========================================
// STUDENT UNION DATA
// ==========================================

const unionMembers = [

    {
        id: "union001",

        name: "Harini Mahalakshmi",

        role: "Union Chairman",

        className: "Student Union",

        icon: "👩‍🎓",

        responsibility:
            "Represents students and coordinates with college authorities."
    },


    {
        id: "union002",

        name: "Swathi",

        role: "Secretary",

        className: "Student Union",

        icon: "📋",

        responsibility:
            "Maintains student requests, meetings and union communications."
    },


    {
        id: "union003",

        name: "Saranya",

        role: " Fine arts club Join secretary",

        className: "Student Union",

        icon: "🎭",

        responsibility:
            "Coordinates cultural programmes and student activities."
    },


    {
        id: "union004",

        name: "Sports Secretary",

        role: "Sports Secretary",

        className: "Student Union",

        icon: "🏆",

        responsibility:
            "Coordinates sports activities and student participation."
    },


    {
        id: "union005",

        name: "Devi Bala",

        role: "NCC Secretary",

        className: "Student Union",

        icon: "👮‍♂️",

        responsibility:
            "Supports  student, Maintain Displine and Train Juniors."
    },


    {
        id: "union006",

        name: "Divya Dharshini",

        role: "Health Hygiene Secretary",

        className: "Student Union",

        icon: "💊",

        responsibility:
            "maintain a hygenic surrounding and aware of student health."
    }

];


// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayMembers(
            unionMembers
        );

    }
);


// ==========================================
// DISPLAY MEMBERS
// ==========================================

function displayMembers(members) {

    const grid =
        document.getElementById(
            "membersGrid"
        );


    grid.innerHTML = "";


    if (members.length === 0) {

        grid.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:40px;
                    color:#8190aa;
                "
            >

                No union member found.

            </div>

        `;

        return;

    }


    members.forEach(
        member => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "member-card";


            card.innerHTML = `

                <div class="member-icon">

                    ${member.icon}

                </div>


                <span class="member-role">

                    ${member.role}

                </span>


                <h3>

                    ${member.name}

                </h3>


                <div class="member-class">

                    ${member.className}

                </div>


                <p class="responsibility">

                    ${member.responsibility}

                </p>


                <button
                    class="member-button"
                    onclick="contactUnion('${member.role}')">

                    Contact / Submit Request

                </button>

            `;


            grid.appendChild(card);

        }
    );

}


// ==========================================
// SEARCH MEMBERS
// ==========================================

function searchMembers() {

    const search =
        document.getElementById(
            "memberSearch"
        )
        .value
        .toLowerCase()
        .trim();


    const results =
        unionMembers.filter(
            member =>

                member.name
                    .toLowerCase()
                    .includes(search)

                ||

                member.role
                    .toLowerCase()
                    .includes(search)

                ||

                member.responsibility
                    .toLowerCase()
                    .includes(search)

        );


    displayMembers(results);

}


// ==========================================
// CONTACT UNION
// ==========================================

function contactUnion(role) {

    document
        .getElementById(
            "requestType"
        )
        .value =
        "Student Issue";


    document
        .getElementById(
            "requestMessage"
        )
        .value =
        "Request regarding " +
        role +
        ": ";


    document
        .getElementById(
            "studentName"
        )
        .focus();


    document
        .getElementById(
            "unionRequestForm"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// UNION REQUEST
// ==========================================

const unionRequestForm =
    document.getElementById(
        "unionRequestForm"
    );


unionRequestForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const request = {

            id: Date.now(),

            page: "Student Union",

            name:
                document
                    .getElementById(
                        "studentName"
                    )
                    .value
                    .trim(),

            className:
                document
                    .getElementById(
                        "studentClass"
                    )
                    .value
                    .trim(),

            type:
                document
                    .getElementById(
                        "requestType"
                    )
                    .value,

            message:
                document
                    .getElementById(
                        "requestMessage"
                    )
                    .value
                    .trim(),

            date:
                new Date()
                    .toLocaleString(),

            status:
                "Pending"

        };


        // Get existing requests

        let requests =
            JSON.parse(
                localStorage.getItem(
                    "unionRequests"
                )
            ) || [];


        // Add new request

        requests.push(request);


        // Save

        localStorage.setItem(
            "unionRequests",
            JSON.stringify(
                requests
            )
        );


        alert(
            "✅ Your union request has been submitted successfully!"
        );


        unionRequestForm.reset();

    }
);