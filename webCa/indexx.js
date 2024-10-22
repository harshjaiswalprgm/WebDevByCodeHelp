
//create button andd use dom manipulation and after clicking the button it will change the message 

// Create a new button element
const newButton = document.createElement('button');
newButton.textContent = 'Click Me';
    
// Append the new button to the document body

document.body.appendChild(newButton);

// Add an event listener to the new button

newButton.addEventListener('click', function() {
    // Change the text content of the button to 'Clicked!'
    newButton.textContent = 'Clicked!';
});