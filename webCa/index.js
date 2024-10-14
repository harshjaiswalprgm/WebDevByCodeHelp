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
