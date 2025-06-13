// // Animal Data
// const animals = [
//     { name: "Python", type: "Reptile", diet: "Carnivore", funFact: "Constricts its prey!" },
//     { name: "Monitor Lizard", type: "Reptile", diet: "Carnivore", funFact: "Loves swimming!" },
//     { name: "Peacock", type: "Bird", diet: "Omnivore", funFact: "Colorful feathers attract mates!" },
//     { name: "Bengal Tiger", type: "Mammal", diet: "Carnivore", funFact: "Stripes are unique like fingerprints!" },
//     { name: "Elephant", type: "Mammal", diet: "Herbivore", funFact: "22-month pregnancy!" },
//     { name: "Lion", type: "Mammal", diet: "Carnivore", funFact: "Lives in prides!" }
// ];

// // Load Animals into Grid
// const animalGrid = document.querySelector('.animal-grid');

// animals.forEach(animal => {
//     const animalCard = document.createElement('div');
//     animalCard.className = 'animal-card';
//     animalCard.innerHTML = `
//         <img src="WhatsApp Image 2025-06-12 at 16.13.38_db502dd3.jpg" alt="${animal.name}">
//         <div class="animal-info">
//             <h3>${animal.name}</h3>
//             <p><strong>Type:</strong> ${animal.type}</p>
//             <p><strong>Diet:</strong> ${animal.diet}</p>
//             <p><strong>Fun Fact:</strong> ${animal.funFact}</p>
//         </div>
//     `;
//     animalGrid.appendChild(animalCard);
// });

// // Donation Button Interaction
// const donateBtn = document.getElementById('donate-btn');
// donateBtn.addEventListener('click', () => {
//     alert('Thank you for supporting wildlife conservation! 🐾');
// });

// Animal Data with custom images, feeding times, and sleeping patterns
const animals = [
    { 
        name: "Python", 
        type: "Reptile", 
        diet: "Carnivore", 
        funFact: "Constricts its prey!",
        image: "WhatsApp Image 2025-06-12 at 17.19.24_5996b144.jpg",
        feedingTime: "Every 7-10 days (evening)",
        sleepingPattern: "Nocturnal (active at night)"
    },
    { 
        name: "Monitor Lizard", 
        type: "Reptile", 
        diet: "Carnivore", 
        funFact: "Loves swimming!",
        image: "WhatsApp Image 2025-06-12 at 17.21.01_b2ff6f0b.jpg",
        feedingTime: "Daily at 11 AM",
        sleepingPattern: "Diurnal (active during day)"
    },
    { 
        name: "Peacock", 
        type: "Bird", 
        diet: "Omnivore", 
        funFact: "Colorful feathers attract mates!",
        image: "peacock.jpg",
        feedingTime: "Twice daily (9 AM & 3 PM)",
        sleepingPattern: "Roosts in trees at night"
    },
    { 
        name: "Bengal Tiger", 
        type: "Mammal", 
        diet: "Carnivore", 
        funFact: "Stripes are unique like fingerprints!",
        image: "BengalTiger.jpg",
        feedingTime: "Every 2-3 days (morning)",
        sleepingPattern: "16-20 hours daily (crepuscular)"
    },
    { 
        name: "Elephant", 
        type: "Mammal", 
        diet: "Herbivore", 
        funFact: "22-month pregnancy!",
        image: "WhatsApp Image 2025-06-12 at 17.10.55_0ffe6332.jpg",
        feedingTime: "Throughout the day (grazing)",
        sleepingPattern: "4-6 hours (often standing)"
    },
    { 
        name: "Lion", 
        type: "Mammal", 
        diet: "Carnivore", 
        funFact: "Lives in prides!",
        image: "WhatsApp Image 2025-06-12 at 17.20.17_f3953b02.jpg",
        feedingTime: "Every 3-4 days (after hunt)",
        sleepingPattern: "16-20 hours daily"
    },
    { 
        name: "Snakes", 
        type: "Reptile", 
        diet: "Carnivore", 
        funFact: "Use tongues to smell the air!",
        image: "WhatsApp Image 2025-06-12 at 17.18.51_9c4b471e.jpg",
        feedingTime: "Varies by species (weekly)",
        sleepingPattern: "Nocturnal or diurnal by species"
    },
    { 
        name: "Monkey", 
        type: "Primate", 
        diet: "Omnivore", 
        funFact: "Highly social animals!",
        image: "monkey.jpg",
        feedingTime: "Multiple small meals daily",
        sleepingPattern: "10-12 hours (tree nests)"
    },
    { 
        name: "Jungle Cat", 
        type: "Mammal", 
        diet: "Carnivore", 
        funFact: "Excellent swimmers!",
        image: "WhatsApp Image 2025-06-12 at 17.12.40_593ade03.jpg",
        feedingTime: "Twice daily (dawn & dusk)",
        sleepingPattern: "Crepuscular (most active at twilight)"
    },
    { 
        name: "Sloth Bear", 
        type: "Mammal", 
        diet: "Omnivore", 
        funFact: "Loves honey!",
        image: "WhatsApp Image 2025-06-12 at 17.16.19_0a40153d.jpg",
        feedingTime: "Nighttime foraging",
        sleepingPattern: "Nocturnal (daytime sleeper)"
    },
    { 
        name: "Leopard", 
        type: "Mammal", 
        diet: "Carnivore", 
        funFact: "Drags prey up trees!",
        image: "WhatsApp Image 2025-06-12 at 16.14.14_27a1acdd.jpg",
        feedingTime: "Every 2-3 days (night)",
        sleepingPattern: "12-14 hours (nocturnal)"
    },
    { 
        name: "White Tiger", 
        type: "Mammal", 
        diet: "Carnivore", 
        funFact: "Rare genetic variant!",
        image: "WhatsApp Image 2025-06-12 at 16.17.58_cc6e2331.jpg",
        feedingTime: "Every 2 days (morning)",
        sleepingPattern: "16-18 hours daily"
    },
    { 
        name: "Deer", 
        type: "Mammal", 
        diet: "Herbivore", 
        funFact: "Rotate ears 180 degrees!",
        image: "WhatsApp Image 2025-06-12 at 17.13.55_7adcf253.jpg",
        feedingTime: "Dawn and dusk grazing",
        sleepingPattern: "3-4 hours (light sleepers)"
    },
    { 
        name: "Antelope", 
        type: "Mammal", 
        diet: "Herbivore", 
        funFact: "Can run up to 60 km/h!",
        image: "WhatsApp Image 2025-06-12 at 17.13.31_25e9afbf.jpg",
        feedingTime: "Morning and evening",
        sleepingPattern: "Short naps throughout day"
    }
];

// Load Animals into Grid
const animalGrid = document.querySelector('.animal-grid');

animals.forEach(animal => {
    const animalCard = document.createElement('div');
    animalCard.className = 'animal-card';
    animalCard.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}">
        <div class="animal-info">
            <h3>${animal.name}</h3>
            <p><strong>Type:</strong> ${animal.type}</p>
            <p><strong>Diet:</strong> ${animal.diet}</p>
            <p><strong>Feeding Time:</strong> ${animal.feedingTime}</p>
            <p><strong>Sleeping Pattern:</strong> ${animal.sleepingPattern}</p>
            <p><strong>Fun Fact:</strong> ${animal.funFact}</p>
        </div>
    `;
    animalGrid.appendChild(animalCard);
});

// Donation Button Interaction
const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click', () => {
    alert('Thank you for supporting wildlife conservation! 🐾');
});