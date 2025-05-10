import restaurants from './restaurants';

const hour = new Date().getHours();

const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
let result : string;

const priceBracket = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > Number(priceBracket)) {
    return false;
  }

  if (Number(restaurant.deliveryTimeMinutes) > Number(deliveryTimeMax)) {
    return false;
  }

  if (Number(restaurant.distance) > Number(maxDistance)) {
    return false;
  }
  
  if (Number(hour) < Number(restaurant.openHour) || Number(hour) > Number(restaurant.closeHour)) {
  return false;
    return false;
  }
  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
