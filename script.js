// Code pour détecter la manette et mettre à jour l'état des boutons et sticks
var gamepad = null;

function update() {
  requestAnimationFrame(update);
  if (gamepad == null) {
    var gamepads = navigator.getGamepads();
    for (var i = 0; i < gamepads.length; i++) {
      if (gamepads[i] != null && gamepads[i].id === "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)") {
        gamepad = gamepads[i];
      }
    }
  } else {
    gamepad = navigator.getGamepads()[gamepad.index];
    if (gamepad != null) {
      document.getElementById("button-0").innerHTML = gamepad.buttons[0].value;
      document.getElementById("button-1").innerHTML = gamepad.buttons[1].value;
      document.getElementById("button-2").innerHTML = gamepad.buttons[2].value;
      document.getElementById("button-3").innerHTML = gamepad.buttons[3].value;
      document.getElementById("button-4").innerHTML = gamepad.buttons[4].value;
      document.getElementById("button-5").innerHTML = gamepad.buttons[5].value;
      document.getElementById("button-6").innerHTML = gamepad.buttons[6].value;
      document.getElementById("button-7").innerHTML = gamepad.buttons[7].value;
      document.getElementById("button-8").innerHTML = gamepad.buttons[8].value;
      document.getElementById("button-9").innerHTML = gamepad.buttons[9].value;
      document.getElementById("button-10").innerHTML = gamepad.buttons[10].value;
      document.getElementById("button-11").innerHTML = gamepad.buttons[11].value;
      document.getElementById("button-12").innerHTML = gamepad.buttons[12].value;
      document.getElementById("button-13").innerHTML = gamepad.buttons[13].value;
      document.getElementById("button-14").innerHTML = gamepad.buttons[14].value;
      document.getElementById("button-15").innerHTML = gamepad.buttons[15].value;
      document.getElementById("button-16").innerHTML = gamepad.buttons[16].value;
      document.getElementById("stick-left-x").innerHTML = gamepad.axes[0].toFixed(2);
      document.getElementById("stick-left-y").innerHTML = gamepad.axes[1].toFixed(2);
      document.getElementById("stick-right-x").innerHTML = gamepad.axes[2].toFixed(2);
      document.getElementById("stick-right-y").innerHTML = gamepad.axes[3].toFixed(2);
    }
  }
}

requestAnimationFrame(update);
