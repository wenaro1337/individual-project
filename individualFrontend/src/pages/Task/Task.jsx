import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import Image from "../../components/Image";
import "./task.css";

export default function Task() {
  const [task, setTask] = useState([]);
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(null);

  const { taskId } = useParams();

  const updateTask = async () => {
    const copyTask = { ...task };
    copyTask.passed = true;
    await fetch(`${import.meta.env.VITE_API_URL}tasks/7thGrade/${taskId}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(copyTask),
    });
  };

  function handleChange(e) {
    setAnswer(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    if (answer === task.answer) {
      setCorrect(true);
      updateTask();
    } else {
      setCorrect(false);
    }
  }
  async function fetchTask() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}tasks/7thGrade/${taskId}`
      );
      if (!response.ok) {
        throw new Error("Networck response was not ok");
      }
      const result = await response.json();
      setTask(result);
    } catch (error) {
      console.error("Error fetching task", error);
    }
  }

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <div className="container background">
      <p>{task.question}</p>
      <hr></hr>
      <div
        style={{ fontSize: 2 + "rem", color: "white" }}
        dangerouslySetInnerHTML={{ __html: task.task }}
      />
      {task.onlypicrute == null ? null : (
        <div>
          <Image source={`${import.meta.env.VITE_URL}${task.onlypicrute}`} />
        </div>
      )}
      <form action="">
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          name="answer"
        />
        <button type="submit" onClick={handleClick}>
          отправить
        </button>
        {correct === null ? null : correct ? (
          <div className="correct">Правильный ответ</div>
        ) : (
          <div className="not-correct">Неправильный ответ</div>
        )}
      </form>
    </div>
  );
}
