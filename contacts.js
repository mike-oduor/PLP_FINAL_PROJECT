function changeText() {
    // Changing the text of the paragraph
    document.getElementById('rateQuestion').textContent = 'PLEASE RATE YOUR EXPERIENCE WITH OUR WEBSITE';
    
    // Changing the text of each radio label
    document.getElementById('labelExcellent').textContent = 'OUTSTANDING.';
    document.getElementById('labelGood').textContent = 'VERY GOOD.';
    document.getElementById('labelFair').textContent = 'AVERAGE.';
    document.getElementById('labelPoor').textContent = 'BELOW AVERAGE.';
}

// Adding event listeners to log and send the selected rating
document.querySelectorAll('input[name="rate"]').forEach((radio) => {
    radio.addEventListener('change', function(event) {
        const selectedRating = event.target.value;
        console.log(`Selected rating: ${selectedRating}`);
        
        // Sending the selected rating to the server
        fetch('http://localhost:3000/submit-rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rating: selectedRating })
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
});


