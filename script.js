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

if (logo && botao) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          botao.classList.remove("show");
        } else {
          botao.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  observer.observe(logo);
}

const modal = document.getElementById("modalProduto");
const modalImagem = document.getElementById("modalImagem");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const modalPreco = document.getElementById("modalPreco");
const fecharModalBtn = document.getElementById("fecharModalBtn");
const produtos = document.querySelectorAll(".produto");

produtos.forEach((produto) => {
  produto.addEventListener("click", () => {
    const imagem = produto.querySelector("img");
    const titulo = produto.querySelector("p");
    const preco = produto.querySelector(".preco");
    const descricao = produto.dataset.descricao;

    modalImagem.src = imagem ? imagem.src : "";
    modalImagem.alt = imagem ? imagem.alt : "";
    modalTitulo.innerHTML = titulo ? titulo.innerHTML : "";
    modalDescricao.textContent = descricao ? descricao : "";

    if (preco) {
      modalPreco.textContent = preco.textContent;
      modalPreco.style.display = "inline-block";
    } else {
      modalPreco.textContent = "";
      modalPreco.style.display = "none";
    }

    modal.style.display = "flex";
  });
});

function fecharModal() {
  modal.style.display = "none";
}

if (fecharModalBtn) {
  fecharModalBtn.addEventListener("click", fecharModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      fecharModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "flex") {
    fecharModal();
  }
});
