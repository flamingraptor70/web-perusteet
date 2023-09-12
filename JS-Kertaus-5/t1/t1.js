'use strict';

const getData = async () => {
  try {
    const res = await fetch('https://reqres.in/api/users/1');
    const dataJSON = await res.json();
    console.log(dataJSON);
  } catch (error) {
    console.log(error.message);
  }
};

getData();
