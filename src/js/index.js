//  hey this is mastry of javascript with the html and css
//  all about dom amnipulations

const element = document.getElementById("sidebar-content");

element.addEventListener("mouseenter", () => {
  element.style.backgroundColor = "red";
});

element.addEventListener("mouseleave", () => {
  element.style.backgroundColor = "black";
});
