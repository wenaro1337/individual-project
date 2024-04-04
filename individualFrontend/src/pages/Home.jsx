import { Card } from "antd";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import "../App.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="home">
          <Card style={{ fontSize: 20 }}>
            Я создал этот сайт с одной целью - помочь вам освоить математические
            навыки и развить аналитическое мышление. Задачи добавляются учителем
            математики/информатики{" "}
            <a href="https://vk.com/oozimin">Олегом Олеговичем Зиминым</a>.
          </Card>
        </div>
      </div>
      <footer className="footer">
        <a href="#">
          <FaGithub style={{ fontSize: 30, color: "black" }} />
        </a>
        <a style={{paddingLeft: 100}} href="https://vk.com/denprogrammers">
          <SlSocialVkontakte style={{ fontSize: 30, color: "black" }} />
        </a>
        <a style={{paddingLeft: 100}} href="https://t.me/eclipsecode">
          <FaTelegram style={{ fontSize: 30, color: "black" }} />
        </a>
      </footer>
    </>
  );
}

export default Home;
