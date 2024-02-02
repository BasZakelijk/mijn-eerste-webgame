// Connect het met de HTML-elementen
const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");
const modal = document.getElementById("game-over-modal");
const modalText = document.getElementById("modal-text");

// Variable om bij te houden of het spel voorbij is
let isGameOver = false;

// Functie om het mannetje te laten springen
function jump() {
  // Controleer of het spel niet voorbij is
  if (!isGameOver) {
    // Voeg een klasse toe om de springanimatie te starten
    dino.classList.add("jump-animation");
    // Verwijder de klasse na een vertraging om de springanimatie te beëindigen
    setTimeout(() => dino.classList.remove("jump-animation"), 500);
  }
}

// Functie om het spel opnieuw te starten door de pagina te herladen
function restartGame() {
  location.reload();
}

// Event listener voor toetsaanslag gebeurtenissen
document.addEventListener('keypress', (event) => {
  // Controleer of de dinosaurus niet al in een springanimatie zit
  if (!dino.classList.contains('jump-animation')) {
    // Roep de springfunctie aan wanneer een toets wordt ingedrukt
    jump();
  }
});

setInterval(() => {
  // Controleer of het spel niet voorbij is
  if (!isGameOver) {
    // Krijg de huidige verticale positie van de dinosaurus
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    // Krijg de huidige horizontale positie van de rots
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    // Voeg de score toe
    score.innerText++;

    // Controleer of het object links van het scherm is gegaan
    if (rockLeft < 0) {
      // Verberg het object
      rock.style.display = 'none';
    } else {
      // Toon het object
      rock.style.display = '';
    }

    // Controleer de hit met het mannetje
    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 280) {
      // Spel voorbij
      isGameOver = true;
      // Stop de animatie van het object
      rock.style.animation = 'none';
      // Verberg het object
      rock.style.display = 'none';
      // Toon het scherm met de score
      modalText.innerText = "You got a score of: " + score.innerText;
      modal.style.display = 'flex'; 
    }
  }
}, 50);
