// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

/*btn.addEventListener("click", function (e) {
    console.log(e.target);
  }); */

  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


  
