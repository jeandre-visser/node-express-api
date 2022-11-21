import express from "express";
const router = express.Router();

// Path to /users
router.get('/users', (req, res) => {
  res.send("HELLO from first route")
})

export default router;
