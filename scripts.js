 /* Changing Raspberry Header to a bigger font.. Got help from demos and GeeksforGeeks.org */ 

var h1 = document.getElementById('h1');


 h1.setFont = function(font) {
   var size = this.offsetWidth,
     font_size = size * font;
   this.style.fontSize = font_size + '%';
   return this
 };

 h1.setFont('.50');

 window.onresize = function() {
   h1.setFont('.50');
 }
 

 
 