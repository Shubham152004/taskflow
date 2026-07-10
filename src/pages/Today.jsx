

export default function Today({tasks,tasksDueToday,addTodo,editTodo,deleteTodo,toggleComplete,darkMode}) {
  const today = new Date();
  const pendingTasks = tasksDueToday.filter(task => !task.isCompleted);
  return (
    <div  className={`flex-1 ${darkMode? "dark:bg-gray-900" : "bg-slate-100"} h-full p-8`}>
      <h2 className={`text-2xl font-bold mb-4 ${
          darkMode ? "dark:text-white" : "text-slate-800"
        }`}> Today ({tasksDueToday.length})</h2>
      {tasksDueToday.length === 0 ? (
        <p className={`${darkMode ? "dark:text-white" : "text-black"}`}>No tasks due today!</p>
      ) : (
        <ul className={`${darkMode? "dark:text-white" : "text-black"}`}>
          {tasksDueToday.map((task,index) => (
            <li key={task.id}><h3 className="m-2  w-fit">({index+1}) {new Date(task.dueDate).toLocaleDateString("en-IN", { day: "numeric",  month: "long",year: "numeric",})}</h3><p className={`italic ${darkMode ? "dark:bg-blue-900" : "bg-blue-300"} ml-8 mb-4 w-fit`}>{task.title} : {task.description}</p></li>
          ))}
        </ul>
    )}
    <h2 className={`font-bold text-2xl ${darkMode? "dark:text-white" : "text-black"}`}>Pending Tasks ({pendingTasks.length})</h2>
    {pendingTasks.length === 0 ? (
        <p className={`${darkMode? "dark:text-white" : "text-black"}`}>All tasks are completed today.</p>
    ) :
        (<ul className={`${darkMode? "dark:text-white" : "text-black"}`}>{pendingTasks.map((task,index) => (
            <li key={task.id}><h3 className="m-2  w-fit">({index+1})    {new Date(task.dueDate).toLocaleDateString("en-IN", { day: "numeric",  month: "long",year: "numeric",})}</h3><p className={`italic ${darkMode ? "dark:bg-blue-900" : "bg-blue-300"} ml-8 mb-4 w-fit`}>{task.title} : {task.description}</p></li>
          ))}</ul>
    )}
    </div>
  );
}
