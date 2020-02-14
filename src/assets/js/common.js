
function submit_toggle(select) {
	let input = jQuery(select.target).parent().find(':submit');
	if (0 < jQuery(select.target).val().length) {
		input.removeAttr('disabled');
	} else {
		input.attr('disabled', 'disabled');
	}
}

function ajax_submit_toggle(select, button_id) {
	let input = jQuery('#' + button_id);
	if (0 < jQuery(select.target).val().length) {
		input.removeAttr('disabled');
	} else {
		input.attr('disabled', 'disabled');
	}
}

function ajax_post(postUrl, button_id, group_id) {
	let input = jQuery('#' + button_id);
	let values = input.parent().parent().find('select').val();

	if (0 < values.length) {
		input.attr('disabled', 'disabled');
		jQuery.ajax({
			url: postUrl,
			data: {
				userId: values,
				groupId: group_id
			},
			method: 'POST'
		}).done(function (data) {
			input.removeAttr('disabled');
		});
	}

}


function processResults(data, params) {//unused
	params.page = params.page || 1;
	return {
		results: data.results,
		pagination: {
			more: 20 === data.results.length
		}
	};

}