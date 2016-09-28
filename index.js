
$(document).ready(function(){

	gridsize=30

	for (var i = 1; i < gridsize; i++) {

		for (var j = 1; j < gridsize; j++) {
			$('#container').append('<div class="column'+i+' row'+j+'"></div>')
		};

		$('.column'+i).css({'margin-left': '4'*i})
	};
	for (var k = 1; k < gridsize; k++) {
		$('.row'+k).css('top', '4'*k+'px');
	};

	$('div>div').mouseenter(function(){
		$(this).css({'background-image': 'url("photo.jpg")'})
		$(this).css('z-index', 9999);
	});

	$('#newgrid').click(function(){
		gridsize=prompt('what grid size do you want?');

//this removes previous grid when button is clicked
	$('div>div').remove()
//this recreates grid according to new specifications
	for (var i = 1; i < gridsize; i++) {

		for (var j = 1; j < gridsize; j++) {
			$('#container').append('<div class="column'+i+' row'+j+'"></div>')
		};

		$('.column'+i).css({'margin-left': '4'*i})
	};
	for (var k = 1; k < gridsize; k++) {
		$('.row'+k).css('top', '4'*k+'px');
	};

	$('div>div').mouseenter(function(){
		$(this).css({'background-image': 'url("photo.jpg")'})
		$(this).css('z-index', 9999);
	});
});

});