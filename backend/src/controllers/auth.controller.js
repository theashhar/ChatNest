import { decrypt } from "dotenv";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All Fields Required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // Generate JWT token
      generateToken(newUser._id, res);
      await newUser.save();

      return res.status(201).json({
        _id: newUser._id,
        email: newUser.email,
        fullName: newUser.fullName,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.error("Error in Signup Controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All Fields are Necessary" });
    }
    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      return res.status(400).json({ message: "Invalid Credential!" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      currentUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credential!" });
    }

    generateToken(currentUser._id, res);

    res.status(200).json({
      _id: currentUser._id,
      email: currentUser.email,
      fullName: currentUser.fullName,
      profilePic: currentUser.profilePic,
    });
  } catch (err) {
    console.log("error in login controller: ", err.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwtAuth", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout Successful!" });
  } catch (err) {
    console.log("error in logout controller: ", err.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
