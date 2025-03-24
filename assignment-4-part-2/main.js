const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */
const alternativeText = {
    pic1: "closeup of a blue human eye",
    pic2: "A beautiful sunset over the mountains", 
    pic3: "A snowing landscape with pine trees", 
    pic4: "A cityscape with tall buildings", 
    pic5: "A closeup of a flower in bloom"
};
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.classList.contains('dark')) {
      btn.classList.replace('dark', 'light');
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
      btn.classList.replace('light', 'dark');
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
  });

/* Loop through the array of filenames and add thumbnail images */
fileNames.forEach((file, index) => {
  const newImage = document.createElement('img');
  newImage.src = `images/${file}`;
  newImage.alt = alternativeText[`pic${index + 1}`]; 
  thumbBar.appendChild(newImage);
});

/* Add a click event listener to each thumbnail */
thumbBar.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', (e) => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  });