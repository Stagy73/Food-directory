import restaurants from "/scrapping/rest.js";

const categories = restaurants.map(restaurant => restaurant.categoryName);

// Create a button for each category
const categoryButtons = categories.map(category => {
  const button = document.createElement('button');
  button.textContent = category;
  button.addEventListener('click', () => filterRestaurants(category, data));
  return button;
});

console.log(categories);

// Add the category buttons to the page
const categoriesDiv = document.getElementById('categories');
categoryButtons.forEach(button => categoriesDiv.appendChild(button));



// Filter restaurants based on the selected category
function filterRestaurants(category, data) {
  const filteredRestaurants = data.filter(restaurant => restaurant.categoryName === category);
  displayRestaurants(filteredRestaurants);
}

// Display a list of restaurants
function displayRestaurants(restaurants) {
  const restaurantListDiv = document.getElementById('restaurantList');

  // Clear the previous list of restaurants
  while (restaurantListDiv.firstChild) {
    restaurantListDiv.removeChild(restaurantListDiv.firstChild);
  }

  /*  // Create an HTML element for each restaurant
   restaurants.forEach(restaurant => {
     const restaurantDiv = document.createElement('div');
     restaurantDiv.textContent = restaurant.title;
     restaurantListDiv.appendChild(restaurantDiv);
   }); */



  // Create an HTML element for each restaurant
  restaurants.forEach(restaurant => {
    // Create a <ul> element for the restaurant
    const restaurantUl = document.createElement('ul');
    restaurantUl.classList.add('restaurantUl');


    const titleLi = document.createElement('li');
    const titleLink = document.createElement('a');
    titleLink.textContent = restaurant.title;
    titleLink.href = '/popup/popup.html';
    titleLink.target = '_blank';
    titleLink.classList.add('restaurant-title');
    titleLi.appendChild(titleLink);
    restaurantUl.appendChild(titleLi);


    // Append the <ul> element to the container for the restaurant list
    restaurantListDiv.appendChild(restaurantUl);
  });

}
