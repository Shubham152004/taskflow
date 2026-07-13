import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },description:{
        type:String,
        default:""
    },priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
},dueDate: {
    type: Date
},isCompleted: {
    type: Boolean,
    default: false
},user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
}},{timestamps:true
});

const Task =mongoose.model("Task",taskSchema);

export default Task;