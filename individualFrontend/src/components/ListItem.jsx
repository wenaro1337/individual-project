import { Link } from "react-router-dom";
import "../App.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { getTitle } from "../utils";


function ListItem({ task }) {
  
  return (
    <li className="container margin">
      <Link to={`/tasks/${task.id}`}>
        <h2>{`Задача  ${task.id}`}</h2>
        {task.passed ? <IoIosCheckmarkCircleOutline className="passed" /> : <IoIosCloseCircleOutline className="not-passed" />}
        <hr />
        <p><strong>Условие:</strong> {getTitle(task.question)}</p>
      </Link>
    </li>
  );
}

export default ListItem;
