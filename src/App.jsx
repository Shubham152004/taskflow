import { useAuth } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import TodoCard from './components/TodoCard';
import Tasks from './pages/Tasks';
import Today from './pages/Today';
import Register from "./pages/register";
import Login from './pages/login';
import API,{ getTasks,createTask,updateTask,deleteTask } from './services/api';
import {Bounce, ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const {token} = useAuth();
  const [searchTask, setSearchTask] = useState("");
  const [tasks,setTasks] = useState([]);
  const [loading,setLoading] =useState(true);
  const [error,setError] = useState("");

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
        toast.success("Task created successfully!");
    }catch(error) {
      toast.error("Error creating task",error);
    }
  }

    async function deleteTodo(_id) {
      const confirmDelete = window.confirm("Are you sure you want to delete this task?");
          if (!confirmDelete) return;
        try{
          const response = await deleteTask(_id)
          setTasks((prevTasks) => prevTasks.filter((task) => task._id !== _id));
          toast.success("Task deleted successfully!");
        }catch(error){
          toast.error("Error deleting task",error);
        }
    }

    async function editTodo(_id, updatedTask) {
      try{
        const response = await updateTask(_id,updatedTask)
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task._id === _id ? response.data: task))
        );
        toast.success("Task updated successfully!");
      }catch(error){
        toast.error("Error deleting task",error);
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
        toast.success(isCompleted ? "Task incomplete!" : "Task completed!");
    } catch (error) {
        toast.error("Error toggling task completion:", error);
    }
}

    useEffect(() => {

      if(!token){
        setLoading(false);
        return;
      }
      const fetchTask = async () => {
        try {
          setLoading(true);
          const response = await getTasks();
          setTasks(response.data);
        } catch(error){
          console.error("Error fetching tasks:" , error);
          setError("Unable to connect to the server.")
        } finally{
          setLoading(false);
        } 
      };
      fetchTask();
    },[token]);

if (loading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-2xl font-semibold">
                Loading Tasks...
            </h2>
        </div>
    );
}

if (error) {
    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-red-600 text-xl">
                {error}
            </h2>
        </div>
    );
}

  return (<>
    <MainLayout searchTask={searchTask} setSearchTask={setSearchTask} darkMode={darkMode} setDarkMode={setDarkMode}>
      <Routes>
        <Route path='/register' element={<Register darkMode={darkMode}/>} />
        <Route path="/login" element={<Login darkMode={darkMode}/>} />
        <Route path="/" element={<ProtectedRoute><Dashboard tasks={tasks} searchTask={searchTask} darkMode={darkMode} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Tasks tasks={tasks}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleComplete={toggleComplete}
      darkMode={darkMode}
      searchTask={searchTask}/></ProtectedRoute>}/>
      <Route path="/Today" element={<ProtectedRoute><Today tasksDueToday={tasksDueToday}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleComplete={toggleComplete}
      darkMode={darkMode}
      /> </ProtectedRoute>
      } />
      </Routes>
    </MainLayout>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  );
}

export default App;