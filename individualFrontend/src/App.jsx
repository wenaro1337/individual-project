import TasksList from "./pages/TasksList";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Task from "./pages/Task/Task";
import Directory from "./pages/Directory";
import DirectoryList from "./pages/DirectoryList";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<DirectoryList />} />
        <Route path="/directory/:directoryId" element={<Directory />} />
        <Route path="/tasks" element={<TasksList />} />
        <Route path="/tasks/:taskId" element={<Task />} />
      </Routes>
    </div>
  );
} 

export default App;
