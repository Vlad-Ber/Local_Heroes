// require("dotenv/config");

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const MongoClient = require("mongodb").MongoClient;

// const cookieParser = require("cookie-parser");
// const { verify } = require("jsonwebtoken");
// const { hash, compare } = require("bcryptjs");
// const {
//   createAccessToken,
//   createRefreshToken,
//   sendAccessToken,
//   sendRefreshToken,
// } = require("./tokens.js");

// const { fakeDB } = require("./fakeDB.js");
// const { isAuth } = require("./isAuth.js");
// // Register user
// // Login user
// // Logout user
// // setup protected route
// // Get a new accesstoken with a refresh token

// // Setting up the Server
// const server = express();
// // use express middleware for easier cookie handling
// server.use(cookieParser());

// server.use(
//   cors({
//     origin: "http://localhost:5000",
//     credentials: true,
//   })
// );

// // Needed to be able to read body data
// server.use(express.json()); // to support JSON-encoded bodies
// server.use(express.urlencoded({ extended: true })); // support URL-encoded bodies

// // Connecting to the database (MongoDB)
// const uri = process.env.ATLAS_URI;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// client.connect((err) => {
//   console.log("MongoDB database conneciton establised successfully! - gamla");

//   // This is the register endpoint!

//   // 1. register a new user
//   server.post("/register", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       // Check if user exist!
//       const user = fakeDB.find((user) => user.email === email);
//       if (user) throw new Error("User already exists!");
//       // If not, create new user
//       const hashedPassword = await hash(password, 10);
//       // Insert user in DB
//       fakeDB.push({
//         id: fakeDB.length,
//         email,
//         password: hashedPassword,
//       });
//       res.send({ message: "User Created!" });
//       console.log(fakeDB);
//     } catch (err) {
//       res.send({
//         error: `${err.message}`,
//       });
//     }
//   });

//   //2. Login a user
//   server.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//       // Find user in DB, if the user don't exist - send error
//       const user = fakeDB.find((user) => user.email === email);
//       if (!user) throw new Error("User doesn't exist!");
//       // Compare crypted password and see if it checks out, error if not
//       const valid = await compare(password, user.password);
//       if (!valid) throw new Error("Password incorrect!");
//       // If correct, create refresh- and accesstoken
//       const accesstoken = createAccessToken(user.id);
//       const refreshtoken = createRefreshToken(user.id);
//       // put the refreshtoken in the DB
//       user.refreshtoken = refreshtoken;
//       console.log(fakeDB);
//       // send token, refresh as cookie and access as response
//       sendRefreshToken(res, refreshtoken);
//       sendAccessToken(res, req, accesstoken);
//     } catch (err) {
//       res.send({
//         error: `${err.message}`,
//       });
//     }
//   });

//   // Logout the user
//   server.post("/logout", (_req, res) => {
//     res.clearCookie("refreshtoken");
//     return res.send({
//       message: "Logged out",
//     });
//   });

//   // Protected route -TEST
//   server.post("/protected", async (req, res) => {
//     try {
//       const userID = isAuth(req);
//       if (userID !== null) {
//         res.send({
//           data: "This is protected data",
//         });
//       }
//     } catch (err) {
//       res.send({
//         error: `${err.message}`,
//       });
//     }
//   });

//   // Get a new access token with a refresh token
//   server.post("/refresh_token", (req, res) => {
//     const token = req.cookies.refreshtoken;
//     // If we don't have a token in our request
//     if (!token) return res.send({});
//   });
// });

// server.listen(process.env.PORT, () =>
//   console.log(`Server listening to ${process.env.PORT}`)
// );

// // // using the models and routes established
// // //const errandsRouter = require("./routes/errands");
// // const userRouter = require("./routes/users");

// // //server.use("/errands", errandsRouter);
// // server.use("/users", userRouter);
