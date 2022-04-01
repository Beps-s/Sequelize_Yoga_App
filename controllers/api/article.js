// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:Qwerty123!@localhost:3306/joga_sequelize');

// read model data for table representation
const models = require('../../models')

// show article by this slug
const getArticleBySlug = (req, res) => {
	let queryElement = Object.keys(req.query)
	if(Object.keys(req.query).length === 0){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if(req.query.q === ''){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else {
		models.Article.findOne({
		where: {
			slug: req.query.q
		},
		include: [{
			model:models.Authors
		},
		{
			model: models.Tags,
			through: {
				model: models.ArticleTag
			}
		}
		],
	})
	.then(article => {
		return res.status(200).json({ article });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
  }
};

// export controller functions
module.exports = {
	getArticleBySlug
}