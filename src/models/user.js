import { Schema, model } from "mongoose";

const userSchemas = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
export const User = model("User", userSchemas);
