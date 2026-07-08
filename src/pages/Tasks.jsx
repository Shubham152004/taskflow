import TodoCard from "../components/TodoCard";

export default function Tasks({
  tasks,
  deleteTodo,
  toggleComplete,
  darkMode,
  searchTask,
}) {
  const filteredTasks = tasks.filter((task) => {
    const search = searchTask.toLowerCase();

    return (
      task.title.toLowerCase().includes(search) ||
      task.description.toLowerCase().includes(search) ||
      task.priority.toLowerCase().includes(search) ||
      task.dueDate.toLowerCase().includes(search)
    );
  });

  return (
    <div className={`flex-1 ${darkMode? "dark:bg-gray-900" : "bg-slate-100"} h-full p-8`}>
      <h2
        className={`text-2xl font-bold mb-4 ${
          darkMode ? "dark:text-white" : "text-slate-800"
        }`}
      >
        Your Tasks
      </h2>

      {filteredTasks.length === 0 ? (
        <p
          className={`italic ${
            darkMode ? "dark:text-gray-400" : "text-slate-400"
          }`}
        >
          No tasks found. Add one to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <TodoCard
              key={task.id}
              {...task}
              onDelete={() => deleteTodo(task.id)}
              onToggleComplete={() => toggleComplete(task.id)}
              onEdit={() => {}}
              darkMode={darkMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}