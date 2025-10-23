import { Student } from "../models/studentModel.js";

export const createStudent = async (req, res) => {
  const { firstname, lastname, age, seat, engineer, hop } = req.body;
  try {
    const result = await Student.create({
      firstname: firstname,
      lastname: lastname,
      age: age,
      seat: seat,
      hop: hop,
      engineer: engineer,
    });
    res.send({ message: "Added successfully" });
  } catch (error) {
    console.error("error", error);
  }
};

export const getStudents = async (req, res) => {
  try {
    const result = await Student.find();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const get3Dstudents = async (req, res) => {
  const { angi } = req.query;
  try {

    const result = await Student.find();
    res.send({ message: "3d students" });
  } catch (error) {
    console.error(error);
  }
};

export const getStudentsById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Student.findById(id);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const updateStudent = req.body;
    const result = await Student.findByIdAndUpdate(id, updateStudent);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const updateStudentById = async (req, res) => {
  try {
    const result = await Student.findByIdAndUpdate();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Student.findByIdAndDelete(id);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
