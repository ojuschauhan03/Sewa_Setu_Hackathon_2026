/* =========================================
   GOVERNMENT SERVICES DATABASE
========================================= */

const services = [

    {
        id: 1,

        name: "Income Certificate",

        department: "Revenue Department",

        icon: "💰",

        description:
            "Certificate used to verify the annual income of an individual or family.",

        keywords: [
            "income",
            "salary",
            "earning",
            "earnings",
            "income proof",
            "financial proof",
            "annual income",
            "income certificate",
            "paise",
            "कमाई",
            "आय"
        ],

        fee: "₹30",

        time: "15–30 Days",

        documents: [
            "Aadhaar Card",
            "Identity Proof",
            "Address Proof",
            "Income-related document"
        ],

        url: "#"
    },


    {
        id: 2,

        name: "Domicile Certificate",

        department: "Revenue Department",

        icon: "🏠",

        description:
            "Certificate used as proof that a person is a resident of the state.",

        keywords: [
            "domicile",
            "residence",
            "resident",
            "address",
            "local resident",
            "residential proof",
            "domicile certificate",
            "निवास",
            "मूल निवासी"
        ],

        fee: "₹30",

        time: "15–30 Days",

        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Residence Proof",
            "Passport-size photograph"
        ],

        url: "#"
    },


    {
        id: 3,

        name: "Caste Certificate",

        department: "Revenue Department",

        icon: "📄",

        description:
            "Certificate used to verify the caste category of an applicant.",

        keywords: [
            "caste",
            "sc",
            "st",
            "obc",
            "caste certificate",
            "category certificate",
            "जाति",
            "जाति प्रमाण पत्र"
        ],

        fee: "₹30",

        time: "15–30 Days",

        documents: [
            "Aadhaar Card",
            "Identity Proof",
            "Address Proof",
            "Existing caste-related document"
        ],

        url: "#"
    },


    {
        id: 4,

        name: "Trade License",

        department: "Urban Administration",

        icon: "🏪",

        description:
            "License required for carrying out certain commercial and business activities.",

        keywords: [
            "trade",
            "business",
            "shop",
            "shop license",
            "business license",
            "commercial",
            "start business",
            "open shop",
            "दुकान",
            "व्यापार"
        ],

        fee: "Varies",

        time: "7–30 Days",

        documents: [
            "Identity Proof",
            "Address Proof",
            "Business details",
            "Property/Shop document"
        ],

        url: "#"
    },


    {
        id: 5,

        name: "Marriage Certificate",

        department: "Urban Administration",

        icon: "💍",

        description:
            "Official certificate confirming registration of a marriage.",

        keywords: [
            "marriage",
            "marriage certificate",
            "wedding",
            "married",
            "विवाह",
            "शादी",
            "विवाह प्रमाण पत्र"
        ],

        fee: "Varies",

        time: "7–15 Days",

        documents: [
            "Identity Proof of both applicants",
            "Address Proof",
            "Marriage photographs",
            "Marriage-related documents"
        ],

        url: "#"
    },


    {
        id: 6,

        name: "Birth Certificate",

        department: "Health / Local Administration",

        icon: "👶",

        description:
            "Official record confirming the birth of a person.",

        keywords: [
            "birth",
            "birth certificate",
            "newborn",
            "baby",
            "child birth",
            "जन्म",
            "जन्म प्रमाण पत्र"
        ],

        fee: "Varies",

        time: "7–15 Days",

        documents: [
            "Hospital birth record",
            "Parent identity proof",
            "Address proof"
        ],

        url: "#"
    },


    {
        id: 7,

        name: "Death Certificate",

        department: "Local Administration",

        icon: "📜",

        description:
            "Official certificate recording the death of a person.",

        keywords: [
            "death",
            "death certificate",
            "death registration",
            "मृत्यु",
            "मृत्यु प्रमाण पत्र"
        ],

        fee: "Varies",

        time: "7–15 Days",

        documents: [
            "Medical/death record",
            "Identity proof",
            "Address details"
        ],

        url: "#"
    },


    {
        id: 8,

        name: "Water Connection",

        department: "Urban Administration",

        icon: "💧",

        description:
            "Application for obtaining a new household water connection.",

        keywords: [
            "water",
            "water connection",
            "tap",
            "new tap",
            "drinking water",
            "पानी",
            "नल",
            "जल कनेक्शन"
        ],

        fee: "Varies",

        time: "7–30 Days",

        documents: [
            "Identity Proof",
            "Address Proof",
            "Property document"
        ],

        url: "#"
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const results =
    document.getElementById("results");

const resultTitle =
    document.getElementById("resultTitle");

const resultCount =
    document.getElementById("resultCount");

const suggestions =
    document.getElementById("suggestions");


/* =========================================
   NORMALIZE TEXT
========================================= */

function normalize(text) {

    return text
        .toLowerCase()
        .trim();

}


/* =========================================
   SEARCH ALGORITHM
========================================= */

function searchServices(query) {

    query = normalize(query);

    if (!query) {
        return services;
    }


    const queryWords =
        query.split(/\s+/);


    const scoredServices =
        services.map(service => {

            let score = 0;


            const serviceText =
                normalize(
                    service.name +
                    " " +
                    service.description +
                    " " +
                    service.keywords.join(" ")
                );


            /* Exact service name */

            if (
                normalize(service.name)
                    .includes(query)
            ) {

                score += 20;

            }


            /* Complete query */

            if (
                serviceText.includes(query)
            ) {

                score += 10;

            }


            /* Individual words */

            queryWords.forEach(word => {

                if (word.length < 2) {
                    return;
                }


                if (
                    normalize(service.name)
                        .includes(word)
                ) {

                    score += 8;

                }


                service.keywords.forEach(keyword => {

                    if (
                        normalize(keyword)
                            .includes(word)
                    ) {

                        score += 5;

                    }

                });


                if (
                    serviceText.includes(word)
                ) {

                    score += 2;

                }

            });


            return {
                service: service,
                score: score
            };

        });


    return scoredServices

        .filter(item => item.score > 0)

        .sort(
            (a, b) =>
                b.score - a.score
        )

        .map(item => item.service);

}


/* =========================================
   DISPLAY SERVICES
========================================= */

function displayServices(serviceList) {

    results.innerHTML = "";


    if (serviceList.length === 0) {

        results.innerHTML = `

            <div class="no-results">

                <h3>No matching service found</h3>

                <p>
                    Try using words such as
                    income, certificate, residence,
                    business, marriage or water.
                </p>

            </div>

        `;

        resultCount.textContent = "0 services";

        return;

    }


    resultCount.textContent =
        `${serviceList.length} service${serviceList.length > 1 ? "s" : ""}`;


    serviceList.forEach(service => {

        const card =
            document.createElement("div");

        card.className =
            "service-card";


        card.innerHTML = `

            <div class="service-icon">
                ${service.icon}
            </div>

            <h3>
                ${service.name}
            </h3>

            <p>
                ${service.description}
            </p>

            <span class="department">
                ${service.department}
            </span>


            <div class="service-info">

                <div class="info-item">
                    Fee
                    <strong>
                        ${service.fee}
                    </strong>
                </div>


                <div class="info-item">
                    Processing
                    <strong>
                        ${service.time}
                    </strong>
                </div>

            </div>


            <div class="card-buttons">

                <button
                    class="view-button"
                    onclick="viewDetails(${service.id})">

                    View Details

                </button>


                <button
                    class="apply-button"
                    onclick="applyService(${service.id})">

                    Apply Now

                </button>

            </div>

        `;


        results.appendChild(card);

    });

}


/* =========================================
   PERFORM SEARCH
========================================= */

function performSearch() {

    const query =
        searchInput.value.trim();


    if (!query) {

        resultTitle.textContent =
            "Popular Government Services";

        displayServices(services);

        return;

    }


    const matchedServices =
        searchServices(query);


    resultTitle.textContent =
        `Services matching "${query}"`;


    displayServices(matchedServices);


    document
        .getElementById("services")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   QUICK SEARCH
========================================= */

function quickSearch(query) {

    searchInput.value = query;

    performSearch();

}


/* =========================================
   SEARCH BUTTON
========================================= */

searchButton.addEventListener(
    "click",
    performSearch
);


/* =========================================
   ENTER KEY
========================================= */

searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            performSearch();

        }

    }
);


/* =========================================
   LIVE SUGGESTIONS
========================================= */

searchInput.addEventListener(
    "input",
    function() {

        const query =
            normalize(searchInput.value);


        if (!query) {

            suggestions.style.display =
                "none";

            return;

        }


        const matched =
            searchServices(query)
                .slice(0, 5);


        if (matched.length === 0) {

            suggestions.style.display =
                "none";

            return;

        }


        suggestions.innerHTML = "";


        matched.forEach(service => {

            const item =
                document.createElement("div");

            item.className =
                "suggestion-item";


            item.innerHTML =
                `${service.icon} ${service.name}`;


            item.onclick =
                function() {

                    searchInput.value =
                        service.name;

                    suggestions.style.display =
                        "none";

                    performSearch();

                };


            suggestions.appendChild(item);

        });


        suggestions.style.display =
            "block";

    }
);


/* =========================================
   VIEW DETAILS
========================================= */

function viewDetails(id) {

    const service =
        services.find(
            service =>
                service.id === id
        );


    if (!service) return;


    const modal =
        document.getElementById(
            "serviceModal"
        );


    const modalContent =
        document.getElementById(
            "modalContent"
        );


    modalContent.innerHTML = `

        <div class="service-icon">
            ${service.icon}
        </div>


        <h2>
            ${service.name}
        </h2>


        <p>
            ${service.description}
        </p>


        <h3>
            Department
        </h3>

        <p>
            ${service.department}
        </p>


        <h3>
            Application Information
        </h3>

        <p>
            <strong>Fee:</strong>
            ${service.fee}
        </p>

        <p>
            <strong>Processing Time:</strong>
            ${service.time}
        </p>


        <h3>
            Documents Required
        </h3>


        <ul>

            ${service.documents
                .map(
                    document =>
                        `<li>${document}</li>`
                )
                .join("")
            }

        </ul>


        <br>


        <button
            class="apply-button"
            style="width:100%; padding:14px;"
            onclick="applyService(${service.id})">

            Apply for ${service.name}

        </button>

    `;


    modal.style.display =
        "flex";

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    document.getElementById(
        "serviceModal"
    ).style.display = "none";

}


/* =========================================
   APPLY SERVICE
========================================= */

function applyService(id) {

    const service =
        services.find(
            service =>
                service.id === id
        );


    if (!service) return;


    /*
       Replace '#' in service.url
       with the REAL government
       application URL.
    */

    if (
        service.url &&
        service.url !== "#"
    ) {

        window.open(
            service.url,
            "_blank"
        );

    } else {

        alert(
            `Application link for ${service.name} will be connected to the official Sewa Setu service page.`
        );

    }

}


/* =========================================
   CLOSE MODAL ON BACKGROUND CLICK
========================================= */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "serviceModal"
            );


        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/* =========================================
   INITIAL SERVICES
========================================= */

displayServices(services);