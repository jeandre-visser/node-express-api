import express from "express";
const router = express.Router();

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
router.get('/', (req, res) => {
  console.log(users)
  res.send(users)
})

export default router;
