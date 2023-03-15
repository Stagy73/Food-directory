// Fetch data from the REST API
fetch('scrapping/rest.json')
.then(response => response.json())
  .then(restaurants => {
    // Select the list element on the HTML page
    const list = document.querySelector('#restaurant-list');

    // Loop through each restaurant and create a list item element for each one
    restaurants.forEach(restaurant => {
      // Create a new list item element
      const listItem = document.createElement('li');
      // Create a new div element to contain the restaurant information
      const restaurantInfo = document.createElement('div');

      // Create an h2 element to display the restaurant name
      const name = document.createElement('h2');

      // Set the text content of the h2 element to be the restaurant name
      name.textContent = restaurant.title;

      // Append the h2 element to the list item
      listItem.appendChild(name);

     // Create a new unordered list element to display the restaurant details
      const details = document.createElement('ul');

      // Create list items for each detail
      /* ELEMENT POP UP
      
      const price = document.createElement('li');
      price.textContent = `Price: ${restaurant.price}`;
      details.appendChild(price);

      const category = document.createElement('li');
      category.textContent = `Category: ${restaurant.categoryName}`;
      details.appendChild(category);

      const address = document.createElement('li');
      address.textContent = `Address: ${restaurant.address}`;
      details.appendChild(address);

      const website = document.createElement('li');
      website.textContent = `Website: ${restaurant.website}`;
      details.appendChild(website);

      const phone = document.createElement('li');
      phone.textContent = `Phone: ${restaurant.phone}`;
      details.appendChild(phone);
      Fin ELEMENT POP PUP
      */

      // Append the details list to the list item
      listItem.appendChild(details);

      // Append the list item to the list
      list.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));
