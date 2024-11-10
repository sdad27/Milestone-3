// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value.split(',');
    var experience = document.getElementById('experience').value.split(',');
    var skills = document.getElementById('skills').value.split(',');
    // Helper function to create list items
    var createListItems = function (items) {
        return items.map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join('');
    };
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h1>Resume</h1>\n        <div>\n            <fieldset>\n                <legend>Personal Information</legend>\n                <p><strong>Name:</strong> ".concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n            </fieldset>\n\n            <fieldset>\n                <legend>Education</legend>\n                <ul>\n                    ").concat(createListItems(education), "\n                </ul>\n            </fieldset>\n\n            <fieldset>\n                <legend>Experience</legend>\n                <ul>\n                    ").concat(createListItems(experience), "\n                </ul>\n            </fieldset>\n\n            <fieldset>\n                <legend>Skills</legend>\n                <ul>\n                    ").concat(createListItems(skills), "\n                </ul>\n            </fieldset>\n        </div>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
