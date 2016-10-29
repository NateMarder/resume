$(document).ready(function () {

	rain = $('.sky__rain');
	sky = $('.js-object-sky');

	$(document).keypress(function (event) {

		switch (event.charCode) {

			case 114:
				startRain();
				startRain('middle');
				startRain('back');
				break;
			case 115:
				stopRain();
				stopRain('middle');
				stopRain('back');
				break;
			default:
				alert("wrong key " + event.charCode);
		}
	});

});



function startRain(plane) {

	rain.addClass("rain-color");
	plane = plane || '';
	setInterval(function () {
		var $rainDrop = $('<div class="sky__rain rain"></div>');
		$rainDrop.addClass("rain-color");
		if (plane) {
			$rainDrop.addClass('rain--' + plane);
		}
		sky.append($rainDrop);

		$rainDrop.css('left', Math.floor(Math.random() * 100) + '%');

		setTimeout(function () {
			$rainDrop.remove();
		}, 3000);
	}, 25);
}


function stopRain() {

	// <div class="sky sky--is-raining js-object-sky">
	// 	<div class="sky__rain rain"></div>
	// 	<div class="sky__rain rain rain--middle " style="left:100px; "></div>

	setInterval(function () {
		//var $rainDropFront = $('.rain');
		sky.remove(rain);

	}, 25);
}




// (function() {
//   function randomRainDropLocation() {
//     return Math.floor(Math.random() * 100);  
//   }

//   function startRain(plane) {
//     plane = plane || '';

//     setInterval(function(){
//       var $rainDrop = $('<div class="sky__rain rain"></div>');

//       if(plane) {
//         $rainDrop.addClass('rain--' + plane);
//       }

//       $sky.append($rainDrop);
//       $rainDrop.css('left', randomRainDropLocation() + '%');
//       setTimeout(function(){
//         $rainDrop.remove();
//       }, 3000)
//     }, 25);
//   }

//   var $sky = $('.js-object-sky');
//   return {
//     init: function init() {
//       startRain();
//       startRain('middle');
//       startRain('back');
//     }
//   }
// }()).init();