import { v4 as uuidv4 } from "uuid";
let users = [];
export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`user updated successfully ${user.firstName}`);
};
export const getUSers = (req, res) => {
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const userToDelete = users.filter((user) => user.id !== id);
  res.send(userToDelete);
};

export const patchUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send("User updated successfully");
};

export const userDetail = (req, res) => {
  const { id } = req.params;
  const userIdFound = users.find((user) => user.id === id);
  res.send(userIdFound);
};
