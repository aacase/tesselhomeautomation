// $("button").on("click", function() {
//   var el = $(this);
//   if (el.text() == el.data("text-swap")) {
//     el.text(el.data("text-original"));
//   } else {
//     el.data("text-original", el.text());
//     el.text(el.data("text-swap"));
//   }
// });

// $("fuck").on("click", function() {
//   var el = $(this);
//   el.text() == el.data("text-swap") 
//     ? el.text(el.data("text-original")) 
//     : el.text(el.data("text-swap"));
// });
var button = document.getElementById("buttonswap");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);