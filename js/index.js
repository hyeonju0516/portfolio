function openModal(modalId) {
    let modal = document.querySelector('.' + modalId);

    document.querySelector(".modal_cover").style.display = "block";
    modal.style.display = "block";

}

function closeModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal_cover").style.display = "none";

}