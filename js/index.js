function openModal(modalId) {
    let modal = document.querySelector('.' + modalId);

    console.log(modalId);

    document.querySelector(".modal_cover").style.display = "block";
    modal.style.display = "block";

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function closeModal() {
    document.querySelectorAll(".modal").forEach((modal) => {
        modal.style.display = "none";
    });

    document.querySelector(".modal_cover").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "visible";
}
