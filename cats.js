// Get the categories
fetch('scrapping/rest.json')
  .then(response => response.json())
  .then(data => {
    // Get a list of all categories
    const categories = [...new Set(data.map(restaurant => restaurant.categoryName))];

    // Create a button for each category
    const categoryButtons = categories.map(category => {
      const button = document.createElement('button');
      button.textContent = category;
      button.addEventListener('click', () => filterRestaurants(category, data));
      return button;
    });

    // Add the category buttons to the page
    const categoriesDiv = document.getElementById('categories');
    categoryButtons.forEach(button => categoriesDiv.appendChild(button));
  })
  .catch(error => console.error('Error loading JSON file:', error));

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

  // Create an HTML element for each restaurant
  restaurants.forEach(restaurant => {
    const restaurantDiv = document.createElement('div');
    restaurantDiv.textContent = restaurant.title;
    restaurantListDiv.appendChild(restaurantDiv);
  });
}
