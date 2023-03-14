// Get the JSON data from the file
fetch('scrapping/rest.json')
  .then(response => response.json())
  .then(data => {
    // Get the list element
    const list = document.getElementById('restaurant-list');

    // Loop through each restaurant in the data array
    data.forEach(restaurant => {
      // Check if the restaurant has a name
      if (!restaurant.name) {
        console.error(`Restaurant without name: ${JSON.stringify(restaurant)}`);
        return;
      }

      // Create a list item for the restaurant
      const item = document.createElement('li');

      // Create a header for the restaurant name
      const header = document.createElement('h3');
      header.textContent = restaurant.name;
      item.appendChild(header);

      // Check if the restaurant has any details to display
      if (restaurant.address || restaurant.phone || restaurant.website) {
        // Create a details element for the restaurant details
        const details = document.createElement('details');
        item.appendChild(details);

        // Create a summary element for the restaurant details
        const summary = document.createElement('summary');
        summary.textContent = 'View Details';
        details.appendChild(summary);

        // Create a list for the restaurant details
        const nestedList = document.createElement('ul');
        details.appendChild(nestedList);

        // Check if the restaurant has an address to display
        if (restaurant.address) {
          // Check if the address is an array or a string
          const addressList = Array.isArray(restaurant.address) ? restaurant.address : [restaurant.address];

          // Loop through each address in the addressList
          addressList.forEach(address => {
            const addressItem = document.createElement('li');
            addressItem.innerHTML = `<strong>Address:</strong> ${address}`;
            nestedList.appendChild(addressItem);
          });
        }

        // Check if the restaurant has a phone number to display
        if (restaurant.phone) {
          const phoneItem = document.createElement('li');
          phoneItem.innerHTML = `<strong>Phone:</strong> ${restaurant.phone}`;
          nestedList.appendChild(phoneItem);
        }

        // Check if the restaurant has a website to display
        if (restaurant.website) {
          const websiteItem = document.createElement('li');
          websiteItem.innerHTML = `<strong>Website:</strong> <a href="${restaurant.website}" target="_blank">${restaurant.website}</a>`;
          nestedList.appendChild(websiteItem);
        }
      }

      // Add the item to the list
      list.appendChild(item);
    });
  })
  .catch(error => console.error(error));















  /*------------------------------map-------------------------------------------------*/ 
  function initMap() {
    // Set the map center to Valence, France
    const center = { lat: 44.9333, lng: 4.8917 };
  
    // Create the map
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center
    });

    function removeAllMarkers() {
      // Loop through all markers and remove them from the map
      markers.forEach(marker => {
        marker.setMap(null);
      });
    
      // Reset the markers array to empty
      markers = [];
    }
    
  
    // Fetch JSON data from the REST API
    fetch('scrapping/rest.json')
      .then(response => response.json())
      .then(data => {
        // Create markers for each point
        data.forEach(point => {
          const marker = new google.maps.Marker({
            position: { lat: point.latitude, lng: point.longitude },
            map: map,
            title: point.name
          });
        });
      });
  }
  