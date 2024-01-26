/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
const fullName = "John Mark Manuel";
/* Step 2 - Variables */
const currentYear = new Date().getFullYear();
const profilePicture = "images/mark.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
let favoriteFood = ["Pizza", "Green Mango", "Scrambled Egg with Onion (Omelette)"];

foodElement.innerHTML += `<br>${favoriteFood}`;

const noodles = "Noodles";
favoriteFood.push(noodles);

foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;





