import express from "express";
const router = express.Router();

// Mock users database
const users = [
  {
    firstName: "Dwayne",
    lastName: "Johnson",
    age: 24
  },
  {
    firstName: "Philip",
    lastName: "Philips",
    age: 34
  },
]

// All the routes will start with '/users' (as seen in the index.js file), so we just need to route to '/'
// Get our users
router.get('/', (req, res) => {
  res.send(users)
});

// Add new users to mock database using post request
router.post('/', (req, res) => {
  const user = req.body;

  // Push the users into the mock database
  users.push(user);

  res.send(`${user.firstName} ${user.lastName} was added to the mock databse.`);
})

export default router;
