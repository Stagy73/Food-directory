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
    titleLink.href = '/popup/popup.html';
    titleLink.target = '_blank';
    titleLink.classList.add('restaurant-title');
    titleLi.appendChild(titleLink);
    restaurantUl.appendChild(titleLi);



    restaurantListDiv.appendChild(restaurantUl);
  });

}
