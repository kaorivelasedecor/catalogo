function toggleMenu() {
  const menu = document.getElementById("menuKaori");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function closeMenu() {
  document.getElementById("menuKaori").style.display = "none";
}

const logo = document.getElementById("logo");
const botao = document.getElementById("topBtn");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Logo está visível
        botao.classList.remove("show");
      } else {
        // Logo saiu da tela
        botao.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1
  }
);

observer.observe(logo);
