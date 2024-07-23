import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Col from "react-bootstrap/Col";
import "./Style.css";
import skills  from "../../editable-stuff/skills.jsx";



const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
          <Row style={{alignItems:'start', justifyContent:'space-between'}}>
            {
                skills.map((skill) => <SkillCard key={skill.language} skillName={skill.language} skillPhoto={skill.photo} skillDescription={skill.description}/>)
            }
          </Row>
      </Container>
    </Jumbotron>
  );
});

function SkillCard({skillName, skillPhoto, skillDescription}) {
  const [open, setOpen] = React.useState(false);
  return (
    <Col md={4}>
    <Card style={{cursor:'pointer' }} 
          onClick={() => setOpen(!open)}
          className="card shadow-lg p-3 mb-5 bg-white rounded w-100"
    >
      <Card.Img className="card-img-custom" variant="top" src={skillPhoto}/>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{skillName}</Card.Title>
        <Card.Text  style={{textAlign:'center'}}>
          <Collapse in={open}>
            <div id="example-collapse-text">
              {skillDescription !== "" ? skillDescription : "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."}
            </div>
          </Collapse>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Skills;
