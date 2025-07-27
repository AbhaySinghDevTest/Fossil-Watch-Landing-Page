document.getElementById("buyBtn").addEventListener("click", function() {
  alert("Thanks for your interest! Purchase link will be available soon.");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
window.addEventListener('scroll', function() {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});
