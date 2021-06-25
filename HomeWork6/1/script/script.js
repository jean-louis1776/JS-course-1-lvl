function fullPic(id) {
   var p = document.getElementById(id);
   var n = p.src.replace('small', 'big');
   console.log(n);

   var f = document.getElementById('full');
   f.src = n;
}

function lostPic() {
   alert('Такой картинки не существует');
}