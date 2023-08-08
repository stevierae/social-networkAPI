const { Schema, Types } = require('mongoose');
const reactionSchema = require('./ReactionSchema');
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
const Thought = model('thought', thoughtsSchemaSchema);
module.exports = thoughtsSchema;