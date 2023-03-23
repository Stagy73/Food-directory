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
  })
}
