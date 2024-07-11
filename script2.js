document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    const nameError = document.getElementById('nameError');
    if (name.length > 25) {
        nameError.textContent = 'Name cannot exceed 25 characters.';
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
        nameError.textContent = 'Name can only contain alphabets.';
    } else {
        nameError.textContent = '';
    }
});

document.getElementById('age').addEventListener('input', function() {
    const age = this.value;
    const ageError = document.getElementById('ageError');
    if (age <= 0 || age > 100) {
        ageError.textContent = 'Please enter a valid age (1-100).';
    } else {
        ageError.textContent = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const phone = this.value;
    const phoneError = document.getElementById('phoneError');
    if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
    } else {
        phoneError.textContent = '';
    }
});

document.getElementById('personalDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    if (document.getElementById('nameError').textContent === '' &&
        document.getElementById('ageError').textContent === '' &&
        document.getElementById('emailError').textContent === '' &&
        document.getElementById('phoneError').textContent === '') {

    
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;


        const detailsContainer = document.getElementById('detailsContainer');
        detailsContainer.innerHTML = `
            <div class="details-item"><strong>Name:</strong> ${name}</div>
            <div class="details-item"><strong>Age:</strong> ${age}</div>
            <div class="details-item"><strong>Email:</strong> ${email}</div>
            <div class="details-item"><strong>Phone:</strong> ${phone}</div>
        `;

   
        document.getElementById('personalDetailsForm').reset();
    }
});