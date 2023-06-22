import "dotenv/config"
import express from 'express';
import routes  from './routes'
import connectDB from "./db/connect";

const app = express()
connectDB()
const PORT = process.env.PORT || 4000

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)

})