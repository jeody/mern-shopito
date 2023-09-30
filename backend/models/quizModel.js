const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const quizSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answers: {
      type: Object,
      // text, correct
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
