import restaurants from "/scrapping/rest.js";

//commentaire
const categories = [];
restaurants.forEach(restaurant => {
  if (!categories.includes(restaurant.categoryName)) {
    categories.push(restaurant.categoryName);
  }

});
const categoryButtons = categories.map(category => {
  const button = document.createElement('button');
  button.textContent = category;
  button.addEventListener('click', () => filterRestaurants(category, restaurants));
  return button;
});



console.log(categories);

//commentaire
const categoriesDiv = document.getElementById('categories');
categoryButtons.forEach(button => categoriesDiv.appendChild(button));

//commentaire
function filterRestaurants(category, data) {
  const filteredRestaurants = data.filter(restaurant => restaurant.categoryName === category);
  displayRestaurants(filteredRestaurants);
}



//commentaire
function displayRestaurants(restaurants) {
  const restaurantListDiv = document.getElementById('restaurantList');

  while (restaurantListDiv.firstChild) {
    restaurantListDiv.removeChild(restaurantListDiv.firstChild);
  }

  function getUrlFromSlug(slug) {
    return `src/${slug}/2.jpg`;
  }

  restaurants.forEach(restaurant => {
    const restaurantUl = document.createElement('ul');
    restaurantUl.classList.add('restaurantUl');
    const titleLi = document.createElement('li');
    const imageLi = document.createElement('img');
    const titleLink = document.createElement('a');
    imageLi.src = getUrlFromSlug(restaurant.slug);
    titleLink.textContent = restaurant.title;
    titleLink.href = '#';
    titleLink.classList.add('restaurant-title');
    titleLi.appendChild(titleLink);
    restaurantUl.appendChild(imageLi);
    restaurantUl.appendChild(titleLi);
    restaurantListDiv.appendChild(restaurantUl);

    titleLink.addEventListener("click", toggleDetailsPopup);//eventlistener
    // function intermediare to use function restdetailsPopup
    // Add a variable to keep track of whether the restaurant details are currently displayed
    let detailsDisplayed = false;

    function toggleDetailsPopup(e) {
      const siblings = e.target.parentNode;
      if (detailsDisplayed) {
        // If the details are currently displayed, remove them and update the variable
        siblings.removeChild(siblings.lastChild);
        detailsDisplayed = false;
      } else {
        // If the details are not currently displayed, call restDetailsPopup() and update the variable
        restDetailsPopup(siblings);
        detailsDisplayed = true;
      }
    }

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
      const mapLi = document.createElement("li");
      const mapDiv = document.createElement("div");
      mapDiv.classList.add("restaurant-map");
      const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB4TKawJVgNVaaKOUwbg2MAcQywVSpNKRc&q=${encodeURIComponent(restaurant.address)}`;
      mapDiv.innerHTML = `<iframe width="100%" height="300" frameborder="0" style="border:0" src="${mapUrl}" allowfullscreen></iframe>`;
      mapLi.appendChild(mapDiv);
      detailsDiv.appendChild(mapLi);

      const websiteLi = document.createElement("li");
      const websiteLink = document.createElement("a");
      websiteLink.href = restaurant.website;
      websiteLink.textContent = restaurant.title;
      websiteLi.appendChild(websiteLink);
      detailsDiv.appendChild(websiteLi);

      const priceLi = document.createElement("li");
      priceLi.textContent = restaurant.price;
      detailsDiv.appendChild(priceLi);

      // Create a popup window to display the details / Taille adaptée pour les pop up
      //const popupWindow = window.open("", "restaurantDetailsPopup", "width=700,height=450");
      //upWindow.document.body.appendChild(detailsDiv);
      //popupWindow.classList.add("popup")
      //popupWindow.document.body.style.backgroundColor = "burlywood";

      




    }
    restaurantListDiv.appendChild(restaurantUl);
  })
}
