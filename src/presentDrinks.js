import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrinks.js';
const showDrinks = async (url) => {
  //   console.log(url);
  // fetch drinks
  const data = await fetchDrinks(url);
  //   console.log(data);
  // display drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
