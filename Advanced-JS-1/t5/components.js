const restaurantRow = restaurant => {
  const {name, company, address} = restaurant;

  const tr = document.createElement('tr');
  const nameTd = document.createElement('td');
  nameTd.innerText = name;
  const companyTd = document.createElement('td');
  companyTd.innerText = company;
  const addressTd = document.createElement('td');
  addressTd.innerText = address;

  tr.appendChild(nameTd);
  tr.appendChild(companyTd);
  tr.appendChild(addressTd);

  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  let menuHtml = '';
  menuHtml += `<h3>${name}</h3>
      <p>${company}</p>
      <p>${address} ${postalCode} ${city}</p>
      <p>${phone}</p>`;

  menuHtml += `
  <table>
    <tr>
      <th>Course</th>
      <th>Diet</th>
      <th>Price</th>
    </tr>
  `;
  for (const course of menu.courses) {
    const {diets, price} = course;
    menuHtml += `
        <tr>
          <td>${course.name}</td>
          <td>${diets || ' - '}</td>
          <td>${price || ' - '}</td>
        </tr>
        `;
  }
  menuHtml += '</table>';
  return menuHtml;
};

export {restaurantRow, restaurantModal};
