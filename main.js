const displayedimg = document.querySelector('.displayed-img');
const thumbbar = document.querySelector('.thumb-bar');
const btn = document.querySelector("#img").style.transform = 'rotate(${rotation}deg)';



/* Looping through images */

for (let i = 0; i < 5; i++) {


  const newImage = document.createElement('img');
  newImage.setAttribute('src','images/pic' + i + '.png' );
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
  displayedImage.src = e.target.src;
  }
 }




for(var i = 1; i < 6; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', function(e){
	var imgSrc = e.target.getAttribute('src');
	displayedImage.setAttribute('src', imgSrc);
});












btn.onclick = function() {
const btnClass = btn.getAttribute('class');
if(btnClass==='dark') {
btn.setAttribute('class','lgiht');
btn.textcontent = 'lighten';
overlay.style.backgroundcolor = 'rgba(5,5,5,10)';
}else {
btn.setAttribute('class','dark');
btn.textcontent = 'darken';
overlay.style.backgroundcolor = 'rgba (0,0,0,0.5)';
}
}
