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
    return `src/${slug}/1.jpg`;
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
    restaurantUl.appendChild(titleLi);
    restaurantListDiv.appendChild(restaurantUl);
    titleLi.appendChild(imageLi);

    //titleLink.href = '/popup/popup.html';
    //titleLink.target = '_blank';
    //titleLink.classList.add('restaurant-title');
    //titleLi.appendChild(titleLink);
    // restaurantUl.appendChild(titleLi);
    titleLink.addEventListener("click", test);//eventlistener
    // function intermediare to use function restdetails
    // Add a variable to keep track of whether the restaurant details are currently displayed
    let detailsDisplayed = false;

    function test(e) {
      const siblings = e.target.parentNode;
      if (detailsDisplayed) {
        // If the details are currently displayed, remove them and update the variable
        siblings.removeChild(siblings.lastChild);
        detailsDisplayed = false;
      } else {
        // If the details are not currently displayed, call restDetails() and update the variable
        restDetails(siblings);
        detailsDisplayed = true;
      }
    }
    //function populate restaurant details once retaurant.title is clicked (via eventListener)
    function restDetails(siblings) {
      //restaurantUl.innerHTML = ''
      // Create a div to hold the restaurant details
      const detailsDiv = document.createElement("div");
      detailsDiv.classList.add("restaurant-details");

      //adress
      const addressLi = document.createElement("li");
      addressLi.classList.add("liDetails")
      console.log(addressLi)
      addressLi.textContent = restaurant.address;
      detailsDiv.appendChild(addressLi);

      //phone
      const phoneLi = document.createElement("li");
      phoneLi.classList.add("liDetails")
      console.log(phoneLi)
      phoneLi.textContent = restaurant.phone;
      detailsDiv.appendChild(phoneLi);

      //map
      const urlLi = document.createElement("li");
      urlLi.classList.add("liDetails")
      const urlLink = document.createElement("a");
      urlLink.href = restaurant.url;
      urlLink.textContent = "Google Map";
      urlLi.appendChild(urlLink);
      detailsDiv.appendChild(urlLi);

      // website
      const websiteLi = document.createElement("li");
      websiteLi.classList.add("liDetails")
      const websiteLink = document.createElement("a");
      websiteLink.href = restaurant.website;
      websiteLink.textContent = restaurant.title;
      websiteLi.appendChild(websiteLink);
      detailsDiv.appendChild(websiteLi);

      // price
      const priceLi = document.createElement("li");
      priceLi.classList.add("liDetails")
      priceLi.textContent = restaurant.price;
      detailsDiv.appendChild(priceLi);

      // Add the details div to the parent element
      siblings.appendChild(detailsDiv);
    }
    restaurantListDiv.appendChild(restaurantUl);
  })
}
