document.addEventListener("DOMContentLoaded", () => {
  const slideshowImg = document.getElementById('games-slideshow');
  if (!slideshowImg) return;

  fetch('/assets/images/games-images.json')
    .then(response => response.json())
    .then(images => {
      if (!images || images.length === 0) return;
      let currentIndex = 0;
      setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slideshowImg.src = images[currentIndex];
      }, 3000);
    })
    .catch(err => console.error('Failed to load images JSON:', err));
});
