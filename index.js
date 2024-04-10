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

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}