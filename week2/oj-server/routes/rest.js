const expres = require('express');
const router = express.Router();

const problemService = require('../services/problemService');

router.get('/problems', (req, res) => {
	problemService.getProblems()
		.then(problems => res.json(problems));
});

module.exports = router;