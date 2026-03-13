// assets/js/script.js

// ১. লগআউট ফাংশন
function logoutUser() {
    localStorage.removeItem('agro_token'); // টোকেন ডিলিট করা
    alert("Logging out...");
    window.location.href = '/index.html';
}

// ২. ইউজার লগইন আছে কি না তা চেক করা
function checkAuth() {
    const token = localStorage.getItem('agro_token');
    if (!token && window.location.pathname.includes('dashboard.html')) {
        window.location.href = '/pages/auth/login.html';
    }
}

// ৩. একটি কমন এনিমেশন বা ইউজার মেসেজ ফাংশন
function showNotification(message, type = 'success') {
    const note = document.createElement('div');
    note.innerText = message;
    note.style.cssText = `
        position: fixed; top: 20px; right: 20px; 
        padding: 15px 25px; border-radius: 5px; color: white;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        box-shadow: 0 4px 10px rgba(0,0,0,0.2); z-index: 1000;
    `;
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 3000);
}

// পেজ লোড হলে চেক রান হবে
document.addEventListener('DOMContentLoaded', checkAuth);