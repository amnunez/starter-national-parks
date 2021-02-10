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
