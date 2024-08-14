const router = require("express").Router()

const Project = require("../models/Project.model")


router.post("/", (req, res) => {

  const { title, description } = req.body

  Project
    .create({ title, description, tasks: [] })
    .then((newProject) => res.json(newProject))
    .catch((err) => res.status(500).json({ code: 500, message: "Error while creating the project", details: err }))
})


router.get("/", (req, res) => {

  Project
    .find()
    .populate('tasks')
    .then((projects) => res.json(projects))
    .catch((err) => res.status(500).json({ code: 500, message: "Error while fetching projects", details: err }))
})


router.get("/:id", (req, res) => {

  const { id: projectId } = req.params

  Project
    .findById(projectId)
    .populate('tasks')
    .then((project) => res.json(project))
    .catch((err) => res.status(500).json({ code: 500, message: "Error while fetching project", details: err }))
})


router.put("/:id", (req, res) => {

  const { id: projectId } = req.params
  const { title, description } = req.body

  Project
    .findByIdAndUpdate(projectId, { title, description }, { new: true })
    .then((project) => res.json(project))
    .catch((err) => res.status(500).json({ code: 500, message: "Error while editing project", details: err }))
})


router.delete("/:id", (req, res) => {

  const { id: projectId } = req.params

  Project
    .findByIdAndDelete(projectId)
    .then((project) => res.json(project))
    .catch((err) => res.status(500).json({ code: 500, message: "Error while deleting project", details: err }))
})


module.exports = router