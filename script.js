document.addEventListener('DOMContentLoaded', () => {
    
    /* -----------------------------------------------
       1. MOBILE MENU TOGGLE
    ----------------------------------------------- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Optional: Animate hamburger icon (change icon class if needed)
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Changes to X
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Changes back to bars
        }
    });

    // Close menu when a link is clicked (Mobile view)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    /* -----------------------------------------------
       2. BOOKING FORM SUBMISSION (Simulation)
    ----------------------------------------------- */
    const bookingForm = document.querySelector('form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents actual page reload

            // Get values (for demonstration)
            const inputs = bookingForm.querySelectorAll('input, select');
            let filled = true;
            
            inputs.forEach(input => {
                if(input.value.trim() === '') filled = false;
            });

            if (filled) {
                // Simulate success
                alert("Thank you! Your request has been received. We will call you shortly at " + inputs[1].value);
                bookingForm.reset(); // Clear the form
            } else {
                alert("Please fill in all details.");
            }
        });
    }

    /* -----------------------------------------------
       3. STICKY HEADER EFFECT (Optional)
    ----------------------------------------------- */
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

});