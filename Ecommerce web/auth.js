document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const signinToggle = document.getElementById('signin-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    
    // Toggle between forms
    signinToggle.addEventListener('click', function() {
        signinForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        signinToggle.classList.add('active');
        signupToggle.classList.remove('active');
    });
    
    signupToggle.addEventListener('click', function() {
        signupForm.classList.remove('hidden');
        signinForm.classList.add('hidden');
        signupToggle.classList.add('active');
        signinToggle.classList.remove('active');
    });
    
    // Handle form submissions
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real application, you would send these credentials to your server
        // For demo purposes, we'll just simulate a successful login
        console.log('Sign in attempt:', { email });
        
        // Store authentication state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirect to main page
        window.location.href = 'index.html';
    });
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm').value;
        const termsChecked = document.getElementById('terms').checked;
        
        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (!termsChecked) {
            alert('Please agree to the terms and conditions');
            return;
        }
        
        // In a real application, you would send this data to your server
        // For demo purposes, we'll just simulate a successful registration
        console.log('Sign up data:', { name, email });
        
        // Store authentication state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        
        // Redirect to main page
        window.location.href = 'index.html';
    });
});
