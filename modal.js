function restDetails(restaurant) {
    // Get modal elements
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalAddress = document.getElementById("modal-address");
    const modalPhone = document.getElementById("modal-phone");
    const modalWebsite = document.getElementById("modal-website");
    const modalPrice = document.getElementById("modal-price");
    const modalClose = document.getElementsByClassName("close")[0];

    // Set modal content
    modalTitle.textContent = restaurant.title;
    modalAddress.textContent = restaurant.address;
    modalPhone.textContent = restaurant.phone;
    modalWebsite.textContent = restaurant.website;
    modalWebsite.href = restaurant.website;
    titleLink.addEventListener("click", () => restDetails(restaurant));

    modalPrice.textContent = restaurant.price;

    // Show modal
    modal.style.display = "block";

    // Hide modal when close button is clicked
    modalClose.onclick = function () {
        modal.style.display = "none";
    }
}
