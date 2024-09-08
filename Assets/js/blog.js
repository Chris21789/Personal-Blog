const body = document.body;
const headerEL = document.createElement('header')
const h1El = document.createElement('h1');
const navEl = document.createElement('nav');
const blogEl = document.createElement('div');
const listEl = document.createElement('ul');
const liEl = document.createElement('li');
const footerEl = document.createElement('footer');

headerEL.textContent = `My First Blog`;
body.appendChild(headerEL);

navEl.textContent = `Back`;
headerEL.appendChild(navEl);

