import { Link } from "react-router-dom";
import "../App.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";



function ListItem({ task }) {
  let getTitle = (title) => {
    if (title.length > 50) {
      return title.slice(50) + "...";
    } else {
      return title;
    }
  };
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
