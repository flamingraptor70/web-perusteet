const restaurantRow = restaurant => {
  const{name, address, company} = restaurant;
  const tr = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.innerText = name;
  const companyCell = document.createElement('td');
  companyCell.innerText = company;
  const addressCell = document.createElement('td');
  addressCell.innerText = addressCell;
  tr.appendChild(nameCell);
  tr.appendChild(addressCell)
  tr.appendChild(companyCell);
  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, city, postalCode, phone} = restuarant;

  for(const course of menu.courses) {
     const {name, diets, price} = course;
  }
}
export {restaurantRow};
