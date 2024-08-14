const Project = require("../models/Project.model")
const Task = require("../models/Task.model")

const router = require("express").Router()

router.post('/', (req, res) => {

  const { title, description, projectId } = req.body

  Task
    .create({ title, description, project: projectId })
    .then((newTask) => {
      return Project.findByIdAndUpdate(projectId, { $push: { tasks: newTask._id } }, { new: true })
    })
    .then(editedProject => res.json(editedProject))
    .catch((err) => res.status(500).json({ code: 500, message: "Error while creating task", details: err }))
})

module.exports = router