// Get a reference to the button element
let button = document.getElementById("login");
const form = document.getElementById("user");

// Add a click event listener to the button
button.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("email:", email);
    console.log("password:", password);

    if (email =="pauli.selenius@p.com" && password == "asd") {
        window.location.href = "/mainpage.html";
        
    } else  {
        console.log("väärin")
    } 
    
});

