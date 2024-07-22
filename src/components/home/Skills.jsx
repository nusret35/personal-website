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
            <SkillCard skillName="Python" skillPhoto={'https://www.svgrepo.com/show/376344/python.svg'}/>
            <SkillCard skillName="PyTorch" skillPhoto={'https://www.linuxfoundation.org/hs-fs/hubfs/PyTorchLogo_Icon_fullColor_RGB.png?width=259&height=288&name=PyTorchLogo_Icon_fullColor_RGB.png'}/>
            <SkillCard skillName="LangChain" skillPhoto={'https://camo.githubusercontent.com/da98ec6b2b0968e19a6c8a7328f87af31202808b8851d7bd034f08b6d98ccaac/68747470733a2f2f6173736574732d676c6f62616c2e776562736974652d66696c65732e636f6d2f3632303362366435373832333130303834376566643962312f3635663431353935643337663533663731376464316636395f6c616e67636861696e25323069636f6e2e706e67'}/>
            <SkillCard skillName="Java" skillPhoto={'https://education.oracle.com/file/general/p-80-java.png'}/>
            <SkillCard skillName="Kotlin" skillPhoto={'https://mathiasfrohlich.gallerycdn.vsassets.io/extensions/mathiasfrohlich/kotlin/1.7.1/1581441165235/Microsoft.VisualStudio.Services.Icons.Default'}/>
            <SkillCard skillName="Spring Framework" skillPhoto={'https://i0.wp.com/chelseatroy.com/wp-content/uploads/2015/09/spring.png?fit=340%2C340&ssl=1'}/>
            <SkillCard skillName="React" skillPhoto={'https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png'}/>
            <SkillCard skillName="Flutter" skillPhoto={'https://cdn.prod.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg'}/>
            <SkillCard skillName="Swift" skillPhoto={'https://www.svgrepo.com/show/452110/swift.svg'}/>
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
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Skills;
