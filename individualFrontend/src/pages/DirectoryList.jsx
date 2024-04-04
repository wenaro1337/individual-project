import { Card, Space } from "antd";
import { useEffect, useState } from "react";

function DirectoryList() {
  const [directorys, setDirectorys] = useState([]);
  async function getDirectorys() {
    const response = await fetch(
      "http://localhost:8000/api/tasks/7thGradeDirectory"
    );
    const data = await response.json();
    setDirectorys(data);
  }
  useEffect(() => {
    getDirectorys();
  }, []);
  return (
    <div className="container">
      <Space direction="vertical" align="center" size="middle" style={{ display: "flex" }}>
        {directorys.map((directory) => {
          return (
            <Card title={directory.title} key={directory.id} size="medium" style={{ width: 1000 }} className="card">
              <h1 style={{ fontSize: "200px" }} dangerouslySetInnerHTML={{ __html: directory.subtitle }}></h1>
            </Card>
          );
        })}
      </Space>
    </div>
  );
}

export default DirectoryList;
