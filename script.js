// Récupérer les éléments nécessaires

const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const popup = document.getElementById("popup");

const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');


// Afficher le popup lorsque le bouton est cliqué
openPopupBtn.addEventListener("click", function() {
    popup.style.display = "flex";
});

// Fermer le popup lorsque l'utilisateur clique sur la croix
closePopupBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

// Fermer le popup si l'utilisateur clique en dehors du contenu
window.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});


//video
// Contrôle Lecture/Pause
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Lire';
  }
});

// Contrôle du Son
muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? 'Réactiver le son' : 'Couper le son';
});

