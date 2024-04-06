import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTitle } from "../utils";

function DirectoryList() {
  const [directorys, setDirectorys] = useState([]);
  async function getDirectorys() {
    const response = await fetch(
      "http://localhost:8000/api/directory/7thGrade"
    );
    const data = await response.json();
    setDirectorys(data);
  }
  useEffect(() => {
    getDirectorys();
  }, []);
  return (
    <div style={{alignItems: "center"}} className="container-1" >
        {directorys.map((directory) => {
          return (
            <li className="container" key={directory.id} >
              <Link to={`/directory/${directory.id}`}>
                <h2>{`Тема ${directory.id}`}</h2>
                <hr />
                <p>{getTitle(directory.title)}</p>
              </Link>
            </li>
          );
        })}
    </div>
  );
}

export default DirectoryList;
