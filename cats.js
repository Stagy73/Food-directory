import restaurants from "./scrapping/rest.js";

const categories = [];
restaurants.forEach((restaurant) => {
  if (!categories.includes(restaurant.categoryName)) {
    categories.push(restaurant.categoryName);
  }
});

const categoryButtons = categories.map((category) => {
  const button = document.createElement("button");
  button.textContent = category;
  button.addEventListener("click", () =>
    filterRestaurants(category, restaurants)
  );
  return button;
});

const categoriesDiv = document.getElementById("categories");
categoryButtons.forEach((button) => categoriesDiv.appendChild(button));

function filterRestaurants(category, data) {
  const filteredRestaurants = data.filter(
    (restaurant) => restaurant.categoryName === category
  );
  displayRestaurants(filteredRestaurants);
}

function displayRestaurants(restaurants) {
  const restaurantListDiv = document.getElementById("restaurantList");

  while (restaurantListDiv.firstChild) {
    restaurantListDiv.removeChild(restaurantListDiv.firstChild);
  }

  function getUrlFromSlug(slug) {
    return `src/${slug}/2.jpg`;
  }

  restaurants.forEach((restaurant) => {
    const restaurantUl = document.createElement("ul");
    restaurantUl.classList.add("restaurantUl");
    const titleLi = document.createElement("li");
    const imageLi = document.createElement("img");
    const titleLink = document.createElement("a");
    imageLi.src = getUrlFromSlug(restaurant.slug);
    titleLink.textContent = restaurant.title;
    titleLink.href = "#";
    titleLink.classList.add("restaurant-title");
    titleLi.appendChild(titleLink);
    restaurantUl.appendChild(imageLi);
    restaurantUl.appendChild(titleLi);
    restaurantListDiv.appendChild(restaurantUl);
    titleLink.addEventListener("click", toggleDetailsPopup);

    let detailsDisplayed = false;

    function toggleDetailsPopup(e) {
      console.log('toggleDetailsPopup called');
      console.log('detailsDisplayed:', detailsDisplayed);
      const siblings = e.target.parentNode;
      if (detailsDisplayed) {
        siblings.removeChild(siblings.lastChild);
        detailsDisplayed = false;
      } else {
        restDetailsPopup(siblings);
        console.log('restDetailsPopup called');
        detailsDisplayed = true;
      }
    }

    function restDetailsPopup(siblings) {
      const detailsDiv = document.createElement("div");
      console.log('restDetailsPopup called');
      detailsDiv.classList.add("restaurant-details");

      const addressLi = document.createElement("li");
      addressLi.textContent = restaurant.address;
      detailsDiv.appendChild(addressLi);

      const phoneLi = document.createElement("li");
      phoneLi.textContent = restaurant.phone;
      phoneLi.classList.add("phone");
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
      const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB4TKawJVgNVaaKOUwbg2MAcQywVSpNKRc&q=${encodeURIComponent(
        restaurant.address
      )}`;
      mapDiv.innerHTML = `<iframe width="100%" height="300" frameborder="0" style="border:0" src="${mapUrl}" allowfullscreen></iframe>`;
      mapLi.appendChild(mapDiv);
      detailsDiv.appendChild(mapLi);

      const websiteLi = document.createElement("li");
      const websiteLink = document.createElement("a");
      websiteLink.classList.add("website");
      websiteLink.href = restaurant.website;
      websiteLink.textContent = "Website";
      websiteLi.appendChild(websiteLink);
      detailsDiv.appendChild(websiteLi);

      siblings.appendChild(detailsDiv);

      const websiteModal = new Modal('Website', 'website-modal');
      websiteLink.addEventListener('click', () => {
        websiteModal.open();
        const iframe = document.createElement('iframe');
        iframe.src = restaurant.website;
        iframe.width = '100%';
        iframe.height = '500';
        websiteModal.content.appendChild(iframe);
      });

      websiteLi.appendChild(websiteLink);
      detailsDiv.appendChild(websiteLi);

      siblings.appendChild(detailsDiv);
    }

  });
}
