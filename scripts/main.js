$(document).ready(function () {

	rain = $('.sky__rain');
	sky = $('.js-object-sky');

	$(document).keypress(function (event) {
		switch (event.charCode) {
			// case 114:
			// 	bringTheRain()
			// 	break;
			case 115:
				location.reload();
				break;
			default:
				console.log("keypress");
		}
	});


	setTimeout(function () {
		startRain();
	}, 3000);

});

function bringTheRain() {
	startRain();
	startRain('middle');
	startRain('back');
}



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
	clearInterval(rainInterval);
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