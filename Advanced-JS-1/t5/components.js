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
  let html = menuHtml += `
  <tr>
    <td>${course.name}</td>
    <td>${course.diets || ' - '}</td>
    <td>${course.price || ' - '}</td>
  </tr>
  `;
  for(const course of menu.courses) {
     const {name, diets, price} = course;
     html +=
      <tr>
        <td>${name}</td>
        <td>${diets ?? ' - '}</td>
        <td>${price ?? ' - '}</td>
      </tr>
     ;
  }
  html += 'table';
  return html
};


export {restaurantRow, restaurantModal};
