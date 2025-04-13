
// Check authentication status when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // If user is not logged in, redirect to auth page
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = 'auth.html';
        return;
    }
    
    // Optional: Display user info in the navbar
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    
    // If you have a user info element in your navbar, update it
    const userInfoElement = document.querySelector('.user-info');
    if (userInfoElement && userName) {
        userInfoElement.textContent = `Welcome, ${userName}`;
    }
    
    // Add logout functionality if needed
    const logoutButton = document.querySelector('.logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            window.location.href = 'auth.html';
        });
    }
});


const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item,index)=> {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=> {
    payment.style.display="flex"
})


close.addEventListener("click",()=> {
    payment.style.display="none"
})