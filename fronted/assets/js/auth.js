// assets/js/auth.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // ফর্মের ডিফল্ট রিলোড হওয়া বন্ধ করা
            
            // ইনপুট থেকে ইউজারনেম এবং পাসওয়ার্ড নেওয়া
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;
            
            // একটি মেসেজ দেখানোর জন্য এলিমেন্ট তৈরি করা
            let messageBox = document.getElementById('login-message');
            if (!messageBox) {
                messageBox = document.createElement('p');
                messageBox.id = 'login-message';
                messageBox.style.fontWeight = 'bold';
                messageBox.style.textAlign = 'center';
                loginForm.appendChild(messageBox);
            }

            messageBox.innerText = "লগইন চেক করা হচ্ছে...";
            messageBox.style.color = "blue";

            try {
                // জ্যাঙ্গো ব্যাকএন্ডে রিকোয়েস্ট পাঠানো
                const response = await fetch('http://127.0.0.1:8000/api/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: usernameInput,
                        password: passwordInput
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    // লগইন সফল হলে টোকেন সেভ করা
                    localStorage.setItem('agro_token', data.token);
                    
                    messageBox.innerText = "Login Successful! Loading Dashboard...";
                    messageBox.style.color = "green";

                    // ১.৫ সেকেন্ড পর ড্যাশবোর্ডে নিয়ে যাওয়া
                    setTimeout(() => {
                        // আপনার HTML ফাইলগুলো কোথায় আছে তার ওপর ভিত্তি করে লিংকটি ঠিক করে নিতে হতে পারে
                        window.location.href = '../../dashboard.html'; 
                    }, 1500);
                } else {
                    // ইউজারনেম বা পাসওয়ার্ড ভুল হলে
                    messageBox.innerText = "ইউজারনেম বা পাসওয়ার্ড ভুল হয়েছে!";
                    messageBox.style.color = "red";
                }
            } catch (error) {
                console.error("Error connecting to server:", error);
                messageBox.innerText = "সার্ভারের সাথে কানেক্ট করা যাচ্ছে না। জ্যাঙ্গো সার্ভার চালু আছে কিনা চেক করুন।";
                messageBox.style.color = "red";
            }
        });
    }
});