const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./reaction');
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema
    ],

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
const Thought = model('thought', thoughtsSchema);
module.exports = Thought;