import TasksList from "./pages/TasksList";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Task from "./pages/Task/Task";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TasksList />} />
        <Route path="/tasks/:tasksId" element={<Task />} />
      </Routes>
    </div>
  );
} 

export default App;
