const buttons = [
  "button-a",
  "button-b",
  "button-x",
  "button-y",
  "button-l",
  "button-r",
  "button-zl",
  "button-zr",
  "button-minus",
  "button-plus",
  "button-home",
  "button-capture",
  "dpad-up",
  "dpad-down",
  "dpad-left",
  "dpad-right",
  "button-stick-left",
  "button-stick-right"
];

const sticks = [
  { id: "stick-left", xId: "stick-left-x", yId: "stick-left-y" },
  { id: "stick-right", xId: "stick-right-x", yId: "stick-right-y" }
];

let gamepad;

function handleGamepad() {
  if (!gamepad) {
    return;
  }

  // Handle buttons
  buttons.forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (gamepad.buttons[buttons.indexOf(buttonId)].pressed) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Handle sticks
  sticks.forEach((stick) => {
    const x = gamepad.axes[sticks.indexOf(stick) * 2];
    const y = gamepad.axes[sticks.indexOf(stick) * 2 + 1];
    const stickElement = document.getElementById(stick.id);
    const xElement = document.getElementById(stick.xId);
    const yElement = document.getElementById(stick.yId);
    stickElement.classList.remove("active");
    xElement.innerHTML = x.toFixed(2);
    yElement.innerHTML = y.toFixed(2);
    if (Math.abs(x) > 0.2 || Math.abs(y) > 0.2) {
      stickElement.classList.add("active");
    }
  });
}

function connectHandler(e) {
  gamepad = e.gamepad;
  console.log(`Gamepad connected: ${gamepad.id}`);
}

function disconnectHandler(e) {
  console.log(`Gamepad disconnected: ${gamepad.id}`);
  gamepad = null;
}

window.addEventListener("gamepadconnected", connectHandler);
window.addEventListener("gamepaddisconnected", disconnectHandler);

function update() {
  requestAnimationFrame(update);
  handleGamepad();
}

update();
