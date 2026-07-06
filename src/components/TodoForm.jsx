import React, { useState, useEffect } from "react";

export default function TodoForm({ onAddTodo,editingTask,onEditTodo,setEditingTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [dueDate, setDueDate] = useState("");
    
    const handleSubmit =(e) => {
        e.preventDefault();
        const title = e.target.elements.title.value.trim();
        const description = e.target.elements.description.value.trim();
        const priority = e.target.elements.priority.value;
        const dueDate = e.target.elements.dueDate.value;
        
        if (editingTask) {
            onEditTodo(editingTask.id, { title, description, priority, dueDate });
            setEditingTask(null);
        }else {
            if (!title || !dueDate)  {
                alert("Please fill in a title and due date for the task.");
                return;
            }
            onAddTodo({ id: Date.now(), title, description, priority, dueDate, isCompleted: false });
        }
    }

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setPriority(editingTask.priority);
            setDueDate(editingTask.dueDate);
        }else {
            setTitle("");
            setDescription("");
            setPriority("");
            setDueDate("");
        }
    }, [editingTask]);

    return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5 shadow-md hover:shadow-lg transition-shadow rounded-xl bg-white border border-blue-300">
        <div className="bg-blue-950 -mx-5 -mt-5 mb-2 px-5 py-3 rounded-t-xl text-white text-lg font-semibold text-center">
            {editingTask ? "Edit Task" : "Add New Task"}
        </div>

        <label className="text-sm font-semibold text-slate-700">
            Title
            <input type="text" name="title" placeholder="Add a new task..." className="w-full border border-slate-300 rounded-lg bg-white text-slate-800 px-3 py-1 mt-1 outline-none focus:ring-2 focus:ring-blue-400" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label className="text-sm font-semibold text-slate-700">
            Description
            <textarea name="description" rows={2} className="w-full border border-slate-300 rounded-lg bg-white text-slate-800 px-3 py-1 mt-1 outline-none focus:ring-2 focus:ring-blue-400 resize-none" placeholder="Add a description..." value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label className="text-sm font-semibold text-slate-700">
            Priority
            <select name="priority" className="w-full border border-slate-300 rounded-lg bg-white text-slate-800 px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </label>

        <label className="text-sm font-semibold text-slate-700">
            Due Date
            <input type="date" name="dueDate" className="w-full border border-slate-300 rounded-lg bg-white text-slate-800 px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>

        <button type="submit" className="flex justify-center items-center w-36 mt-2 mx-32  bg-blue-950 font-semibold text-white rounded-lg py-2 hover:bg-blue-700 transition-colors">
            {editingTask ? "Update Task" : "Add Task"}
        </button>
    </form>
)
}