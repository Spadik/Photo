$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Мы в ближайшее время свяжемся с вами.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});