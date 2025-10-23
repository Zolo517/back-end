import { Schema, model } from "mongoose";

const studentSchemas = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: String, required: true },
  hop: { type: Boolean, required: true },
  engineer: { type: String, required: true },
  seat: { type: String, required: true },
});

export const Student = model("student", studentSchemas);
