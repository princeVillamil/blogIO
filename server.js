// CRUD = GET POST - fetch = Updtate delete
const express = require('express')
// Access express module
const app = express()
// Sets app = express
const mongoose = require('mongoose')
// Help us talk to mango db
const passport = require('passport')
// Enable us to use differenet types of stratigeis for different login
const session = require("express-session")
// Need to make sure user stay loged in when traversing app
const MongoStore = require('connect-mongo')(session) // require('connect-mongo') returns a function and (session) is the argument
// Store session in mangoDB || Keeps you loged in when leavinge the app
const methodOverride = require('method-override')
// Allows clients to make Puts and Deletes without using fetch
const flash = require('express-flash')
// Flash helps show notification like someone has the same email or wrong passowrd
const logger = require('morgan')
// Logger shows routs and calls being made
const connectDB = require('./config/database')
// Connect to DB

// Routes
const mainRoutes = require('./routes/mainRoutes')
const postRoutes = require('./routes/postsRoutes')



//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport) //require("./config/passport") is returing a function and (passport) is just simply the argument/param

// Connect to database
connectDB()

app.set("view engine", "ejs")

// Static folder 
app.use(express.static('public'))

// Body parsing, when making a request
// this breaks down the body of said request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger("dev"))

// This tells the server that if any request has "_method" 
// in its query paramater it should override it
// because fetch api is a webAPI
app.use(methodOverride("_method"))

// Setup sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
// Helps with authenticaiton
app.use(passport.initialize())
// Tells passport that users will stay signed in
app.use(passport.session())

// Flash messages for errors, info, ect
app.use(flash())

// Routes
app.use('/', mainRoutes)
app.use('/post', postRoutes)




app.listen(process.env.PORT, ()=>{
  console.log('Server is running')
})



