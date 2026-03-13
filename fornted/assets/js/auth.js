// assets/js/auth.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // এখানে পরবর্তীতে আমরা Django API থেকে Token গ্রহণ করব
            console.log("Logging in...");
            
            // ডেমো সাকসেস মেসেজ
            const message = document.createElement('p');
            message.innerText = "Login Successful! Loading Dashboard...";
            message.style.color = "green";
            loginForm.appendChild(message);

            setTimeout(() => {
                window.location.href = '../../dashboard.html';
            }, 1500);
        });
    }
});