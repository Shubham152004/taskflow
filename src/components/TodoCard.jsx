
export default function TodoCard({ id, title, description, priority, dueDate, isCompleted, onDelete, onEdit, onToggleComplete,darkMode }) {
    const priorityStyles = {
        high: "bg-red-100 text-red-700 border border-red-300",
        medium: "bg-yellow-100 text-yellow-700 border border-yellow-300",
        low: "bg-green-100 text-green-700 border border-green-300",
    };

    return (
        <div className={`w-full ${darkMode ? "dark:bg-gray-800" : "bg-white"} p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 ${isCompleted ? "border-green-400 opacity-60" : "border-blue-400"}`}>
            <div className="flex justify-between items-start mb-2">
                <h3 className={`text-lg font-semibold ${darkMode ? "dark:text-white" : "text-slate-800"} ${isCompleted ? "line-through text-slate-400" : ""}`}>
                    {title}
                </h3>
                {priority && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${priorityStyles[priority] || "bg-gray-100 text-gray-600"}`}>
                        {priority}
                    </span>
                )}
            </div>

            <p className={`text-sm ${darkMode ? "dark:text-gray-300" : "text-slate-600"} mb-3 ${isCompleted ? "line-through text-slate-400" : ""}`}>
                {description}
            </p>

            {dueDate && (
                <p className={`text-xs ${darkMode ? "dark:text-gray-400" : "text-slate-500"} mb-4`}>
                    📅 Due: {dueDate}
                </p>
            )}

            <div className="flex gap-2 flex-wrap">
                <button onClick={onToggleComplete} className={`text-sm px-3 py-1.5 rounded-lg font-medium transition-colors ${darkMode ? "dark:bg-gray-600 dark:text-white hover:dark:bg-gray-500" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}>
                    {isCompleted ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button onClick={onEdit} className={`text-sm px-3 py-1.5 rounded-lg font-medium ${darkMode ? "dark:bg-blue-500 dark:text-white hover:dark:bg-blue-600" : "bg-blue-500 text-white hover:bg-blue-600"} transition-colors`}>
                    Edit 
                </button>
                <button onClick={onDelete} className={`text-sm px-3 py-1.5 rounded-lg font-medium ${darkMode ? "dark:bg-red-500 dark:text-white hover:dark:bg-red-600" : "bg-red-500 text-white hover:bg-red-600"} transition-colors`}>
                    Delete
                </button>
            </div>
        </div>
    );
}