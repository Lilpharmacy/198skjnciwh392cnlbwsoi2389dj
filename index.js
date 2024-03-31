    function toggleText(id) {
        var text = document.getElementById(id);
        if (text.style.display === "none") {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }

    function toggleMenu() {
        var hamburger = document.querySelector('.hamburger');
        var headItems = document.querySelector('.headitems');

        hamburger.classList.toggle('active');
        headItems.classList.toggle('active'); 
    }

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var name = document.getElementById("nameTextarea").value;
        var phoneNumber = document.getElementById("phoneNumberTextarea").value;
        var message = document.getElementById("messageTextarea").value;

        if (name.trim() === "" || phoneNumber.trim() === "" || message.trim() === "") {
            alert("Enter the complete details");
            return;
        }
    
        console.log("Name:", name);
        console.log("Phone Number:", phoneNumber);
        console.log("Message:", message);
    });


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.read').forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = button.getAttribute('data-href');
        });
    });
});