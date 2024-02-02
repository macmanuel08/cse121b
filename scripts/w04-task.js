/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
  name: "John Mark Manuel",
  photo: "../images/mark.jpg",
  favoriteFoods: ["Pizza", "Green Mango", "Scrambled Egg with Onion (Omelette)", "Noodles"],
  hobbies: ["Playing Online/Mobile Games", "Listening to Music", "Watching Movies"],
  placesLived: [],
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
  place: "Dagupan, Pangasinan",
  length: "24 years"
});

myProfile.placesLived.push({
  place: "Las Pinas, Metro Manila",
  length: "2 years"
});

myProfile.placesLived.push({
  place: "Philippines Butuan Mission",
  length: "2 years"
});


/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').setAttribute('src', myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  const listElement = document.createElement("li");
  listElement.textContent = food;
  document.getElementById("favorite-foods").appendChild(listElement);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  const listElement = document.createElement("li");
  listElement.textContent = hobby;
  document.getElementById("hobbies").appendChild(listElement);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  const term = document.createElement("dt");
  term.textContent = place.place;
  const description = document.createElement("dd");
  description.textContent = place.length;
  const descriptionList = document.createElement("dl");
  descriptionList.appendChild(term);
  descriptionList.appendChild(description);
  document.getElementById("places-lived").appendChild(descriptionList);
});

