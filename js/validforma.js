$('#myform').validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		},

		email: {
			required: true,
			email: true
		},

		number: {
			required: true,
			number: true,
			minlength: 10
		}

	},

	messages: {
		name: {
			required: 'Нужно ввести имя'
		},

		email: {
			required: 'Нужен ваш email'
		},

		number: {
			required: 'Нужен телефон',
			minlength: 'Введите действительный номер'
		}
	}

});