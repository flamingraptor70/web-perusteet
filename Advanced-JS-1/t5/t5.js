import {restaurantRow, restaurantModal} from './components.js';
import {apiUrl} from './variable.js';
import {fetchData} from './ut.js';

const modal = document.querySelector('dialog');
modal.addEventListener('click', () => {
  modal.close();
});

const positionOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const calculateDistance = (x1, y1, x2, y2) => {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
};

const error = err => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const success = async pos => {
  try {
    const crd = pos.coords;
    const restaurants = await fetchData(apiUrl + '/restaurants');
    console.log(restaurants);
    restaurants.sort((a, b) => {
      const x1 = crd.latitude;
      const y1 = crd.longitude;
      const x2a = a.location.coordinates[1];
      const y2a = a.location.coordinates[0];
      const distanceA = calculateDistance(x1, y1, x2a, y2a);
      const x2b = b.location.coordinates[1];
      const y2b = b.location.coordinates[0];
      const distanceB = calculateDistance(x1, y1, x2b, y2b);
      return distanceA - distanceB;
    });

    for (const restaurant of restaurants) {
      const tr = restaurantRow(restaurant);
      document.querySelector('table').appendChild(tr);
      tr.addEventListener('click', async () => {
        try {
          // remove all highlights
          const allHighs = document.querySelectorAll('.highlight');
          for (const high of allHighs) {
            high.classList.remove('highlight');
          }

          // add highlight
          tr.classList.add('highlight');

          // fetch menu
          const menu = await fetchData(
            apiUrl + `/restaurants/daily/${restaurant._id}/fi`
          );
          modal.insertAdjacentHTML(
            'beforeend',
            restaurantModal(restaurant, menu)
          );
          modal.showModal();
        } catch (error) {
          alert(error.message);
        }
      });
    }
  } catch (error) {
    alert(error.message);
  }
};

navigator.geolocation.getCurrentPosition(success, error, positionOptions);
