// assets/js/market.js

const fullMarketData = [
    // ১. ধান/চাল/ডাল/গম (১–১০)
    { name: "মোটা চাল", price: "৳৫৫–৬৪", cat: "grain", img: "mota_chal.jpg" },
    { name: "মাঝারি চাল", price: "৳৬০–৭৫", cat: "grain", img: "med_chal.jpg" },
    { name: "সুপারি/আনন্দ চাল", price: "৳৭৫–৮৫", cat: "grain", img: "premium_chal.jpg" },
    { name: "গমের আটা", price: "৳৪৫–৫০", cat: "grain", img: "flour.jpg" },
    { name: "মসুর ডাল", price: "৳১২০–১৭০", cat: "grain", img: "lentils.jpg" },
    { name: "ছোলা", price: "৳১১০", cat: "grain", img: "chickpeas.jpg" },
    { name: "মটর ডাল", price: "৳১৫০–২০০", cat: "grain", img: "motor.jpg" },
    { name: "মুগ ডাল", price: "৳১৪০–১৮০", cat: "grain", img: "moog.jpg" },
    { name: "কাবুলি চনা", price: "৳২০০–২২০", cat: "grain", img: "kabuli.jpg" },
    { name: "পাটিসাপটা ডাল", price: "৳১২০–১৪০", cat: "grain", img: "dal.jpg" },

    // ২. তেল ও ঘি (১১–১৩)
    { name: "সয়াবিন তেল (লুস)", price: "৳১৭৫", cat: "oil", img: "oil.jpg" },
    { name: "প্যাকেট সয়াবিন তেল", price: "৳১৮০–২৩০", cat: "oil", img: "oil_packet.jpg" },
    { name: "ঘি (ঘৃত)", price: "৳৪৫০–৬৫০", cat: "oil", img: "ghi.jpg" },

    // ৩. মাংস ও ডিম (১৪–১৮)
    { name: "মুরগি (ব্রয়লার)", price: "৳২০০–২১০", cat: "meat", img: "chicken.jpg" },
    { name: "সোনালী মুরগি", price: "৳৩২০–৩৪০", cat: "meat", img: "sonali.jpg" },
    { name: "গরুর মাংস", price: "৳৭৫০–৮০০", cat: "meat", img: "beef.jpg" },
    { name: "খাসির মাংস", price: "৳১০৫০–১২০০", cat: "meat", img: "mutton.jpg" },
    { name: "ডিম (ডজন)", price: "৳১৩৫–১৫০", cat: "meat", img: "eggs.jpg" },

    // ৪. মাছ (১৯–২৪)
    { name: "ছোট মাছ (কচকি)", price: "৳৪৫০–৭০০", cat: "fish", img: "small_fish.jpg" },
    { name: "পাঙ্গাস", price: "৳২৫০–৮০০", cat: "fish", img: "pangash.jpg" },
    { name: "রুই", price: "৳৩৮০–৪২০", cat: "fish", img: "rui.jpg" },
    { name: "শিং/মাগুর", price: "৳৫০০–৬০০", cat: "fish", img: "magur.jpg" },
    { name: "বোয়াল", price: "৳৮০০–১২০০", cat: "fish", img: "boal.jpg" },
    { name: "ইলিশ", price: "৳১২০০–২৫০০", cat: "fish", img: "hilsa.jpg" },

    // ৫. সবজি (২৫–৫৪)
    { name: "আলু", price: "৳২৫–৩০", cat: "veg", img: "potato.jpg" },
    { name: "পেঁয়াজ", price: "৳৮০–৯০", cat: "veg", img: "onion.jpg" },
    { name: "টমেটো", price: "৳১৪০–১৫০", cat: "veg", img: "tomato.jpg" },
    { name: "বেগুন", price: "৳৮০–১২০", cat: "veg", img: "brinjal.jpg" },
    { name: "করলা", price: "৳১০০–১২০", cat: "veg", img: "bitter_gourd.jpg" },
    { name: "ঢেঁড়স", price: "৳৮০–১০০", cat: "veg", img: "okra.jpg" },
    { name: "সিম", price: "৳১০০–১২০", cat: "veg", img: "beans.jpg" },
    { name: "লাউ", price: "৳৮০–১০০", cat: "veg", img: "bottle_gourd.jpg" },
    { name: "শশা", price: "৳৮০", cat: "veg", img: "cucumber.jpg" },
    { name: "কাঁচা মরিচ", price: "৳১৮০–২০০", cat: "veg", img: "chili.jpg" },
    { name: "বাঁধাকপি", price: "৳৮০–১০০", cat: "veg", img: "cabbage.jpg" },
    { name: "ফুলকপি", price: "৳১০০–১২০", cat: "veg", img: "cauliflower.jpg" },
    { name: "গাজর", price: "৳৮০–১২০", cat: "veg", img: "carrot.jpg" },
    { name: "পটল", price: "৳৮০–১০০", cat: "veg", img: "potol.jpg" },
    { name: "ধনে পাতা", price: "৳৩০–৪০", cat: "veg", img: "coriander.jpg" },
    { name: "পুঁইশাক", price: "৳৩০–৪০", cat: "veg", img: "puishak.jpg" },
    { name: "স্পিনাচ", price: "৳৪০–৬০", cat: "veg", img: "spinach.jpg" },
    { name: "লাল শাক", price: "৳৩০–৫০", cat: "veg", img: "lalshak.jpg" },
    { name: "কুমড়ো", price: "৳৫০–৮০", cat: "veg", img: "pumpkin.jpg" },
    { name: "লেবু", price: "৳২০০–২৫০", cat: "veg", img: "lemon.jpg" },

    // ৬. মসলা ও অন্যান্য (৫৫–৬৯)
    { name: "চিনি", price: "৳১৪৫–১৭০", cat: "spice", img: "sugar.jpg" },
    { name: "রসুন", price: "৳১৮০–২৪০", cat: "spice", img: "garlic.jpg" },
    { name: "আদা", price: "৳২২০–২৫০", cat: "spice", img: "ginger.jpg" },
    { name: "লবণ", price: "৳২৫–৩৫", cat: "spice", img: "salt.jpg" },
    { name: "হলুদ গুঁড়ো", price: "৳৪০০", cat: "spice", img: "turmeric.jpg" },
    { name: "জিরা", price: "৳৬০০", cat: "spice", img: "cumin.jpg" },
    { name: "এলাচ", price: "৳৭০০", cat: "spice", img: "cardamom.jpg" },
    { name: "দারচিনি", price: "৳৮০০", cat: "spice", img: "cinnamon.jpg" },
    { name: "চা পাতা", price: "৳৪০০–৮০০", cat: "spice", img: "tea.jpg" },
    { name: "দুধ (ফ্রেশ)", price: "৳৮০–১২০", cat: "spice", img: "milk.jpg" },
    { name: "ময়দা", price: "৳৫০–৬০", cat: "spice", img: "flour_white.jpg" },
    { name: "কোকো পাউডার", price: "৳৪০০", cat: "spice", img: "cocoa.jpg" },
    { name: "কফি পাউডার", price: "৳৮০০–৯০০", cat: "spice", img: "coffee.jpg" },

    // ৭. ফল (৭০–৯৪)
    { name: "কলা", price: "৳৩০–৫০", cat: "fruit", img: "banana.jpg" },
    { name: "আম", price: "৳৮০–১৫০", cat: "fruit", img: "mango.jpg" },
    { name: "আপেল", price: "৳১২০–২২০", cat: "fruit", img: "apple.jpg" },
    { name: "কমলা", price: "৳১০০–১৬০", cat: "fruit", img: "orange.jpg" },
    { name: "আনারস", price: "৳৮০–১২০", cat: "fruit", img: "pineapple.jpg" },
    { name: "লিচু", price: "৳২০০–৩০০", cat: "fruit", img: "litchi.jpg" },
    { name: "স্ট্রবেরি", price: "৳৪০০–৫০০", cat: "fruit", img: "strawberry.jpg" },
    { name: "কাঁঠাল", price: "৳৮০–১২০", cat: "fruit", img: "jackfruit.jpg" },
    { name: "নারকেল", price: "৳৮০–১০০", cat: "fruit", img: "coconut.jpg" },
    { name: "তরমুজ", price: "৳৩০–৫০", cat: "fruit", img: "watermelon.jpg" },
    { name: "খেজুর", price: "৳৩৫০–১৭০০", cat: "fruit", img: "dates.jpg" },
    { name: "পেয়ারা", price: "৳৫০–৮০", cat: "fruit", img: "guava.jpg" },
    { name: "আঙুর", price: "৳২৫০–৪০০", cat: "fruit", img: "grapes.jpg" },
    { name: "নাশপাতি", price: "৳১৫০–২৫০", cat: "fruit", img: "pear.jpg" },
    { name: "কিউই", price: "৳২৫০–৩৫০", cat: "fruit", img: "kiwi.jpg" },
    { name: "ড্রাগন ফ্রুট", price: "৳৩০০–৪০০", cat: "fruit", img: "dragon.jpg" },

    // ৮. মসলা ও অতিরিক্ত (৯৫–১০০)
    { name: "মরিচ গুঁড়ো", price: "৳৩০০–৪০০", cat: "spice", img: "chili_powder.jpg" },
    { name: "সরিষা বীজ", price: "৳২২০–২৫০", cat: "spice", img: "mustard.jpg" }
];

function loadMarketPrices(filter = 'all') {
    const container = document.getElementById('market-price-container');
    if (!container) return;

    // ক্লিয়ার প্রিভিয়াস ডেটা
    container.innerHTML = "";

    const filteredData = filter === 'all' ? fullMarketData : fullMarketData.filter(i => i.cat === filter);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'price-card';
        card.innerHTML = `
            <div class="img-placeholder" style="background-image: url('assets/images/crops/${item.img || 'default.png'}')"></div>
            <h4>${item.name}</h4>
            <p class="price-text">${item.price}</p>
            <span class="category-tag">${item.cat.toUpperCase()}</span>
        `;
        container.appendChild(card);
    });
}

// ফিল্টার বাটন হ্যান্ডলিং
document.addEventListener('DOMContentLoaded', () => {
    function loadMarketPrices(filter = 'all') {
    const container = document.getElementById('market-price-container');
    if (!container) return;

    container.innerHTML = "";

    const filteredData = filter === 'all' ? fullMarketData : fullMarketData.filter(i => i.cat === filter);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'price-card';
        
        // ছবির জন্য সোর্স তৈরি
        // প্রথমে আপনার লোকাল ফোল্ডার চেক করবে, না পেলে অনলাইন থেকে ডেমো ছবি নিবে
        const localImgPath = `assets/images/crops/${item.img}`;
        const fallbackImg = `https://source.unsplash.com/400x300/?${item.name},agriculture`;

        card.innerHTML = `
            <div class="card-img-wrapper" style="width: 100%; height: 150px; overflow: hidden; border-radius: 10px 10px 0 0;">
                <img src="${localImgPath}" 
                     alt="${item.name}" 
                     style="width: 100%; height: 100%; object-fit: cover;"
                     onerror="this.src='https://via.placeholder.com/400x300?text=${item.name}'">
            </div>
            <div style="padding: 15px;">
                <h4 style="margin: 0; color: #2d5a27;">${item.name}</h4>
                <p class="price-text" style="color: #4CAF50; font-weight: bold; margin: 5px 0;">${item.price}</p>
                <span class="category-tag" style="font-size: 10px; background: #e8f5e9; padding: 3px 8px; border-radius: 10px;">${item.cat.toUpperCase()}</span>
            </div>
        `;
        container.appendChild(card);
    });
}
});
function searchMarket() {
    const searchTerm = document.getElementById('market-search').value.toLowerCase();
    const cards = document.getElementsByClassName('price-card');

    for (let card of cards) {
        const productName = card.getElementsByTagName('h4')[0].innerText.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}