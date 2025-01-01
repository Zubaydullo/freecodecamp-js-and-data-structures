const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

function isValidPhoneNumber(phone) {
    const regex = /^1? ?\(?(\d{3})\)?[- ]?\d{3}[- ]?\d{4}$/;
    // Ensure balanced parentheses
    if (phone.includes('(') || phone.includes(')')) {
        const openingCount = (phone.match(/\(/g) || []).length;
        const closingCount = (phone.match(/\)/g) || []).length;
        if (openingCount !== closingCount) return false;
    }
    return regex.test(phone);
}

checkBtn.addEventListener('click', () => {
    const phone = userInput.value.trim();

    if (!phone) {
        alert('Please provide a phone number');
        return;
    }

    const isValid = isValidPhoneNumber(phone);
    resultsDiv.textContent = `${isValid ? 'Valid' : 'Invalid'} US number: ${phone}`;
});

clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    userInput.value = '';
});
