
$(document).ready(function() {
	$(".add-item").on("click", function() {	
		$(".content").append
		('<div class="content-item"><img src="food1-jpg.png" alt="" /><button class="btn-remove">remove</button></div>');
		
		$(".content-item button").on("click", function() {
			$(this).parent().remove();
			console.log(true);
		});
	});
});
