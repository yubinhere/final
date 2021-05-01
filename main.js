const displayedimg = document.querySelector('.displayed-img');
const thumbbar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



for (let i = 0; i < 5; i++) {


  const newImage = document.createElement('img');
  newImage.setAttribute('src','images/pic' + i + '.jpg' );
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
  displayedImage.src = e.target.src;
  }
 }















btn.onclick = function() {
const btnClass = btn.getAttribute('class');
if(btnClass==='dark') {
btn.setAttribute('class','lgiht');
btn.textcontent = 'lighten';
overlay.style.backgroundcolor = 'rgba(0, 0, 0, 5)';
}else {
btn.setAttribute('class','dark');
btn.textcontent = 'darken';
overlay.style.backgroundcolor = 'rgba (0,0,0,0.5)';
}
}
