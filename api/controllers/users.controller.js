import Users from "../models/users.model.js";
import bcryptjs from "bcryptjs";

export const createUser = async (req, res, next) => {
  const { firstName, lastName, emailAddress, role, password } = req.body;

  const hashedPassword = await bcryptjs.hashSync(password, 12);

  try {
    const createUser = await Users.create({
      firstName,
      lastName,
      emailAddress,
      role,
      password: hashedPassword,
    });

    console.log(createUser);
    return res.status(201).json(createUser);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await Users.find({});
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const user = await Users.findById(req.params.id);

  if (!user) return next(errorHandler(404, "User not found!"));

  try {
    const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const user = await Users.findById(req.params.id);

  if (!user) {
    return next(errorHandler(404, "User is not found"));
  }

  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};
