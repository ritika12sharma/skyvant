// Swiper
new Swiper(".cert-swiper", {
  loop: true,
  autoplay: { delay: 2500 },
  pagination: { el: ".swiper-pagination" }
});

// EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      document.getElementById("form-status").innerText = "Message sent successfully!";
    }, () => {
      document.getElementById("form-status").innerText = "Failed to send message.";
    });
});

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggleBtn.textContent = document.body.classList.contains("light")
    ? "🌙 Dark"
    : "☀ Light";
});
