 /* Changing Raspberry Header to a bigger font.. Got help from demos and GeeksforGeeks.org */

 var h1 = document.getElementById('h1');




 h1.setFont = function(font) {
   var size = this.offsetWidth,
     font_size = size * font;
   this.style.fontSize = font_size + '%';
   return this
 };

 h1.setFont('.50');

 window.onload = function() {
   h1.setFont('.50')
 };

 /* change font color using click function on h1 to green */


 function myFunction() {
   document.getElementById("h1").style.color = "green";
 }


 /* dissapearing lists */
a = document.querySelector("div#column1");
a.onclick = function () {
  a.classList.toggle("iClicked");
};

/* this way works, overcomplexed it the first time */

b = document.querySelector("div#column2");
b.onclick = function () {
  b.classList.toggle("eClicked");
};

c = document.querySelector("div#column3");
c.onclick = function () {
  c.classList.toggle("dClicked");
};

/* Last prompt then done */


 h = document.getElementById("headache");
h.innerHTML = "I am not going to procastinate anymore.";



