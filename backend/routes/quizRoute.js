const express = require('express');
const router = express.Router();
const {
  addQuestionaire,
  getQuestionaire,
} = require('../controllers/quizController');
const { protect } = require('../middleware/authMiddleware');

router.post('/addquestionaire', addQuestionaire);
router.post('/getquestionaire', getQuestionaire);

module.exports = router;
