const API_URL = 'http://127.0.0.1:8000/api/crops/';

async function loadCrops() {
    const container = document.getElementById('crop-list');
    const status = document.getElementById('user-status');

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Backend offline');
        
        const crops = await response.json();
        status.innerText = "System Online";
        status.style.color = "#afffaf";

        if (crops.length === 0) {
            container.innerHTML = "<p>No crops available yet. Add some in Django Admin!</p>";
            return;
        }

        container.innerHTML = crops.map(crop => `
            <div class="crop-card">
                <h3>${crop.name}</h3>
                <p>Category: ${crop.category}</p>
                <p class="price">৳${crop.price}/kg</p>
                <p>Stock: ${crop.stock_kg} kg</p>
                <p><small>Farmer: ${crop.farmer_name}</small></p>
                <button style="width:100%; padding:10px; cursor:pointer;">Contact Farmer</button>
            </div>
        `).join('');

    } catch (error) {
        console.error("Error:", error);
        status.innerText = "Backend Offline";
        status.style.color = "red";
        container.innerHTML = "<p style='color:red;'>Could not connect to the server. Make sure Django is running!</p>";
    }
}

// Start loading when page opens
loadCrops();
