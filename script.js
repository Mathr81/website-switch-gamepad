// Fonction pour détecter les gamepads connectés et les entrées
function detectGamepad() {
  // Vérifier si au moins un gamepad est connecté
  if (navigator.getGamepads()[0]) {
    // Obtenir le premier gamepad
    var gamepad = navigator.getGamepads()[0];
    
    // Afficher les entrées du gamepad sur la page web
    document.getElementById("button-0").innerHTML = gamepad.buttons[0].pressed;
    document.getElementById("button-1").innerHTML = gamepad.buttons[1].pressed;
    document.getElementById("button-2").innerHTML = gamepad.buttons[2].pressed;
    document.getElementById("button-3").innerHTML = gamepad.buttons[3].pressed;
    document.getElementById("stick-0").innerHTML = gamepad.axes[0].toFixed(2);
    document.getElementById("stick-1").innerHTML = gamepad.axes[1].toFixed(2);
  }
  
  // Appeler cette fonction à nouveau pour détecter les changements dans les entrées
  requestAnimationFrame(detectGamepad);
}

// Appeler la fonction pour la première fois
detectGamepad();
