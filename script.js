document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message || !emailPattern.test(email)) {
        alert("Please fill out all fields with a valid email.");
        return;
      }

      const formData = { name, email, message };
      localStorage.setItem("contactFormData", JSON.stringify(formData));

      document.getElementById("successMessage").classList.remove("hidden");
      this.reset();
    });

    document.getElementById("menuBtn").addEventListener("click", function () {
      const mobileMenu = document.getElementById("mobileMenu");
      mobileMenu.classList.toggle("hidden");
    });

    lucide.createIcons();