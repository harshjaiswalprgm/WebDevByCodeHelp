// Array to store selected plans
let selectedPlans = [];

function selectPlan(planName) {
    selectedPlans.push(planName); // Add the selected plan to the array

    // Display the list of selected plans in the modal
    const selectedPlansList = selectedPlans.map(plan => `<li>${plan}</li>`).join('');
    document.getElementById('selected-plans').innerHTML = `<ul>${selectedPlansList}</ul>`;

    // Show the modal
    document.getElementById('confirmation-message').style.display = 'flex';
}

function closeConfirmation() {
    // Hide the modal
    document.getElementById('confirmation-message').style.display = 'none';
}


//write a dom manipulation function create two button elements
function createButton(elementId, text) {

}
// Create the first button

const firstButton = createButton('firstButton', 'Click Me');

// Append the first button to the document body

document.body.appendChild(firstButton);

// Create the second button

const secondButton = createButton('secondButton', 'Another Button');

// Append the second button to the document body

document.body.appendChild(secondButton);

// Add event listeners to the buttons

firstButton.addEventListener('click', function() {
    alert('You clicked the first button!');
});

secondButton.addEventListener('click', function() {
    alert('You clicked the second button!');
    // Add a new button to the document body when clicked
});

