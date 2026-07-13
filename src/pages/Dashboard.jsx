import { LuClipboardCheck,LuClipboardPen,LuStar,LuClipboardList } from "react-icons/lu";
import StatsCard from "../components/StatsCard";
import TodoForm from "../components/TodoForm";
import { useState,useEffect } from "react";
import TodoCard from "../components/TodoCard";



export default function Dashboard({searchTask,darkMode,tasks,addTodo,deleteTodo,editTodo,toggleComplete}) {


    
    const [editingTask,setEditingTask] = useState(() =>{
        const savedEditingTask = localStorage.getItem("editingTask");
        return savedEditingTask ? JSON.parse(savedEditingTask) : null;
    });

    useEffect(() => {
        localStorage.setItem("editingTask", JSON.stringify(editingTask));
    }, [editingTask]);

    const filteredTasks= tasks.filter((task) => {
        const search = searchTask.toLowerCase();
        return (
            task.title.toLowerCase().includes(search) ||
            task.description.toLowerCase().includes(search) ||
            task.priority.toLowerCase().includes(search) ||
            task.dueDate.toLowerCase().includes(search)
        );
    });

    

    

    return (
    <div className={`min-h-screen p-4 md:p-6 ${darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-slate-100"}`}>
        <h3 className={`text-2xl font-bold ${darkMode ? "dark:text-white" : "text-slate-800"}`}>
            Good Morning, User
        </h3>
        <h3 className={`text-lg font-medium ${darkMode ? "dark:text-gray-400" : "text-slate-500"} mb-6`}>
            Your task summary is here — stay productive today
        </h3>

        <div className="flex items-center justify-center gap-4 flex-wrap my-4">
            <StatsCard title="Total Tasks" value={tasks.length} icon={<LuClipboardList/>} darkMode={darkMode} />
            <StatsCard title="Completed Tasks" value={tasks.filter(t => t.isCompleted).length} icon={<LuClipboardCheck />} darkMode={darkMode} />
            <StatsCard title="Pending Tasks" value={tasks.filter(t => !t.isCompleted).length} icon={<LuClipboardPen />} darkMode={darkMode} />
            <StatsCard title="Important Tasks" value={tasks.filter(t => t.priority === "high").length} icon={<LuStar />} darkMode={darkMode} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
            <div className="lg:w-96 shrink-0">
                <TodoForm onAddTodo={addTodo} editingTask={editingTask} onEditTodo={editTodo} setEditingTask={setEditingTask} darkMode={darkMode} />
            </div>

            <div className="flex-1">
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "dark:text-white" : "text-slate-800"}`}>
                    Your Tasks
                </h2>
                {filteredTasks.length === 0 ? (
                    <p className={`italic ${darkMode ? "dark:text-gray-400" : "text-slate-400"}`}>
                        No tasks found. Add one to get started!
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {filteredTasks.map((task) => (
                            <TodoCard
                                key={task._id}
                                _id={task._id}
                                title={task.title}
                                description={task.description}
                                priority={task.priority}
                                dueDate={task.dueDate}
                                isCompleted={task.isCompleted}
                                onDelete={() => deleteTodo(task._id)}
                                onToggleComplete={() => toggleComplete(task._id, task.isCompleted)}
                                onEdit={() => setEditingTask(task)}
                                darkMode={darkMode}
                            />
                        ))}
                    </div>
                )}
            </div> 
        </div>
    </div>
);
}