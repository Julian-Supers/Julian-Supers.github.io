/* In the raw text file, copy all of the code underneath the heading "1. 
COMPLETE VARIABLE AND FUNCTION DEFINITIONS" and paste it into the top of the main.js file. */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
/* Declaring function that gets a random value from the array */ 
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

/* This event listener waits for a click event before it starts the result */
randomize.addEventListener('click', result);
/* Declares a function that */
function result() {
    let newStory = storyText;
    /* Create three new variables called xItem, yItem, and zItem, 
    and make them equal to the result of calling randomValueFromArray() on your three arrays */
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

    if(customName.value !== '') {
        const name = customName.value;
        /* Inside the first if block, add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable. */
        newStory = newStory.replaceAll('Bob', name);
    }
    /* checking to see if the uk radio button has been selected. If so, convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade. */
    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}