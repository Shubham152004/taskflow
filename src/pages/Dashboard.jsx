import { LuClipboardCheck,LuClipboardPen,LuStar,LuClipboardList } from "react-icons/lu";
import StatsCard from "../components/StatsCard";
import TodoForm from "../components/TodoForm";
import { useState,useEffect } from "react";
import TodoCard from "../components/TodoCard";


export default function Dashboard({ searchTask}) {

    const [tasks,setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [editingTask,setEditingTask] = useState(null);

    const filteredTasks= tasks.filter((task) => {
        const search = searchTask.toLowerCase();
        console.log("searchTask:", searchTask,task);
        return (
            task.title.toLowerCase().includes(search) ||
            task.description.toLowerCase().includes(search) ||
            task.priority.toLowerCase().includes(search) ||
            task.dueDate.toLowerCase().includes(search)
        );
    });

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
    <div className="min-h-screen bg-slate-100 p-4 md:p-6">
        <h3 className="text-2xl font-bold text-slate-800">Good Morning, User</h3>
        <h3 className="text-lg font-medium text-slate-500 mb-6">Your task summary is here — stay productive today</h3>

        <div className="flex items-center justify-center gap-4 flex-wrap my-4">
            <StatsCard title="Total Tasks" value={tasks.length} icon={<LuClipboardList/>} />
            <StatsCard title="Completed Tasks" value={tasks.filter(t => t.isCompleted).length} icon={<LuClipboardCheck />} />
            <StatsCard title="Pending Tasks" value={tasks.filter(t => !t.isCompleted).length} icon={<LuClipboardPen />} />
            <StatsCard title="Important Tasks" value={tasks.filter(t => t.priority === "high").length} icon={<LuStar />} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
            <div className="lg:w-96 shrink-0">
                <TodoForm onAddTodo={addTodo} editingTask={editingTask} onEditTodo={editTodo} setEditingTask={setEditingTask} />
            </div>


            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Your Tasks</h2>
                {filteredTasks.length === 0 ? (
                    <p className="text-slate-400 italic">No tasks found. Add one to get started!</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {filteredTasks.map((task) => (
                            <TodoCard
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                priority={task.priority}
                                dueDate={task.dueDate}
                                isCompleted={task.isCompleted}
                                onDelete={() => deleteTodo(task.id)}
                                onToggleComplete={() => toggleComplete(task.id, task.isCompleted)}
                                onEdit={() => setEditingTask(task)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
);
}