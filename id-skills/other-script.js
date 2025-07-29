function openModal(imgElement) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}
