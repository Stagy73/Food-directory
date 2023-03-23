import restaurants from "/scrapping/rest.js";


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


const categoriesDiv = document.getElementById('categories');
categoryButtons.forEach(button => categoriesDiv.appendChild(button));


function filterRestaurants(category, data) {
  const filteredRestaurants = data.filter(restaurant => restaurant.categoryName === category);
  displayRestaurants(filteredRestaurants);
}


function displayRestaurants(restaurants) {
  const restaurantListDiv = document.getElementById('restaurantList');


  while (restaurantListDiv.firstChild) {
    restaurantListDiv.removeChild(restaurantListDiv.firstChild);
  }






  restaurants.forEach(restaurant => {

    const restaurantUl = document.createElement('ul');
    restaurantUl.classList.add('restaurantUl');


    const titleLi = document.createElement('li');
    const titleLink = document.createElement('a');
    titleLink.textContent = restaurant.title;

    //titleLink.href = '/popup/popup.html';
    //titleLink.target = '_blank';
    titleLink.classList.add('restaurant-title');
    titleLi.appendChild(titleLink);
    restaurantUl.appendChild(titleLi);
    titleLink.addEventListener("click", test);//eventlistener
    // function intermediare to use function restdetails
    function test(e) {
      const siblings = e.target.parentNode
      console.log(siblings)
      // siblings.forEach(s => s.remove())
      restDetails()
    }
    //function populate restaurant details once retaurant.title is clicked (via eventListener)
    function restDetails() {
      //restaurantUl.innerHTML = ''
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
    }

















    restaurantListDiv.appendChild(restaurantUl);
  });

}
