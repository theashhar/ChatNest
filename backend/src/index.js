// const express = require("express")
import express from "express"
import authRoutes from "./routes/auth.route.js"

const app = express()
app.use(express.json())


app.use("/api/auth", authRoutes)
app.listen(5001, () => {
    console.log("Server Running on 5001!")
})