$(function () {
	$("#callback").validator().on("submit", function (event)
	{
		event.preventDefault();

		var name = $("#name").val();
		var email = $("#email").val();
		var tel = $("#tel").val();
		var message = $("#message").val();

		$.ajax({
			type: "POST",
			url: "send.php",
			data: "name=" + name + "&email=" + email + "&tel=" + tel + "&message=" + message,
			success: function (text)
			{
				var status = $('#modal-status');

				if (text == "success") {
					if (status.hasClass('modal-error')) {
						status.removeClass('modal-error')
					}

					$("#callback")[0].reset();
					$('#modal').modal('show');
					setTimeout(function ()
					{
						$("#modal").modal('hide');
					}, 2500);

				} else {
					if (!status.hasClass('modal-error')) {
						status.addClass('modal-error')
					}

					$('#modal').modal('show');
					setTimeout(function ()
					{
						$("#modal").modal('hide');
					}, 3500);
				}
			}
		});
	});
});

