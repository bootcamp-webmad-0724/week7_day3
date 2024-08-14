require("dotenv").config()

require("./db")

const express = require("express")
const app = express()

require("./config")(app)



const projectsRouter = require("./routes/projects.routes")
app.use("/api/projects", projectsRouter)

const tasksRouter = require("./routes/tasks.routes")
app.use("/api/tasks", tasksRouter)



require("./error-handling")(app)

module.exports = app