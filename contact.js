function validateForm() {
    var name = document.getElementById("name").value;
    var emailTitle = document.getElementById("e-title").value;
    var email = document.getElementById("e-mail").value;
    var phoneNumber = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    // Validate name (0-20 characters)
    if (name.length === 0 || name.length > 20) {
        alert("Name must be between 1 and 20 characters.");
        return false;
    }

    // Validate email title (0-20 characters)
    if (emailTitle.length === 0 || emailTitle.length > 20) {
        alert("Email Title must be between 1 and 20 characters.");
        return false;
    }

    // Validate email format (requires @gmail.com domain)
    var emailRegex = /^[^\s@]+@gmail\.com$/i;
    if (!emailRegex.test(email)) {
        alert("Email must be in the format example@gmail.com.");
        return false;
    }

    // Validate phone number (all numbers)
    var phoneNumberRegex = /^\d+$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
        alert("Phone Number must contain only numbers.");
        return false;
    }

    // Validate message (0-200 characters)
    if (message.length === 0 || message.length > 200) {
        alert("Message must be between 1 and 200 characters.");
        return false;
    }

    // All validations passed, submit the form
    alert("Form submitted successfully!");
    return true;
}
