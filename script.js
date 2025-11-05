document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Rooms available! Proceeding to secure booking page...");
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
});