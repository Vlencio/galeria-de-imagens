// Seleciona os elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Adiciona evento para abrir o modal
document.querySelectorAll(".gallery .image img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        zoomLevel = 1; // Reseta o zoom ao abrir uma nova imagem
        modalImg.style.transform = `scale(${zoomLevel})`;
    });
});

// Adiciona evento para fechar o modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    zoomLevel = 1; // Reseta o zoom quando fecha o modal
    modalImg.style.transform = `scale(${zoomLevel})`;
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        zoomLevel = 1; // Reseta o zoom quando fecha o modal
        modalImg.style.transform = `scale(${zoomLevel})`;
    }
});

// Fecha o modal ao pressionar a tecla "Esc"
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
        zoomLevel = 1; // Reseta o zoom quando fecha o modal
        modalImg.style.transform = `scale(${zoomLevel})`;
    }
});

// Adiciona controle de zoom no modal com o scroll do mouse
let zoomLevel = 1;

modalImg.addEventListener("wheel", (e) => {
    e.preventDefault(); // Previne o scroll da página ao usar o zoom
    if (e.deltaY > 0) {
        zoomLevel = Math.max(1, zoomLevel - 0.1); // Limita o zoom para no mínimo 1x
    } else {
        zoomLevel = Math.min(3, zoomLevel + 0.1); // Limita o zoom para no máximo 3x
    }
    modalImg.style.transform = `scale(${zoomLevel})`;
});

// Ajuste para garantir que as imagens sejam empilhadas
const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.alignItems = "center";
