import './style/index.css';
import renderMeals from './modules/renderMeals.js';
import logo from './images/logo.png';

renderMeals();
const headerLogo = document.querySelector('.logo');
const logoImage = document.createElement('img');
logoImage.src = logo;
logoImage.className = 'logo-img';
headerLogo.appendChild(logoImage);
