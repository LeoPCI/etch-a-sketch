
$(document).ready(function(){

	gridsize=prompt('what grid size do you want?')

	for (var i = 1; i < gridsize; i++) {

		for (var j = 1; j < gridsize; j++) {
			$('#container').append('<div class="column'+i+' row'+j+'"></div>')
		};

		$('.column'+i).css({'margin-left': '4'*i})
	};
	for (var k = 1; k < gridsize; k++) {
		$('.row'+k).css('top', '4'*k+'px');
	};

	$('div').mouseenter(function(){
		$(this).css({'background-color': 'orange'})
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

	$('div').mouseenter(function(){
		$(this).css({'background-color': 'orange'})
	});
});

});