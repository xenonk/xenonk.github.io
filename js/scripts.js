$(function () {
	$("#callback").validator().on("submit", function (event)
	{
		event.preventDefault();

		var name = $("#name").val();
		var email = $("#email").val();
		var email = $("#tel").val();
		var message = $("#message").val();

		$.ajax({
			type: "POST",
			url: "send.php",
			data: "name=" + name + "&email=" + email + "&tel=" + tel + "&message=" + message,
			success: function (text)
			{
				if (text == "success") {
					$("#callback")[0].reset();
					$('#modal').modal('show');
					setTimeout(function ()
					{
						$("#modal").modal('hide');
					}, 2500);
				} else {
				}
			}
		});
	});
});

