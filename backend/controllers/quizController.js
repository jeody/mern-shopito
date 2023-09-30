const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Quiz = require('../models/quizModel');

// Add Questionaire
const addQuestionaire = asyncHandler(async (req, res) => {
  res.send('Add Questionaire!');
});

// Get All Questionaires
const getQuestionaire = asyncHandler(async (req, res) => {
  res.send('Get All Questionaires!');
});

module.exports = {
  addQuestionaire,
  getQuestionaire,
};
