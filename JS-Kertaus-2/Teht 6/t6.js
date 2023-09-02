'use strict';

const movies = [];
let more = true;
while (more) {
  const title = prompt('Give a movie name');
  const rating = prompt('Give ratin on scale (1-5)');
  const movie = {title, rating};

  movies.push(movie);

  more = confirm('Do you want to add more?');
}

const sortMovies = (a, b) => {
  const vertailu = b.rating - a.rating;
  return vertailu;
};

movies.sort(sortMovies);

console.log(movies);

for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('target').append(tr);
}

const favourite = movies[0];
document.getElementById('favMovie').innerText = favourite.title;
