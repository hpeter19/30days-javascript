// selects the #container div 
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const displays = controls.previousElementSibling;
console.log(displays); // <div class="display"></div>
