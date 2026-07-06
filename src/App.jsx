import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';

function App() {
  const [searchTask, setSearchTask] = useState("");

  return (
    <MainLayout searchTask={searchTask} setSearchTask={setSearchTask}>
      <Dashboard searchTask={searchTask} />
    </MainLayout>
  );
}

export default App;