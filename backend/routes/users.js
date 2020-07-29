// This files contains all the routing for a user
const router = require("express").Router();

let User = require("../models/user.model");

// Searching for a user
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add a new user

router.route("/add").post((req, res) => {
  //   const { email, password } = req.body;
  //   // Checks if user exist, if not - adds
  //   function registerSuccess(result) {
  //     res.json("User added!");
  //   }
  //   function registerFailure(error) {
  //     res.status(400).json("Email already in use: " + error);
  //   }
  //   const newUser = new User({ email, hashedPassword });
  //   newUser.save().then(registerSuccess, registerFailure);
});

module.exports = router;
