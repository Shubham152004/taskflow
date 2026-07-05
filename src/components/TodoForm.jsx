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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 m-4 p-4 border rounded-lg bg-gray-100">
            <div className=" flex bg-black text-white text-lg font-calibri justify-center font-semibold mb-2">Add a New Task</div>
            <div className="text-sm font-bold">Title:<input type="text" name="title" placeholder="Add a new task..." className="flex-1 border px-4 py-2 m-2 outline-none" value={title} onChange={(e) => setTitle(e.target.value)} /></div>       
            <div className="text-sm flex items-center font-bold">Description:<textarea name="description" className="flex-1 border px-4 py-2 m-2 outline-none " placeholder="Add a description..." value={description} onChange={(e) => setDescription(e.target.value)} /></div>
            <div className="text-sm font-bold">Priority:<select name="priority" className="border px-4 m-2 outline-none" value={priority} onChange={(e) => setPriority(e.target.value)}>        <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select></div>
            <div className="text-sm font-bold">Add Due Date:<input type="date" name="dueDate" className="border rounded-2xl px-4 py-2 m-2 outline-none" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /></div>
            <button type="submit" className="flex justify-center w-fit self-center items-center bg-blue-500 text-white rounded-2xl px-4 py-2 hover:bg-blue-600">{editingTask ? "Update Task" : "Add Task"}</button>
        </form>
    )
}