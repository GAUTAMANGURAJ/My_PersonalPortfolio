// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: "smooth" });
  });
});

// Typing Effect
const words = ["Frontend Developer", "JavaScript Enthusiast", "React.js Learner"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = words[wordIndex];
let typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < currentWord.length) {
      typingElement.textContent += currentWord[charIndex];
      charIndex++;
      setTimeout(typeEffect, 100);
  } else {
      setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
  } else {
      wordIndex = (wordIndex + 1) % words.length;
      currentWord = words[wordIndex];
      setTimeout(typeEffect, 500);
  }
}

typeEffect();
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dark Mode Toggle


function more(name,fullDes,shortDes){  
document.getElementById(name).addEventListener("click", function() {
  var fullDescription = document.getElementById(fullDes);
  var shortDescription = document.getElementById(shortDes);
  
  if (fullDescription.style.display === "none") {
      fullDescription.style.display = "block";  /* Show full description */
      shortDescription.style.display = "none";  /* Hide short description */
      this.textContent = "Less";  /* Change button text to "Less" */
  } else {
      fullDescription.style.display = "none";  /* Hide full description */
      shortDescription.style.display = "block";  /* Show short description */
      this.textContent = "More";  /* Change button text back to "More" */
  }
});
}
