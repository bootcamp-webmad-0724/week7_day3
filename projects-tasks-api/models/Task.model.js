const mongoose = require('mongoose')
const { Schema, model } = mongoose

const taskSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }
},
  {
    timestamps: true
  }
)

const Task = model('Task', taskSchema)

module.exports = Task