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
