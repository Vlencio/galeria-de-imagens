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
    });
});

// Adiciona evento para fechar o modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});

let zoomLevel = 1;

modalImg.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        zoomLevel = Math.max(1, zoomLevel - 0.1); // Limita o zoom para no mínimo 1x
    } else {
        zoomLevel = Math.min(3, zoomLevel + 0.1); // Limita o zoom para no máximo 3x
    }
    modalImg.style.transform = `scale(${zoomLevel})`;
});

