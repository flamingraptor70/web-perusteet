'use strict';

const postData = async () => {
  const data = {
    body: JSON.stringify({
      name: 'Jhon',
      job: 'Myyja',
    }),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  };

  try {
    const res = await fetch('https://reqres.in/api/users', data);
    if (!res.ok) throw new Error('Invalid data');
    const dataJSON = await res.json();
    console.log(dataJSON);
  } catch (error) {
    console.log(error.message);
  }
};

postData();
