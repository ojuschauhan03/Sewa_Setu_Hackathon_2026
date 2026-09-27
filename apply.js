javascript
/* =========================================
   CURRENT STEP
========================================= */

let currentStep = 1;


/* =========================================
   LOGIN
========================================= */

function loginUser() {

    const mobile =
        document.getElementById("mobile").value.trim();

    const password =
        document.getElementById("password").value.trim();


    if (mobile.length !== 10) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    if (password.length < 4) {

        alert(
            "Please enter your password."
        );

        return;

    }


    /*
        DEMO LOGIN

        In a real application this would
        be connected to a backend/API.
    */

    document.getElementById(
        "loginSection"
    ).style.display = "none";


    document.getElementById(
        "formSection"
    ).style.display = "block";

}


/* =========================================
   CREATE ACCOUNT
========================================= */

function createAccount() {

    alert(
        "Create Account page will open here."
    );

}


/* =========================================
   PASSWORD VISIBILITY
========================================= */

function togglePassword() {

    const password =
        document.getElementById("password");


    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


/* =========================================
   NEXT STEP
========================================= */

function nextStep(step) {

    if (!validateStep(step)) {
        return;
    }


    document.getElementById(
        `step${step}`
    ).classList.remove("active-step");


    const next =
        step + 1;


    if (next <= 4) {

        document.getElementById(
            `step${next}`
        ).classList.add("active-step");


        currentStep = next;


        updateProgress();


        if (next === 4) {

            generatePreview();

        }

    }

}


/* =========================================
   PREVIOUS STEP
========================================= */

function previousStep(step) {

    document.getElementById(
        `step${step}`
    ).classList.remove("active-step");


    const previous =
        step - 1;


    document.getElementById(
        `step${previous}`
    ).classList.add("active-step");


    currentStep =
        previous;


    updateProgress();

}


/* =========================================
   UPDATE PROGRESS
========================================= */

function updateProgress() {

    const steps =
        document.querySelectorAll(
            ".progress-step"
        );


    steps.forEach(
        (step, index) => {

            if (
                index <
                currentStep
            ) {

                step.classList.add(
                    "active"
                );

            } else {

                step.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================
   VALIDATE FORM
========================================= */

function validateStep(step) {


    /* STEP 1 */

    if (step === 1) {

        const fullName =
            document.getElementById(
                "fullName"
            ).value.trim();


        const dob =
            document.getElementById(
                "dob"
            ).value;


        const gender =
            document.getElementById(
                "gender"
            ).value;


        const relativeName =
            document.getElementById(
                "relativeName"
            ).value.trim();


        const category =
            document.getElementById(
                "category"
            ).value;


        const income =
            document.getElementById(
                "income"
            ).value;


        const mobile =
            document.getElementById(
                "appMobile"
            ).value.trim();


        if (!fullName) {

            alert(
                "Please enter your full name."
            );

            return false;

        }


        if (!dob) {

            alert(
                "Please select your date of birth."
            );

            return false;

        }


        if (!gender) {

            alert(
                "Please select your gender."
            );

            return false;

        }


        if (!relativeName) {

            alert(
                "Please enter Father's / Husband's name."
            );

            return false;

        }


        if (!category) {

            alert(
                "Please select your category."
            );

            return false;

        }


        if (!income) {

            alert(
                "Please enter your annual income."
            );

            return false;

        }


        if (mobile.length !== 10) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return false;

        }

    }


    /* STEP 2 */

    if (step === 2) {

        const address =
            document.getElementById(
                "address"
            ).value.trim();


        const district =
            document.getElementById(
                "district"
            ).value.trim();


        const tehsil =
            document.getElementById(
                "tehsil"
            ).value.trim();


        const city =
            document.getElementById(
                "city"
            ).value.trim();


        const state =
            document.getElementById(
                "state"
            ).value;


        const pincode =
            document.getElementById(
                "pincode"
            ).value.trim();


        if (!address) {

            alert(
                "Please enter your address."
            );

            return false;

        }


        if (!district) {

            alert(
                "Please enter your district."
            );

            return false;

        }


        if (!tehsil) {

            alert(
                "Please enter your tehsil."
            );

            return false;

        }


        if (!city) {

            alert(
                "Please enter your village/city."
            );

            return false;

        }


        if (!state) {

            alert(
                "Please select your state."
            );

            return false;

        }


        if (pincode.length !== 6) {

            alert(
                "Please enter a valid 6-digit PIN code."
            );

            return false;

        }

    }


    /* STEP 3 */

    if (step === 3) {

        const aadhaar =
            document.getElementById(
                "aadhaar"
            ).files.length;


        const addressProof =
            document.getElementById(
                "addressProof"
            ).files.length;


        const incomeProof =
            document.getElementById(
                "incomeProof"
            ).files.length;


        if (!aadhaar) {

            alert(
                "Please upload Aadhaar Card."
            );

            return false;

        }


        if (!addressProof) {

            alert(
                "Please upload Address Proof."
            );

            return false;

        }


        if (!incomeProof) {

            alert(
                "Please upload Income Proof."
            );

            return false;

        }

    }


    return true;

}


/* =========================================
   GENERATE PREVIEW
========================================= */

function generatePreview() {

    const fullName =
        document.getElementById(
            "fullName"
        ).value;


    const dob =
        document.getElementById(
            "dob"
        ).value;


    const gender =
        document.getElementById(
            "gender"
        ).value;


    const category =
        document.getElementById(
            "category"
        ).value;


    const income =
        document.getElementById(
            "income"
        ).value;


    const mobile =
        document.getElementById(
            "appMobile"
        ).value;


    const email =
        document.getElementById(
            "email"
        ).value || "Not provided";


    const address =
        document.getElementById(
            "address"
        ).value;


    const district =
        document.getElementById(
            "district"
        ).value;


    const tehsil =
        document.getElementById(
            "tehsil"
        ).value;


    const city =
        document.getElementById(
            "city"
        ).value;


    const state =
        document.getElementById(
            "state"
        ).value;


    const pincode =
        document.getElementById(
            "pincode"
        ).value;


    document.getElementById(
        "previewData"
    ).innerHTML = `

        <div class="preview-row">

            <span>Full Name</span>

            <span>${fullName}</span>

        </div>


        <div class="preview-row">

            <span>Date of Birth</span>

            <span>${dob}</span>

        </div>


        <div class="preview-row">

            <span>Gender</span>

            <span>${gender}</span>

        </div>


        <div class="preview-row">

            <span>Category</span>

            <span>${category}</span>

        </div>


        <div class="preview-row">

            <span>Annual Income</span>

            <span>₹${income}</span>

        </div>


        <div class="preview-row">

            <span>Mobile</span>

            <span>${mobile}</span>

        </div>


        <div class="preview-row">

            <span>Email</span>

            <span>${email}</span>

        </div>


        <div class="preview-row">

            <span>Address</span>

            <span>
                ${address},
                ${city},
                ${tehsil},
                ${district},
                ${state}
                - ${pincode}
            </span>

        </div>

    `;

}


/* =========================================
   SUBMIT APPLICATION
========================================= */

function submitApplication() {

    const declaration =
        document.getElementById(
            "declaration"
        ).checked;


    if (!declaration) {

        alert(
            "Please accept the declaration before submitting."
        );

        return;

    }


    /*
        DEMO APPLICATION NUMBER
    */

    const randomNumber =
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    const applicationNumber =
        "SS2026" +
        randomNumber;


    document.getElementById(
        "applicationNumber"
    ).textContent =
        applicationNumber;


    document.getElementById(
        "formSection"
    ).style.display =
        "none";


    document.getElementById(
        "successSection"
    ).style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

