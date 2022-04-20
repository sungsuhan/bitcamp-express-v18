import dotenv from 'dotenv'
import mongoose from 'mongoose'
//import UserModel from './user.model.js'
//import TodoModel from './todo.model.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.user = UserModel(mongoose)
db.todo = TodoModel(mongoose)

module.exports = db