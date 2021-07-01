var picArray = ['1.jpg', '2.jpg', '3.jpg'];
var current = 0;

function nextPic(id) {
   var img = document.getElementById(id);
   if (current == 2) {
      current = 0;
   }
   else {
      current++;
   }
   img.src = 'img\\small/' + picArray[current];
}

function prevPic(id) {
   var img = document.getElementById(id);
   if (current == 0) {
      current = picArray.length - 1;
   }
   else {
      current--;
   }
   img.src = 'img\\small/' + picArray[current];
}