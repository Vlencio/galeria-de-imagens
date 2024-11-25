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
