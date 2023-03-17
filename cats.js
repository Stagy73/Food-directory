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

    // Create a <li> element for each parameter of the restaurant and append it to the <ul>
    const titleLi = document.createElement('li');
    titleLi.textContent = restaurant.title;
    titleLi.classList.add('restaurant-title');
    restaurantUl.appendChild(titleLi);

    // adress li
    const addressLi = document.createElement('li');
    addressLi.textContent = restaurant.address;
    restaurantUl.appendChild(addressLi);


    // phone
    const phoneLi = document.createElement('li');
    phoneLi.textContent = restaurant.phone;
    restaurantUl.appendChild(phoneLi);


    //url map li
    const urlLi = document.createElement('li');
    const urlLink = document.createElement('a'); // create a new hyperlink element
    urlLink.href = restaurant.url; // set the href attribute to the URL of the website
    urlLink.textContent = "Google Map"; // set the link text to the website URL
    urlLi.appendChild(urlLink); // append the hyperlink element to the li element
    restaurantUl.appendChild(urlLi);


    //website adress as link li
    const websiteLi = document.createElement('li');
    const websiteLink = document.createElement('a'); // create a new hyperlink element
    websiteLink.href = restaurant.website; // set the href attribute to the URL of the website
    websiteLink.textContent = restaurant.title; // set the link text to the website URL
    websiteLi.appendChild(websiteLink); // append the hyperlink element to the li element
    restaurantUl.appendChild(websiteLi);

    // price
    const priceLi = document.createElement('li');
    priceLi.textContent = restaurant.price;
    restaurantUl.appendChild(priceLi);

    // Append the <ul> element to the container for the restaurant list
    restaurantListDiv.appendChild(restaurantUl);
  });

}
