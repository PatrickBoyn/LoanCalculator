document.getElementById('loan-form').addEventListener('submit', function (e) {

    document.querySelector('.results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);
    e.preventDefault();
});

function calculateResults(){

    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // Math variables
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Calculate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);


    // validates the results
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.querySelector('.results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        showError("Please check your numbers.");
    }

}

function showError(errorMessage) {
    const errorDiv = document.createElement('div');
    
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert';

    errorDiv.appendChild(document.createTextNode(errorMessage));

    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
    document.querySelector('#loading').style.display = 'none';
}