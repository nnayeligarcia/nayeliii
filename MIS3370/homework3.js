/*
Name: Nayeli Garcia
Date created: 4/3/2025
Date last edited: 4/10/2025
Version: 
Description: Homework 3 JS 
*/

//dynamic date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text; 

//slider
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("firstname");
    const greeting = document.getElementById("greetingName");

    const name = document.cookie.split('; ').find(row => row.startsWith('firstName='));
    const firstName = name ? decodeURIComponent(name.split('=')[1]) : '';

    if (firstName) {
        input.value = firstName;
        if (greeting) greeting.textContent = firstName;
    }

    input.addEventListener("input", () => {
        document.cookie = "firstName=" + encodeURIComponent(input.value) + "; max-age=" + 60*60*24*7;
    });
});

function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

function validateEverything() {
    let valid = true;

    if (!validatefirstname()) {
        valid = false;
    }
    if (!validatemiddleinit()) {
        valid = false;
    }
    if (!validatelastname()) {
        valid = false;
    }
    if (!validatedob()) {
        valid = false;
    }
    if (!validatesocialsecurity()) {
        valid = false;
    }
    if (!validateaddr1()) {
        valid = false;
    }
    if (!validatecity()) {
        valid = false;
    }
    if (!validatezipcode()) {
        valid = false;
    }
    if (!validateemail()) {
        valid = false;
    }
    if (!validatetel()) {
        valid = false;
    }
    if (!validateuserid()) {
        valid = false;
    }
    if (!validatepassword()) {
        valid = false;
    }
    if (!validateconfirmpassword()) {
        valid = false;
    }
    if (valid) {
        document.getElementById("realSubmit").style.display = "inline-block";
        document.getElementById("form-status").innerHTML = "";
    } else {
        document.getElementById("realSubmit").style.display = "none";
        document.getElementById("form-status").innerHTML = "Please fix the errors above before submitting.";
}
}

function validatefirstname() {
    var firstname = document.getElementById("firstname").value.trim();
    var regex = /^[a-zA-Z'-]{1,30}$/;

    if (!firstname) {
        document.getElementById("firstname-error").innerHTML = "First name can't be blank";
        return false;
    } else if (!regex.test(firstname)) {
        document.getElementById("firstname-error").innerHTML = "Only letters, apostrophes, and dashes (1–30 characters) are allowed.";
        return false;
    } else {
        document.getElementById("firstname-error").innerHTML = "";
        return true;
    }
}

function validatemiddleinit() {
    var middleinit = document.getElementById("middleinit").value.trim();
    var regex = /^[A-Za-z]$/;

    if (!middleinit) {
        document.getElementById("middleinit-error").innerHTML = "Middle initial can't be blank";
        return false;
    } else if (!regex.test(middleinit)) {
        document.getElementById("middleinit-error").innerHTML = "Enter a single letter only.";
        return false;
    } else {
        document.getElementById("middleinit-error").innerHTML = "";
        return true;
    }
}

function validatelastname() {
    var lastname = document.getElementById("lastname").value.trim();
    var regex = /^[a-zA-Z'-]{1,30}$/;

    if (!lastname) {
        document.getElementById("lastname-error").innerHTML = "Last name can't be blank";
        return false;
    } else if (!regex.test(lastname)) {
        document.getElementById("lastname-error").innerHTML = "Only letters, apostrophes, and dashes (1–30 characters) are allowed.";
        return false;
    } else {
        document.getElementById("lastname-error").innerHTML = "";
        return true;
    }
}

function validatedob() {
    var dob = document.getElementById("dob").value.trim();

    if (!dob) {
        document.getElementById("dob-error").innerHTML = "Date of birth is required.";
        return false;
    } else {
        var selectedDate = new Date(dob);
        var today = new Date();

        var oldestAllowedDate = new Date();
        oldestAllowedDate.setFullYear(today.getFullYear() - 120);

        if (selectedDate > today) {
            document.getElementById("dob-error").innerHTML = "Date of birth cannot be in the future.";
            return false;
        } else if (selectedDate < oldestAllowedDate) {
            document.getElementById("dob-error").innerHTML = "Date of birth cannot be more than 120 years ago.";
            return false;
        } else {
            document.getElementById("dob-error").innerHTML = "";
            return true;
        }
    }
}

function validatesocialsecurity() {
    var socialsecurity = document.getElementById("socialsecurity").value.trim();
    var regex = /^\d{3}-\d{2}-\d{4}$/;

    if (!socialsecurity) {
        document.getElementById("socialsecurity-error").innerHTML = "Social Security Number is required.";
        return false;
    } else if (!regex.test(socialsecurity)) {
        document.getElementById("socialsecurity-error").innerHTML = "SSN must be in the format XXX-XX-XXXX.";
        return false;
    } else {
        document.getElementById("socialsecurity-error").innerHTML = "";
        return true;
    }
}

function validateaddr1() {
    var addr1 = document.getElementById("addr1").value.trim();

    if (!addr1) {
        document.getElementById("addr1-error").innerHTML = "Address Line 1 is required.";
        return false;
    } else if (addr1.length < 5) {
        document.getElementById("addr1-error").innerHTML = "Address must be at least 5 characters long.";
        return false;
    } else {
        document.getElementById("addr1-error").innerHTML = "";
        return true;
    }
}

function validateaddr2() {
    var addr2 = document.getElementById("addr2").value.trim();

    if (addr2 !== "" && addr2.length < 2) {
        document.getElementById("addr2-error").innerHTML = "Address Line 2 must be at least 2 characters long if filled out.";
        return false;
    } else {
        document.getElementById("addr2-error").innerHTML = "";
        return true;
    }
}

function validatecity() {
    var city = document.getElementById("city").value.trim();
    var regex = /^[a-zA-Z\s'-]{2,50}$/;

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank.";
        return false;
    } else if (!regex.test(city)) {
        document.getElementById("city-error").innerHTML = "Only letters, spaces, apostrophes, and dashes (2-50 characters) allowed.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

function validatestate() {
    var state = document.getElementById("state").value;
    if (!state) {
        document.getElementById("state-error").innerHTML = "Please select a state.";
        return false;
    } else {
        document.getElementById("state-error").innerHTML = "";
        return true;
    }
}

function validatezipcode() {
    var zipcode = document.getElementById("zipcode").value.trim();
    var regex = /^\d{5}(-\d{4})?$/;

    if (!zipcode) {
        document.getElementById("zipcode-error").innerHTML = "ZIP Code is required.";
        return false;
    } else if (!regex.test(zipcode)) {
        document.getElementById("zipcode-error").innerHTML = "ZIP Code must be in format 12345 or 12345-6789.";
        return false;
    } else {
        document.getElementById("zipcode-error").innerHTML = "";
        return true;
    }
}

function validateemail() {
    var email = document.getElementById("email").value.trim();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        document.getElementById("email-error").innerHTML = "Email is required.";
        return false;
    } else if (!regex.test(email)) {
        document.getElementById("email-error").innerHTML = "Enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

function validatetel() {
    var tel = document.getElementById("tel").value.trim();
    var regex = /^\d{3}-\d{3}-\d{4}$/;

    if (!tel) {
        document.getElementById("tel-error").innerHTML = "Phone number is required.";
        return false;
    } else if (!regex.test(tel)) {
        document.getElementById("tel-error").innerHTML = "Format must be 123-456-7890.";
        return false;
    } else {
        document.getElementById("tel-error").innerHTML = "";
        return true;
    }
}

function validateuserid() {
    var userid = document.getElementById("userid").value.trim();
    var regex = /^[a-zA-Z0-9]{5,12}$/;

    if (!userid) {
        document.getElementById("userid-error").innerHTML = "User ID is required.";
        return false;
    } else if (!regex.test(userid)) {
        document.getElementById("userid-error").innerHTML = "User ID must be 5-12 letters or numbers.";
        return false;
    } else {
        document.getElementById("userid-error").innerHTML = "";
        return true;
    }
}

function validatepassword() {
    var password = document.getElementById("password").value.trim();
    var userid = document.getElementById("userid").value.trim().toLowerCase();
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    if (!password) {
        document.getElementById("password-error").innerHTML = "Password is required.";
        return false;
    } else if (!regex.test(password)) {
        document.getElementById("password-error").innerHTML = "Password must be 8-20 characters and include at least one letter and one number.";
        return false;
    } else if (userid && password.toLowerCase().includes(userid)) {
        document.getElementById("password-error").innerHTML = "Password cannot contain your User ID.";
        return false;
    } else {
        document.getElementById("password-error").innerHTML = "";
        return true;
    }
}

function validateconfirmpassword() {
    var password = document.getElementById("password").value.trim();
    var confirmpassword = document.getElementById("confirmpassword").value.trim();

    if (!confirmpassword) {
        document.getElementById("confirmpassword-error").innerHTML = "Please confirm your password.";
        return false;
    } else if (password !== confirmpassword) {
        document.getElementById("confirmpassword-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("confirmpassword-error").innerHTML = "";
        return true;
    }
}