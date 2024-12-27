
const passwordInput = document.getElementById('password');
const passwordStrengthSpan = document.getElementById('password-strength');
const form = document.querySelector('form');
const checkPasswordButton = document.getElementById('check-password');
const phoneInput = document.getElementById('phone');
const checkInput = document.getElementById('check');
const passwordcheck = document.getElementById('check-password');

// Realtime password checker
$(passwordInput).on('input', function() {
  if ($(this).val() == '') {
    $(passwordStrengthSpan).html('');
    $(this).css({
      boxShadow: 'none'
    });
  } else {
    const password = $(this).val();
    let strength = 0;

    if (password.length < 8) {
      strength = 0;
    } else if (hasAllFour(password)) {
      strength = 3;
    } else if (hasAllThree(password)) {
      strength = 2;
    } else if (hasLowercaseAndUppercaseLetters(password) || hasLowercaseLettersAndNumbers(password) || hasUppercaseLettersAndNumbers(password)) {
      strength = 1;
    }

    switch (strength) {
      case 0:
        $(passwordStrengthSpan).text('Password is very weak!');
        $(passwordStrengthSpan).css('color', 'red');
        $(this).css({
          borderColor: 'red',
          backgroundColor: '#ffe6e6',
          boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)'
        });
        break;
      case 1:
        $(passwordStrengthSpan).text('Password is weak.');
        $(passwordStrengthSpan).css('color', 'orange');
        $(this).css({
          borderColor: 'orange',
          backgroundColor: '#ffffcc',
          boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)'
        });
        break;
      case 2:
        $(passwordStrengthSpan).text('Password is okay.');
        $(passwordStrengthSpan).css('color', 'yellow');
        $(this).css({
          borderColor: 'yellow',
          backgroundColor: '#ffff99',
          boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)'
        });
        if (confirm('Are you sure you want to use this password?')) {
        } else {
          $(this).val('');
        }
        break;
      case 3:
        $(passwordStrengthSpan).text('Password is strong');
        $(passwordStrengthSpan).css('color', 'green');
        $(this).css({
          borderColor: 'green',
          backgroundColor: '#ccffcc',
          boxShadow: '0 0 10px rgba(0, 128, 0, 0.5)'
        });
        break;
    }
  }
});



// To check for lower case and upper case
function hasLowercaseAndUppercaseLetters(password) {
  return password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/);
}

// To check for lower case and numbers
function hasLowercaseLettersAndNumbers(password) {
  return password.length >= 8 && password.match(/[a-z]/) && password.match(/[0-9]/);
}

// To check for upper case and numbers
function hasUppercaseLettersAndNumbers(password) {
  return password.length >= 8 && password.match(/[A-Z]/) && password.match(/[0-9]/);
}

// To check for all three
function hasAllThree(password) {
  return password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/);
}

// To check for all four
function hasAllFour(password) {
  return password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[!@#$%^&*]/);
}

//re-check password
$('#checkInput').on('input', function() {
  var checkInputValue = $(this).val();
  var passwordInputValue = $('#passwordInput').val();
  
  if (checkInputValue == '') {
    $('#passwordcheck').html('');
  } else {
    if (passwordInputValue == checkInputValue) {
      $('#passwordcheck').html('Password Matched');
    } else {
      $('#passwordcheck').html('Re-Check the entered password');
    }
  }
});

//to check for the phone number
phoneInput.addEventListener('input', () => {
  const phoneNumber = phoneInput.value;

  if (!phoneNumber.match(/^\d{10}$/)) {
    phoneInput.style.borderColor = 'red';
    phoneInput.style.backgroundColor = '#ffe6e6';
  } else {
    phoneInput.style.borderColor = 'green';
    phoneInput.style.backgroundColor = '#ccffcc';
  }
});

//the work after pressing the submit button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("1").addEventListener("click", function(event) {
      event.preventDefault();
      const passwordInput = document.getElementById('password');
      const phoneInput = document.getElementById('phone');
      const emailInput = document.getElementById('email');
      const passwordStrengthSpan = document.getElementById('password-strength');
  
      // Check email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!emailInput.value.match(emailRegex)) {
        alert('Please enter a valid Gmail address');
        return;
      }
  
      // Check phone number
      if (phoneInput.style.borderColor !== 'green') {
        alert('Please enter a valid 10-digit phone number');
        return;
      }
  
      // Check password strength
      if (passwordStrengthSpan.textContent !== 'You have a strong password!' && passwordInput.style.borderColor !== 'green' && passwordInput.style.borderColor !== 'yellow') {
        alert('Please ensure that your password is strong before submitting the form.');
        return;
      }

      if(passwordInput.value !== checkInput.value)
      {
        alert('Please ensure that your passwords are matching before submitting the form.');
        return;
      }

  
      document.querySelector("form").submit();
      alert('form was succesfully submitted!!')

      // Redirect to feedback.html after successful submission
      window.location.href = 'feedback.html';
    });
  });


//for slideshow
const slideshowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Initialize the slideshow
nextSlide();

// Set the interval to change the slide every 3 seconds
setInterval(nextSlide, 5000);


//to reset the form when the button is clicked
document.getElementById("2").addEventListener("click", function() {
    document.querySelector("form").reset();
});


// Get the submit button and feedback form elements
const submitButton = document.getElementById('1');
const feedbackForm = document.getElementById('feedback-form');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  feedbackForm.style.display = 'block'; // Show the feedback form
});

