const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "invalid email"]
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
   
friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema .virtual ("friendCount").get(function(){
    return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;