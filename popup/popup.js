('../scrapping/rest.js')
  .then(response => response.json())
  .then(data) {
  // Get a list of all categories
  const categories = [...new Set(data.map(restaurant => restaurant.categoryName))];

}

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
const urlLink = document.createElement('a');
urlLink.href = restaurant.url;
urlLink.textContent = "Google Map";
urlLi.appendChild(urlLink);
restaurantUl.appendChild(urlLi);


//website adress as link li
const websiteLi = document.createElement('li');
const websiteLink = document.createElement('a');
websiteLink.href = restaurant.website;
websiteLink.textContent = restaurant.title;
websiteLi.appendChild(websiteLink);
restaurantUl.appendChild(websiteLi);

// price
const priceLi = document.createElement('li');
priceLi.textContent = restaurant.price;
restaurantUl.appendChild(priceLi);