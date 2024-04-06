import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Directory() {
  const [directory, setDirectory] = useState([]);
  const { directoryId } = useParams();
  async function fetchDirectory() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}directory/7thGrade/${directoryId}`
    );
    const data = await response.json();
    setDirectory(data);
  }
  useEffect(() => {
    fetchDirectory();
  
  }, [])
  return (<div className="container background">
    <h1>{directory.title}</h1>
    <hr />
    <div dangerouslySetInnerHTML={{__html:directory.body}}></div>
  </div>);
}

export default Directory;
