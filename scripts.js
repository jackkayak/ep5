 /* Changing Raspberry Header to a bigger font.. Got help from demos and GeeksforGeeks.org */

 var h1 = document.getElementById('h1');




 h1.setFont = function(font) {
   var size = this.offsetWidth,
     font_size = size * font;
   this.style.fontSize = font_size + '%';
   return this
 };

 h1.setFont('.50');

 window.onSize = function() {
   h1.setFont('.50')
 };

 /* change font color using click function on h1 to green */


 function myFunction() {
   document.getElementById("h1").style.color = "green";
 }


 /* dissapearing lists */
window.onload = function() {
document.getElementById("btn").addEventListener("click", function(){
  document.getElementById('list1').classList.toggle('disappear');
})
};


