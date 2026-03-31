function toggleMenu() {
  const menu = document.getElementById("menuKaori");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function closeMenu() {
  const menu = document.getElementById("menuKaori");
  if (menu) {
    menu.style.display = "none";
  }
}

const logo = document.getElementById("logo");
const botaoTopo = document.getElementById("topBtn");

if (logo && botaoTopo) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          botaoTopo.classList.remove("show");
        } else {
          botaoTopo.classList.add("show");
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
const botaoWhatsApp = document.getElementById("botaoWhatsApp");
const produtos = document.querySelectorAll(".produto");

produtos.forEach((produto) => {
  produto.addEventListener("click", () => {
    const imagem = produto.querySelector("img");
    const titulo = produto.querySelector(".produto-nome");
    const preco = produto.querySelector(".preco");
    const descricao = produto.dataset.descricao || "";

    const nomeProduto = titulo ? titulo.innerText.trim() : "";

    if (modalImagem) {
      modalImagem.src = imagem ? imagem.src : "";
      modalImagem.alt = imagem ? imagem.alt : "";
    }

    if (modalTitulo) {
      modalTitulo.innerHTML = titulo ? titulo.innerHTML : "";
    }

    if (modalDescricao) {
      modalDescricao.textContent = descricao;
    }

    if (modalPreco) {
      if (preco) {
        modalPreco.textContent = preco.textContent;
        modalPreco.style.display = "inline-block";
      } else {
        modalPreco.textContent = "";
        modalPreco.style.display = "none";
      }
    }

    if (botaoWhatsApp) {
      const numeroWhatsApp = "5511948161463";
      const mensagem = `Olá! Vim pelo catálogo e tenho interesse em ${nomeProduto}.`;
      const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      botaoWhatsApp.href = linkWhatsApp;
    }

    if (modal) {
      modal.style.display = "flex";
    }
  });
});

function fecharModal() {
  if (modal) {
    modal.style.display = "none";
  }
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
  if (event.key === "Escape" && modal && modal.style.display === "flex") {
    fecharModal();
  }
});
