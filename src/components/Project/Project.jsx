import { useEffect, useState } from 'react';

import './Project.css';

import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const Project = ({ project }) => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 2000);
   }, [])

   const ImageSkeleton = () => {
      return (
         <Placeholder as="p" animation="glow" style={{ height: '100%' }}>
            <Placeholder xs={12} style={{ height: '16rem' }} />
         </Placeholder>
      );
   }

   return (
      <Card className='project-card' style={{ width: '26rem' }}>

         {/* {isLoading ? <ImageSkeleton /> : <Card.Img className='project-img' variant="top" src={project.image} />} */}
         <Card.Img className='project-img' variant="top" src={project.image} />

         <Card.Body>
            <Card.Title className='project-title'>{project.name}</Card.Title>
            <Card.Subtitle className='project-subtitle mb-2'>{project.technologies.join(" / ")}</Card.Subtitle>
            <Card.Text className='project-description'>
               {project.description}
            </Card.Text>
            {
               project.URL &&
               <Card.Link target='_blank' href={project.URL}>Deployed Project</Card.Link>
            }
            <Card.Link target='_blank' href={project.GitHub}>GitHub</Card.Link>
         </Card.Body>
      </Card>
   )
}
export default Project;