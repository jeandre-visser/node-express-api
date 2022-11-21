import express from "express";
const router = express.Router();

// All the routes will start with '/users' (as seen in the index.js file), so we just need to route to '/'
router.get('/', (req, res) => {
  res.send("HELLO from first route")
})

export default router;
