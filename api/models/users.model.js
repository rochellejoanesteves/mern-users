import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true
    },
    lastName: {
      type: String,
      required: true,
      unique: true
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", usersSchema);

export default Users;
