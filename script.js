// ================= SCROLL =================
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// ================= OPEN PDF =================
function openPDF(file) {
  window.open(file, "_blank");
}

// ================= TYPING EFFECT =================
const text = ["Web Developer", "Graphic Designer", "Content Creator"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typing = document.querySelector(".typing");

  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    typing.innerHTML = currentText;

    if (j === text[i].length) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }

  setTimeout(type, 100);
}

type();


// ================= EMAILJS =================

// Initialize EmailJS
(function () {
  emailjs.init("ioqwhm-Y2DDHyo8mQ"); // 🔑 replace this
})();

// Form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_z9gntgs", "template_4k8uwvh", this)
    .then(() => {
      alert("🚀 Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("❌ Failed to send message");
    });
});