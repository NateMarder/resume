$(document).ready(function () {

	rain = $('.sky__rain');
	sky = $('.js-object-sky');
	startRain();

	$(document).keypress(function (event) {
		switch (event.charCode) {

			// "r"
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


	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		var $foo = sky;
		$foo.on('mousedown touchstart', handleEventStart);
		$foo.on('mousemove touchmove', handleEventMove);
		$foo.on('mouseup touchend touchcancel', handleEventEnd);
	}

	function handleEventStart(e) {
		location.reload();
	}

	function handleEventMove(e) {
		location.reload();
	}

	function handleEventEnd(e) {
		location.reload();
	}



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