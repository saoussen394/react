
import React from 'react';


function LandingPage() {

	var images = ['../assets/images/image.jpg',
  '../assets/images/image1.jpg',
  '../assets/images/image2.jpg',
  '../assets/images/image3.jpg',
  '../assets/images/image4.jpg',
  '../assets/images/image5.jpg'
];

var img = document.getElementById("img");

function displayImage(x) {
  img.style.backgroundImage = "url(" + images[x] + ")";
  img.innerText = images[x];
}
function startTimer() {
  var x = 0;
  displayImage(x);
  setInterval(function() {
    x = x + 1 >= images.length ? 0 : x + 1;
    displayImage(x);
  }, 3000);
}
	return (
		<div>
	
<div onLoad={startTimer()}>
  <div id="img" className='landingpage'></div>
</div>
    </div> 
	)
}

export default LandingPage;
