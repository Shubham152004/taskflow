import { LuClipboardCheck,LuClipboardPen,LuStar,LuClipboardList } from "react-icons/lu";
import StatsCard from "../components/StatsCard";
import TodoForm from "../components/TodoForm";
import { useState,useEffect } from "react";
import TodoCard from "../components/TodoCard";

export default function Dashboard() {

    const [tasks,setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [editingTask,setEditingTask] = useState(null);

    

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTodo(newTask) {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    function deleteTodo(id) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }

    function editTodo(id, updatedTask) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
        );
    }

    function toggleComplete(id,isCompleted) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            })
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">
        <h3 className="text-2xl font-bold mb-4">Good Morning,User</h3>
        <h3 className="text-xl font-semibold mb-4">Your Task Summary is here ,Stay Productive Today</h3>
        <div className=" flex items-center justify-center gap-4 m-6">
            <StatsCard title="Total Tasks" value={tasks.length} icon={<LuClipboardList/>} />
            <StatsCard title="Completed Tasks" value={tasks.filter(t => t.isCompleted).length} icon={<LuClipboardCheck />} />
            <StatsCard title="Pending Tasks" value={tasks.filter(t => !t.isCompleted).length} icon={<LuClipboardPen />} />
            <StatsCard title="Important Tasks" value={tasks.filter(t => t.priority === "high").length} icon={<LuStar />} />
        </div>
        <div className=" flex flex-col  justify-center gap-8 mx-16 shadow hover:shadow-lg shadow-blue-500 transition-shadow duration-100 rounded-lg bg-white p-4">
            <TodoForm onAddTodo={addTodo} editingTask={editingTask} onEditTodo={editTodo} setEditingTask={setEditingTask} />
            <h2 className="flex self-center text-2xl font-bold mb-4">Your Tasks List</h2>
            {tasks.map((task,index) => (
                <div key={task.id} className="flex flex-col gap-2 border rounded-2xl p-4 bg-amber-50">
                    <div className="text-lg font-semibold">Task {index + 1}</div>
                    <TodoCard id={task.id} title={task.title} description={task.description} priority={task.priority} dueDate={task.dueDate} isCompleted={task.isCompleted} onDelete={() => deleteTodo(task.id)} onToggleComplete={() => toggleComplete(task.id, task.isCompleted )} onEdit={() => setEditingTask(task)} />
                </div>
            ))}
        </div>
        </div>
    );
}