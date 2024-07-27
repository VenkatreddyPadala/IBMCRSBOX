const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const path = require("path");

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@jobportal.1cyrdz1.mongodb.net/Portal`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  number: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
  const { number, password } = req.body;
  try {
    const loggedInUser = await User.findOne({ number: number });

    if (loggedInUser) {
      const passwordMatch = await bcrypt.compare(password, loggedInUser.password);

      if (passwordMatch) {
        // Regular user login
        req.session.userLoggedIn = true;
        req.session.userNumber = number;
        return res.redirect("/home"); // Redirect to /home
      }
    }

    // If no conditions matched, send an error message
    res.send("Invalid phone number or password. Please try again. <a href='/'>Go back</a>");
  } catch (err) {
    console.error("Error during login:", err.message);
    res.send("An unexpected error occurred. Please try again later. <a href='/'>Go back</a>");
  }
});

app.post("/signup", async (req, res) => {
  const { firstName, lastName, number, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      number,
      password: hashedPassword,
    });

    await newUser.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error during registration:", err.message);
    res.send("An error occurred during registration. Please try again later. <a href='/'>Go back</a>");
  }
});

app.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/");
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "loginpage.html"));
});

app.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "loginpage.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "loginpage.html"));
});
app.get("/home", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "home.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/success", (req, res) => {
  if (req.session.userLoggedIn) {
    res.redirect("/home"); // Redirect to /home
  } else {
    res.redirect("/");
  }
});
app.get("/contact", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "contact.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/about-us", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "about.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/employee", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "employee.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/blog", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "blog.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/candidate", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "candidate.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/job-apply", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "jobapply.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/job-grid", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "jobgrid.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/job-details", (req, res) => {
  if (req.session.userLoggedIn) {
    res.sendFile(path.join(__dirname, "public", "jobdetails.html")); // Serve home.html
  } else {
    res.redirect("/");
  }
});
app.get("/profile", async (req, res) => {
  if (req.session.userLoggedIn) {
    try {
      console.log("Fetching profile for user number:", req.session.userNumber); // Logging user number
      const user = await User.findOne({ number: req.session.userNumber });

      if (user) {
        console.log("User found:", user); // Logging user data
        res.render("profile", { user });
      } else {
        console.log("User not found for number:", req.session.userNumber); // Logging not found case
        res.send("User not found. <a href='/'>Go back</a>");
      }
    } catch (err) {
      console.error("Error fetching user profile:", err.message); // Logging error
      res.send("An unexpected error occurred. Please try again later. <a href='/'>Go back</a>");
    }
  } else {
    res.redirect("/");
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
