import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import TodoCard from './components/TodoCard';
import Tasks from './pages/Tasks';
import Today from './pages/Today';

function App() {
  const [searchTask, setSearchTask] = useState("");
  const [tasks,setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

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