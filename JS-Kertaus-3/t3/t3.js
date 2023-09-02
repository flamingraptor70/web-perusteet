'use strict';
const datas = [];

const target = document.querySelector('#target');

const browser = navigator.appName;
datas.push({browser});
const version = navigator.appVersion;
datas.push({version});

const platform = navigator.platform;
datas.push({platform});
const windowWidth = window.innerWidth;
datas.push({windowWidth});
const windowHeight = window.innerHeight;
datas.push({windowHeight});

const aviableScreenWidth = window.screen.availWidth;
datas.push({aviableScreenWidth});
const aviableScreenHeight = window.screen.availHeight;
datas.push({aviableScreenHeight});

const currentDateTime = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const finnishDateFormat = currentDateTime.toLocaleDateString('fi-FI', options);
datas.push({finnishDateFormat});

for (let i = 0; i < datas.length; i++) {
  const objectKey = Object.keys(datas[i]);
  const objectValue = Object.values(datas[i]);

  const p = document.createElement('p');
  p.innerHTML = `${objectKey}:  ${objectValue}`;

  target.appendChild(p);
}

console.log(datas);
