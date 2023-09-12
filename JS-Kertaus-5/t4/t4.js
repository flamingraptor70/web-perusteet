'use strict';

const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(
      `Request failed, Status: ${res.status}, Status Text: ${res.statusText}`
    );
  }
  const dataJSON = await res.json();
  return dataJSON;
};
(async function () {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
