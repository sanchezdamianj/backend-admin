import "dotenv/config"
import express from 'express';
import routes  from './routes'
import connectDB from "./db/connect";
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()
connectDB()
const PORT = process.env.PORT || 4000

const whitelist = [
    'http://localhost:4000',
    'http://127.0.0.1',
    'http://localhost:3000',
    'https://mail.google.com',
    'https://mail.google.com/mail/u/2/#inbox'
]

const options = {
    origin: process.env.FE_URL,
    whitelist:whitelist,
    methods: ["POST", "PUT", "DELETE", "GET", "OPTIONS"],
    credentials: true
}

app.use(cookieParser())

app.use(express.json())

app.use(cors(options))

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)

})