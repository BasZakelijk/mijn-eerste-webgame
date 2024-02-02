document.addEventListener('keydown', function(event) {
    // Controleer of de ingedrukte toets de spatiebalk is
    if (event.keyCode === 32) {
      // Roep de functie op om het spel te starten
      goToNormalPage();
    }
  });
