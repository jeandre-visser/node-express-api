import express from "express";
import { createUser, getAllUsers, getUser, removeUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// All the routes will start with '/users' (as seen in the index.js file), so we just need to route to '/'
// Get all users
router.get('/', getAllUsers);

// Add new users to mock database using post request
router.post('/', createUser);

// Get a specific user by id
router.get('/:id', getUser);

// Delete a specific user
router.delete('/:id', removeUser);

// Update a parameter(s) of a specific user
router.patch('/:id', updateUser);

// Export router to use in index.js
export default router;
