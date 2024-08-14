const mongoose = require('mongoose')
const { Schema, model } = mongoose

const projectSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
},
    {
        timestamps: true
    }
)

const Project = model('Project', projectSchema)

module.exports = Project