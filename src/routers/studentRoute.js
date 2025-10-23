import { Router } from "express";
import {
  createStudent,
  deleteStudentById,
  get3Dstudents,
  getStudents,
  getStudentsById,
  updateStudent,
  updateStudentById,
} from "../controllers/studentController.js";

export const StudentsRouter = Router();

StudentsRouter.post("/", createStudent)
  .get("/", get3Dstudents)
  // .get("/", getStudents)
  // .get("/", getStudentsById)
  .put("/:id", updateStudent)
  .patch("/:id", updateStudentById)
  .delete("/:id", deleteStudentById);
