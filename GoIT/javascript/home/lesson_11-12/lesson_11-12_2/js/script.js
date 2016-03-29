$(function() {
	var html = $('#test').html();
	var dataContent = [{
		name: 'Прокопенко Юлия Анатольевна',
		url: 'img/img.jpg',
		job: 'consectetur adipisicing elit',
		reasons: 'Хочу учить фронтенд, потому что:'
	},
	{
		items: [{
				item: 'Lorem ipsum 1'
			},
			{
				item: 'Lorem ipsum 2'
			},
			{
				item: 'Lorem ipsum 3'
			}]
	},
	{
		tel: 'Мой контактный телефон',
		number: '+3806600066',
		fb: 'Мой профиль в фейсбуке',
		fb_link: 'https://www.facebook.com/yulia.vysogurska',
		text: 'facebook.com',
		feedback: 'Мой фидбек:',
		feedback_text: 'Lorem ipsum dolor'
	}];

	console.log(dataContent);

	var content = tmpl(html, {data: dataContent});
	$('body').append(content);
});