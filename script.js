const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const cat = document.querySelector(".floating-cat");
let mouseX = 0;
let mouseY = 0;
let catX = 0;
let catY = 0;

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function followMouse() {
  catX += (mouseX - catX) * 0.015;
  catY += (mouseY - catY) * 0.015;

  if (window.innerWidth > 760) {
    cat.style.transform = `translate(${catX * 0.018}px, ${catY * 0.018}px) rotate(-6deg)`;
  }

  requestAnimationFrame(followMouse);
}

followMouse();
