import express from "express";
import Connection from "./database/db.js";
import Router from "./routes/routes.js"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use("/", Router)

const port = 8080

app.listen(port, ()=>{console.log(`server started at ${port}`)})

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD)