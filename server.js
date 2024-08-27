const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Basic route to test server
app.get("/", (req, res) => {
  res.send("Welcome to Little Italy!")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
