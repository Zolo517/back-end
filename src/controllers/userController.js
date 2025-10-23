import { User } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const result = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(result);
    res.send(result, "success");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await User.find();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const result = await User.findById(id);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedInfo = req.body;
    const result = await User.findByIdAndUpdate(id, updatedInfo);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedInfo = req.body;

    const result = await User.findByIdAndUpdate(id, {});
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
