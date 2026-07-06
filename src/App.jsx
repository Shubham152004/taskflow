import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import { useState,useEffect } from 'react';

function App() {
  const [searchTask, setSearchTask] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);


  return (
    <MainLayout searchTask={searchTask} setSearchTask={setSearchTask} darkMode={darkMode} setDarkMode={setDarkMode}>
      <Dashboard searchTask={searchTask} darkMode={darkMode} />
    </MainLayout>
  );
}

export default App;