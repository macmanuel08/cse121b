/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = templeList => {
    templeList.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = temples => {
    reset();
    const filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            const utahTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            const outsideUtahTemples = temples.filter(temple => !temple.location.includes('Utah'));
            displayTemples(outsideUtahTemples);
            break;
        case 'older':
            const date = new Date(1950, 0, 1);
            function getMonthIndex(monthName) {
                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                return months.indexOf(monthName);
            }
            const olderSortTemples = temples.filter(temple => {
                const [year, month, day] = temple.dedicated.split(', ');
                const dedicatedDate = new Date(year, getMonthIndex(month), day);
                return dedicatedDate < date;
            });
            displayTemples(olderSortTemples);
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => filterTemples(templeList));