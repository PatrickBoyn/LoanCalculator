document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
    console.log('Calculating...');

    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    
    e.preventDefault();
}