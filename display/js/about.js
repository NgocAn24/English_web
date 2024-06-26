(function() {
    const contacts = document.querySelectorAll(".founder-item-contact");
    console.log(contacts);
    contacts.forEach((contact) => {
        contact.addEventListener("click", function() {
            // Hide all phone numbers
            contacts.forEach((c) => {
                c.querySelector("span").style.display = "none";
            });
            // Toggle the clicked phone number
            const phoneNumber = this.querySelector("span");
            if (phoneNumber.style.display === "none") {
                phoneNumber.style.display = "inline";
            } else {
                phoneNumber.style.display = "none";
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

})();