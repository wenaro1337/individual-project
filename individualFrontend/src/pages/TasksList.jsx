import { useEffect, useState } from "react"
import ListItem from "../components/ListItem";



function TasksList() {
  const [tasks, setTasks] = useState([]);
  let getTasks = async () => {
    let data = await fetch("http://localhost:8000/api/tasks/7thGrade/")
    let response = await data.json()
    setTasks(response)
  }
  useEffect(() => {
    getTasks();
  }, [])
  return (
    <div className="container-1">
      {tasks.map((task) => 
        <ListItem  key={task.id}  task={task}></ListItem>
      )}
    </div>
  )
}

export default TasksList