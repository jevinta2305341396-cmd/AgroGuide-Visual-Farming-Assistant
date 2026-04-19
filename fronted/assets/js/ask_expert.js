document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('agro_token');
    const apiUrl = 'http://127.0.0.1:8000/api/ask-expert/';
    
    async function loadQuestions() {
        try {
            const headers = {};
            if (token) {
                headers['Authorization'] = `Token ${token}`;
            }

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            });
            const data = await response.json();
            
            const listDiv = document.getElementById('questions-list');
            listDiv.innerHTML = ''; 

            if (data.length === 0) {
                listDiv.innerHTML = '<p>এখনো কোনো প্রশ্ন করা হয়নি।</p>';
                return;
            }

            data.forEach(q => {
                let answerHtml = q.answer 
                    ? `<div class="answer"><strong>উত্তর:</strong> ${q.answer}</div>` 
                    : `<p class="pending">⏳ বিশেষজ্ঞের উত্তরের অপেক্ষায়...</p>`;

                listDiv.innerHTML += `
                    <div class="question-card">
                        <h4>${q.title}</h4>
                        <p style="color: #555;">${q.description}</p>
                        ${answerHtml}
                        <small style="color: #888;">তারিখ: ${new Date(q.created_at).toLocaleDateString('bn-BD')}</small>
                    </div>
                `;
            });
        } catch (error) {
            console.error('Error fetching questions:', error);
            document.getElementById('questions-list').innerHTML = '<p style="color:red;">সার্ভার থেকে তথ্য আনা যাচ্ছে না!</p>';
        }
    }

    document.getElementById('expert-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!token) {
            alert("প্রশ্ন করার জন্য আপনাকে আগে লগইন করতে হবে!");
            window.location.href = 'login.html'; 
            return;
        }

        const title = document.getElementById('q-title').value;
        const desc = document.getElementById('q-desc').value;
        const msgBox = document.getElementById('msg');

        msgBox.innerText = "পাঠানো হচ্ছে...";
        msgBox.style.color = "blue";

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify({ title: title, description: desc })
            });

            if (response.ok) {
                msgBox.innerText = "আপনার প্রশ্ন সফলভাবে জমা হয়েছে!";
                msgBox.style.color = "green";
                document.getElementById('expert-form').reset();
                loadQuestions();
            } else {
                msgBox.innerText = "সমস্যা হয়েছে, আবার চেষ্টা করুন।";
                msgBox.style.color = "red";
            }
        } catch (error) {
            console.error("Submit error:", error);
            msgBox.innerText = "সার্ভারের সাথে কানেক্ট করা যাচ্ছে না।";
            msgBox.style.color = "red";
        }
    });

    loadQuestions();
});