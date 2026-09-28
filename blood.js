// ==========================================
// BLOOD DONATION DATA
// ==========================================

let donors = JSON.parse(
    localStorage.getItem("bloodDonors")
) || [];


// ==========================================
// FIND DONORS
// ==========================================

function findDonors() {

    const group =
        document.getElementById(
            "searchBloodGroup"
        ).value;

    const result =
        document.getElementById(
            "donorResults"
        );

    result.innerHTML = "";

    if (!group) {

        result.innerHTML = `
            <div class="donor-result">
                Please select a blood group.
            </div>
        `;

        return;
    }

    const matchingDonors =
        donors.filter(
            donor =>
                donor.bloodGroup === group
        );


    if (matchingDonors.length === 0) {

        result.innerHTML = `
            <div class="donor-result">

                <strong>
                    No registered donor found
                </strong>

                <p>
                    No donor is currently registered
                    for ${group}.
                </p>

            </div>
        `;

        return;
    }


    matchingDonors.forEach(
        donor => {

            const card =
                document.createElement("div");

            card.className =
                "donor-result";

            card.innerHTML = `

                <strong>
                    🩸 ${donor.bloodGroup}
                </strong>

                <p>
                    Name: ${donor.name}
                </p>

                <p>
                    Department: ${donor.department}
                </p>

                <p>
                    Contact: ${donor.phone}
                </p>

            `;

            result.appendChild(card);

        }
    );

}


// ==========================================
// DONOR REGISTRATION
// ==========================================

const donorForm =
    document.getElementById(
        "donorForm"
    );


donorForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const donor = {

            id: Date.now(),

            name:
                document.getElementById(
                    "donorName"
                ).value.trim(),

            department:
                document.getElementById(
                    "donorDepartment"
                ).value.trim(),

            bloodGroup:
                document.getElementById(
                    "donorBloodGroup"
                ).value,

            phone:
                document.getElementById(
                    "donorPhone"
                ).value.trim(),

            date:
                new Date().toLocaleString(),

            status:
                "Active"

        };


        donors.push(donor);


        localStorage.setItem(
            "bloodDonors",
            JSON.stringify(donors)
        );


        alert(
            "✅ Donor registration completed!"
        );


        donorForm.reset();

    }
);


// ==========================================
// EMERGENCY BLOOD REQUEST
// ==========================================

const bloodRequestForm =
    document.getElementById(
        "bloodRequestForm"
    );


bloodRequestForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const request = {

            id: Date.now(),

            name:
                document.getElementById(
                    "requestName"
                ).value.trim(),

            bloodGroup:
                document.getElementById(
                    "requestBloodGroup"
                ).value,

            hospital:
                document.getElementById(
                    "requestHospital"
                ).value.trim(),

            phone:
                document.getElementById(
                    "requestPhone"
                ).value.trim(),

            message:
                document.getElementById(
                    "requestMessage"
                ).value.trim(),

            date:
                new Date().toLocaleString(),

            status:
                "Emergency"

        };


        let requests =
            JSON.parse(
                localStorage.getItem(
                    "bloodRequests"
                )
            ) || [];


        requests.push(request);


        localStorage.setItem(
            "bloodRequests",
            JSON.stringify(requests)
        );


        alert(
            "🚨 Emergency blood request submitted!"
        );


        bloodRequestForm.reset();

    }
);


// ==========================================
// STUDENT QUERY
// ==========================================

const bloodQueryForm =
    document.getElementById(
        "bloodQueryForm"
    );


bloodQueryForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const query = {

            id: Date.now(),

            page: "Blood Donation",

            name:
                document.getElementById(
                    "bloodQueryName"
                ).value.trim(),

            subject:
                document.getElementById(
                    "bloodQuerySubject"
                ).value.trim(),

            message:
                document.getElementById(
                    "bloodQueryMessage"
                ).value.trim(),

            date:
                new Date().toLocaleString(),

            status:
                "Pending"

        };


        let queries =
            JSON.parse(
                localStorage.getItem(
                    "studentQueries"
                )
            ) || [];


        queries.push(query);


        localStorage.setItem(
            "studentQueries",
            JSON.stringify(queries)
        );


        alert(
            "✅ Blood donation query submitted!"
        );


        bloodQueryForm.reset();

    }
);