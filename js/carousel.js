const galleryTrack = document.getElementById('galleryTrack');
const jsonFile = '/games/games-images.json';

function createCard(src, index) {
    const card = document.createElement('div');
    card.classList.add('gallery-card');
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Game ${index + 1}`;
    card.appendChild(img);
    return card;
}

function populateCarousel(images) {
    images.forEach((src, index) => {
        const card = createCard(src, index);
        galleryTrack.appendChild(card);
    });

    // Duplicate set for seamless scroll
    images.forEach((src, index) => {
        const card = createCard(src, index);
        galleryTrack.appendChild(card);
    });
}

fetch(jsonFile)
    .then(response => {
        if (!response.ok) throw new Error('Cannot load JSON file');
        return response.json();
    })
    .then(data => populateCarousel(data))
    .catch(err => console.error('Error loading carousel images:', err));
