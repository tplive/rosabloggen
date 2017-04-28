var posts = [];
posts.push({
	title: 'Første post i bloggen',
	date: '27.04.2017',
	slug: 'forste-post-i-bloggen',
	body: 'Dette er den aller første blogposten. Det føles veldig tilfredsstillende å lage sin egen blog helt fra scratch'
});

posts.push({
	title: 'Enda en post',
	date: '27.04.2017',
	slug: 'enda-en-post',
	body: 'Vi må nesten ha noen flere poster, ellers blir det kjedelig..'
});

exports.list = function(req, res) {
	res.render('posts', {
		title: 'Bloggposter',
		posts: posts
	});
};