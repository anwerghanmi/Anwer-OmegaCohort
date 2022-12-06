const express = require("express")
const app = express()
const cors = require ("cors")
const PORT = 8000
const DB_NAME = "notes"

// miidleware
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

// connect to database
require("./config/notes.config")(DB_NAME)


// import the route
require("./routes/notes.routes")(app)



app.listen(PORT, () =>{ console.log(`your server is running on prot ${PORT}`);})
