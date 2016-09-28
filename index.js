$(document).ready(function(){
	for (var i = 1; i < 17; i++) {
		for (var j = 1; j < 17; j++) {
			$('#container').append('<div id=square'+j+i+'></div>')
		};
	};
});