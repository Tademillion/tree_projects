//  hey this is mastry of javascript with the html and css
//  all about dom amnipulations

// Select all elements with the class 'sidebar-content'
const elements = document.querySelectorAll(".sidebar-content");

// Loop through each element and add event listeners
elements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "red";
  });

  element.addEventListener("mouseleave", () => {
    element.style.backgroundColor = "black";
  });
});
//  increase the icon size when hover the icons
//  there are also several events like  mouseup and mousedown mousemove mouseover...
