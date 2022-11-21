import { v4 as uuidv4 } from 'uuid';

// Mock users database
// Use 'let' since users array can change
let users = [];

export const getAllUsers = (req, res) => {
  res.send(users)
};

export const getUser = (req, res) => {
  // Use destruction to get the id from req.params
  const { id } = req.params;

  // Send all the other data (name and age) associated with the specific user id in the url
  const userFound = users.find((user) => user.id === id)
  res.send(userFound)
};

export const createUser = (req, res) => {
  const user = req.body;

  // Assign unique ID to user
  const userId = uuidv4();  

  // Add all properties of user (firstName, lastName, age) using spread operator, and then add id as another property
  const userWithId = { ...user, id: userId };

  // Push the users into the mock database
  users.push(userWithId);

  res.send(`${user.firstName} ${user.lastName} was added to the mock database.`);
};

export const removeUser = (req, res) => {
  const { id } = req.params;

  // Filter out user with id we want to delete
  users = users.filter((user) => user.id !== id); 

  // Send confirmation of user being removed
  res.send(`User with id ${id} was removed from the database.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  // Get the req.body parameters
  const { firstName, lastName, age } = req.body;
  
  // Find user we want to update
  const user = users.find((user) => user.id === id);

  // Update the paramater we want to update
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with id ${id} has been updated successfully.`)
};
