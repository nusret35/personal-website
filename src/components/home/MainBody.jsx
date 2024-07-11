import React ,{useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import "./Style.css";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    const helloMessages = ["Hello", "Merhaba", "Bonjour", "Hallo", "Ciao", "こんにちは", "Hei", "Hola", "你好", "Hallå", "Olá"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % helloMessages.length);
          setFade(true);
        }, 300); // Duration of the fade-out effect
      }, 5000); // 5000ms = 5 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [helloMessages.length]);
  
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className={`display-1 ${fade ? 'fade-in' : 'fade-out'}`}>
            {helloMessages[currentIndex]}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
