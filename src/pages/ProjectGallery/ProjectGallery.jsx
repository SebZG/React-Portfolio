import { useEffect, useState } from "react";

import Project from "../../components/Project";

import projectsData from "../../projects.json";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "./ProjectGallery.css";

const Projects = () => {
   const [activeProject, setActiveProject] = useState(() => {
      const storedActiveProject = JSON.parse(localStorage.getItem("activeProject"));
      return storedActiveProject || [0, 1];
   });

   useEffect(() => {
      localStorage.setItem('activeProject', JSON.stringify(activeProject));
   }, [activeProject]);

   const handleActiveProjectLeft = () => {

      if (activeProject[0] === 0) {
         setActiveProject([projectsData.length - 1, projectsData.length]);
      } else {
         setActiveProject([activeProject[0] - 1, activeProject[1] - 1]);
      }
   }
   const handleActiveProjectRight = () => {
      if (activeProject[1] === projectsData.length) {
         setActiveProject([0, 1]);
      } else {
         setActiveProject([activeProject[0] + 1, activeProject[1] + 1]);
      }
   }

   return (
      <Container>
         <Row>
            <Col className="d-flex justify-content-center flex-column">

               <div className="d-flex justify-content-evenly my-5 w-25 mx-auto">
                  <Button variant="outline-light" onClick={handleActiveProjectLeft}>
                     <i className="fa-solid fa-chevron-left"></i>
                  </Button>
                  <Button variant="outline-light" onClick={handleActiveProjectRight}>
                     <i className="fa-solid fa-chevron-right"></i>
                  </Button>
               </div>

               <Col className="d-flex justify-content-center mb-5">
                  {projectsData.map((project, i) =>
                     <Project key={i} project={project} />
                  ).slice(activeProject[0], activeProject[1])}
               </Col>

            </Col>
         </Row>
      </Container >
   )
}
export default Projects;