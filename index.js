const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area");
console.log(area);

const stat = document.querySelector("div.stats");
console.log(stat);

const hello = document.querySelector(".hello");
console.log("hello");

const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

console.log("==================================================");

for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}
console.log("==================================================");

const ratingDivs = document.querySelectorAll("div.rating");

for (let element of ratingDivs.values()) {
  console.log(element);
}

console.log("==================================================");

const areaDivs = document.querySelectorAll("div.area");

for (let i = 0; i < areaDivs.length; i++) {
  const element = areaDivs[i];
  console.log(element);
}

console.log("==================================================");

//for older browsers use the forEach method

// Get a list of descriptions
const list = document.querySelectorAll(".description");

// Log them to the console
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});

// ==============================================================

//limits the length of each description to 250 chars and adds elipses
//(...) to those that have been truncated

const descriptions = document.querySelectorAll(".description");

for (let desc of descriptions.values()) {
  let content = desc.innerText;
  if (content.length > 250) {
    content.slice(0, 250);
    content += '<a href="#">...</a>';
  }
  desc.innerHTML = content;
}

// ==============================================================

// restyle to green & bold if rating that is higher than 4.7
/*
const ratings = document.querySelectorAll(".rating .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}
*/
// dynamically add a statement to the pages heading
// that lists total number of parks

//get parks
const parks = document.querySelectorAll(".park");
//get number of parks
const numberParks = parks.length;
//create div element
const newElement = document.createElement("div");
//style new element
newElement.classList.add("header-statement");
//set text of new element
newElement.innerText = `${numberParks} exciting parks to visit`;

//add new element to the DOM
const header = document.querySelector("header");
header.appendChild(newElement);

/*
//REMOVE PARK WITH REMOVE CHILD
// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park");

// Remove that park
main.removeChild(park);
*/

//Practice with Event Listeners

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
  console.log(event.target);
});

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rateBtn");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

// Sort park items by name or rating
/*
// Select the `nameSorter` link
const nameSorter = document.querySelector("#nameSorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

*/
// to make code more manageable, rework the above code to include
// external helper functions for the event handler & name sort

/* Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `nameSorter` link
const nameSorter = document.querySelector("#nameSorter");

// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);

*/

//=================================================================

// function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  console.log(parkAName);
  const parkBName = parkB.querySelector("h2").innerText;
  console.log(parkBName);
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.querySelector(".rating .value").innerText
  );
  const parkBRating = parseFloat(
    parkB.querySelector(".rating .value").innerText
  );
  return parkBRating - parkARating;
};

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

//Add a DOMContentLoaded event handler

/*
console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
*/

const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#nameSorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#ratingSorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
};

// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);
