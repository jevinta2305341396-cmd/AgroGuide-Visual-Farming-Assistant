document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        const messageBox = document.createElement('p');
        messageBox.style.textAlign = "center";
        messageBox.style.fontWeight = "bold";
        messageBox.style.marginTop = "10px";
        loginForm.appendChild(messageBox);

        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;
            
            messageBox.innerText = "";

            try {
                const response = await fetch('http://127.0.0.1:8000/api/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: usernameInput,
                        password: passwordInput
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    
                    if(data.token) {
                        localStorage.setItem('agro_token', data.token);
                    }
                    
                    messageBox.style.color = "green";
                    messageBox.innerText = "Login Successful! Loading Dashboard...";
                    
                    setTimeout(() => {
                        window.location.href = '../../dashboard.html';
                    }, 1500);
                } else {
                    messageBox.style.color = "red";
                    messageBox.innerText = "ভুল ইউজারনেম বা পাসওয়ার্ড! আবার চেষ্টা করুন।";
                }
            } catch (error) {
                messageBox.style.color = "red";
                messageBox.innerText = "সার্ভারের সাথে কানেক্ট করা যাচ্ছে না। জ্যাঙ্গো সার্ভার চালু আছে কিনা চেক করুন।";
            }
        });
    }
});