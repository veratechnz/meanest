// Get Home Page

module.exports.about = function (req, res) {
	res.render('generic-text', { title: 'About' });
};