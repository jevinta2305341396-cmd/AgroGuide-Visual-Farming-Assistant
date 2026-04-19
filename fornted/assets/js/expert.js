document.addEventListener('DOMContentLoaded', () => {
    const expertForm = document.getElementById('expertForm');
    const qaHistory = document.getElementById('qa-history');
    const token = localStorage.getItem('agro_token');

    if (!token) {
        alert("অনুগ্রহ করে আগে লগইন করুন!");
        window.location.href = '../login.html';
        return;
    }

    loadHistory();

    expertForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(expertForm);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/ask-expert/', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`
                },
                body: formData
            });

            if (response.ok) {
                alert("আপনার প্রশ্নটি সফলভাবে জমা হয়েছে। বিশেষজ্ঞরা খুব দ্রুত উত্তর দেবেন।");
                expertForm.reset();
                loadHistory(); 
            } else {
                alert("সমস্যা হয়েছে! সার্ভার এরর।");
            }
        } catch (error) {
            console.error(error);
        }
    });

    async function loadHistory() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/ask-expert/', {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            const data = await response.json();
            
            qaHistory.innerHTML = '';
            data.forEach(item => {
                const replyText = item.expert_reply ? item.expert_reply : "<em>এখনও উত্তর দেওয়া হয়নি...</em>";
                const statusColor = item.status === 'Answered' ? 'green' : 'orange';

                const card = `
                    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid ${statusColor}; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h4 style="margin: 0 0 10px 0; color: #333;">ফসল: ${item.crop_name} <span style="font-size: 0.8rem; color: ${statusColor}; float: right;">${item.status}</span></h4>
                        <p style="margin: 0 0 10px 0; color: #666;"><strong>প্রশ্ন:</strong> ${item.question}</p>
                        <div style="background: #f4faf4; padding: 10px; border-radius: 5px; color: #2d5a27;">
                            <strong>বিশেষজ্ঞের উত্তর:</strong> <br> ${replyText}
                        </div>
                    </div>
                `;
                qaHistory.innerHTML += card;
            });
        } catch (error) {
            console.error(error);
        }
    }
});