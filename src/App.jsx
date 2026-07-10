import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import TodoCard from './components/TodoCard';
import Tasks from './pages/Tasks';
import Today from './pages/Today';
import { getTasks,createTask,updateTask,deleteTask } from './services/api';


function App() {
  const [searchTask, setSearchTask] = useState("");
  const [tasks,setTasks] = useState([]);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

 
  const today = new Date();

  // Filter tasks matching today's year, month, and day
    const tasksDueToday = tasks.filter((task) => {
    if (!task.dueDate) return false; // Handle missing dates safely
    const dueDate = new Date(task.dueDate);
    
    return (
      today.getFullYear() === dueDate.getFullYear() &&
      today.getMonth() === dueDate.getMonth() &&
      today.getDate() === dueDate.getDate()
    );
  });


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);


    async function addTodo(newTask) {
      try{
        const response = await createTask(newTask);
        setTasks((prevTasks) => [...prevTasks, response.data]);
    }catch(error) {
      console.error("Error creating task",error);
    }
  }

    async function deleteTodo(_id) {
        try{
          const response = await deleteTask(_id)
          setTasks((prevTasks) => prevTasks.filter((task) => task._id !== _id));
        }catch(error){
          console.error("Error deleting task",error);
        }
    }

    async function editTodo(_id, updatedTask) {
      try{
        const response = await updateTask(_id,updatedTask)
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task._id === _id ? response.data: task))
        );
      }catch(error){
        console.error("Error deleting task",error);
      }
    }

     async function toggleComplete(_id, isCompleted) {
    try {
        const response = await updateTask(_id, {
            isCompleted: !isCompleted
        });

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task._id === _id ? response.data : task
            )
        );
    } catch (error) {
        console.error("Error toggling task completion:", error);
    }
}

    useEffect(() => {
      const fetchTask = async () => {
        try {
          const response = await getTasks();
          setTasks(response.data);
        } catch(error){
          console.error("Error fetchinf tasks:" , error);
        } 
      };
      fetchTask();
    },[]);

  return (
    <MainLayout searchTask={searchTask} setSearchTask={setSearchTask} darkMode={darkMode} setDarkMode={setDarkMode}>
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} searchTask={searchTask} darkMode={darkMode} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />} />
        <Route path="/tasks" element={<Tasks tasks={tasks}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleComplete={toggleComplete}
      darkMode={darkMode}
      searchTask={searchTask}/>}/>
      <Route path="/Today" element={<Today tasksDueToday={tasksDueToday}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleComplete={toggleComplete}
      darkMode={darkMode}
      />
      } />
      </Routes>
    </MainLayout>
  );
}

export default App;