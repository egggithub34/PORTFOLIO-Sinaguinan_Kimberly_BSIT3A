
  // Smooth scrolling when clicking on navbar links
  $(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  });


   
   // Function to toggle the dropdown content
   function toggleDropdown(event) {
    const dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Add click event listeners to all elements with the "dropdown" class
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", toggleDropdown);
});
 
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

/*EDUCATION*/

    const cards = document.querySelectorAll('.animate__animated');

    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate__zoomIn');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate__zoomIn');
        });
    });
