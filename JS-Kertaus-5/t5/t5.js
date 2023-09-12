'use strict';
let restaurants = [];
const table = document.querySelector('table');
const body = document.querySelector('body');
const dialog = document.querySelector('dialog');

const url = 'https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/';

// get restaurant data from api
const getData = async () => {
  try {
    const res = await fetch(`${url}restaurants`);
    if (!res.ok) {
      throw new Error(`Request failed, Status: ${res.status}`);
    }
    const dataJSON = await res.json();
    restaurants = dataJSON;
    console.log(restaurants);
    for (const restaurant of restaurants) {
      // create tr object and add content
      const tr = document.createElement('tr');
      const nameTh = document.createElement('th');
      const addressTh = document.createElement('th');
      nameTh.textContent = restaurant.name;
      addressTh.textContent = restaurant.address;

      tr.appendChild(nameTh);
      tr.appendChild(addressTh);
      table.appendChild(tr);

      tr.addEventListener('click', () => {
        document.querySelectorAll('th').forEach(element => {
          element.classList.remove('highlight');
        });

        nameTh.classList.add('highlight');
        addressTh.classList.add('highlight');

        CreateModal(restaurant);
        dialog.showModal();
      });
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
};

/*restaurants.sort((a, b) => {
  // Use the `localeCompare` method to compare strings alphabetically
  console.log(restaurants);
  return a.name.localeCompare(b.name);
});*/

function CreateModal(restaurant) {
  // remove all old elements from dialog
  Array.from(dialog.children).forEach(child => {
    dialog.removeChild(child);
  });

  const form = document.createElement('form');
  form.method = 'dialog';

  // restaurant data elemets
  const name = document.createElement('h2');
  name.textContent = restaurant.name;
  name.classList.add('dialog-content');

  const address = document.createElement('p');
  address.textContent = restaurant.address;
  address.classList.add('dialog-content');

  const postalCode = document.createElement('p');
  postalCode.textContent = restaurant.postalCode;
  postalCode.classList.add('dialog-content');

  const city = document.createElement('p');
  city.textContent = restaurant.city;
  city.classList.add('dialog-content');

  const phone = document.createElement('p');
  phone.textContent = 'phone: ' + restaurant.phone;
  phone.classList.add('dialog-content');

  const company = document.createElement('p');
  company.textContent = restaurant.company;
  company.classList.add('dialog-content');

  // todays menu items
  CreateTodaysMenu(restaurant);

  const okButton = document.createElement('button');
  okButton.textContent = 'ok';
  okButton.classList.add('dialog-content');

  form.appendChild(name);
  form.appendChild(address);
  form.appendChild(postalCode);
  form.appendChild(city);
  form.appendChild(phone);
  form.appendChild(company);
  form.appendChild(okButton);

  dialog.append(form);
}

getData();

async function CreateTodaysMenu(restaurant) {
  const res = await fetch(`${url}restaurants/daily/${restaurant._id}/fi`);
  if (!res.ok) {
    throw new Error(`Request failed, Status: ${res.status}`);
  }
  const dataJSON = await res.json();
  const todaysMenu = dataJSON;

  const daysMenuContainer = document.createElement('ul');
  console.log(todaysMenu.courses);

  for (const food of todaysMenu.courses) {
    const foodList = document.createElement('li');
    const foodName = document.createElement('h2');
    foodName.textContent = `${food.name ? food.name : 'No name'}`;

    const foodDiets = document.createElement('p');
    foodDiets.textContent = `Diets: ${food.diets ? food.diets : ''}`;

    const foodPrice = document.createElement('p');
    foodPrice.textContent = `Price: ${food.price ? food.price : '?'}`;

    foodList.appendChild(foodName);
    foodList.appendChild(foodDiets);
    foodList.appendChild(foodPrice);

    daysMenuContainer.appendChild(foodList);
  }

  dialog.append(daysMenuContainer);
}
