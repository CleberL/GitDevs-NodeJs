import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    location: {
      type: String,
    },
    email: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);
