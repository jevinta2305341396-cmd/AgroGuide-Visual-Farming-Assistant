function previewImage(event) {
    const reader = new FileReader();
    const imagePreview = document.getElementById('image-preview');
    
    reader.onload = function() {
        if (reader.readyState === 2) {
            imagePreview.src = reader.result;
            imagePreview.style.display = 'block';
        }
    }
    
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

async function uploadToAI() {
    const fileInput = document.getElementById('imageInput');
    const status = document.getElementById('upload-status');

    if (!fileInput.files[0]) {
        alert("Please select an image first! (দয়া করে আগে একটি ছবি সিলেক্ট করুন)");
        return;
    }

    status.innerText = "Scanning Image... (ছবি পরীক্ষা করা হচ্ছে)";
    status.style.color = "orange";

    setTimeout(() => {
        status.innerText = "Analyzing Symptoms... (লক্ষণগুলো যাচাই করা হচ্ছে)";
        
        setTimeout(() => {
            window.location.href = '../disease/result.html';
        }, 1500);
    }, 1500);
}