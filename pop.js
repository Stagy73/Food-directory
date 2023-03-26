//function to show the restaurant details in a popup window
function restDetailsPopup(siblings) {

    // Create a div to hold the restaurant details
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("restaurant-details");
  
    // Add the restaurant details to the div
    const addressLi = document.createElement("li");
    addressLi.textContent = restaurant.address;
    detailsDiv.appendChild(addressLi);
  
    const phoneLi = document.createElement("li");
    phoneLi.textContent = restaurant.phone;
    detailsDiv.appendChild(phoneLi);
  
    const urlLi = document.createElement("li");
    const urlLink = document.createElement("a");
    urlLink.href = restaurant.url;
    urlLink.textContent = "Google Map";
    urlLi.appendChild(urlLink);
    detailsDiv.appendChild(urlLi);
  
    const websiteLi = document.createElement("li");
    const websiteLink = document.createElement("a");
    websiteLink.href = restaurant.website;
    websiteLink.textContent = restaurant.title;
    websiteLi.appendChild(websiteLink);
    detailsDiv.appendChild(websiteLi);
  
    const priceLi = document.createElement("li");
    priceLi.textContent = restaurant.price;
    detailsDiv.appendChild(priceLi);
  
    // Create a popup window to display the details
    const popupWindow = window.open("", "restaurantDetailsPopup", "width=400,height=300");
    popupWindow.document.body.appendChild(detailsDiv);
  }
  