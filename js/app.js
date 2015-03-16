$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1500px'},
			500,
			function() {
			$(this).hide();
			$(this).css('left', '-128px');
		});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
 	});

	$('body').on("keydown", function(x) {
		if(x.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	.on("keyup", function(x) {
		if(x.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();			
		}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}