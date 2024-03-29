// import { useEffect, useState } from 'react';

import './Project.css';

import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';


const Project = ({ project }) => {
   // const [isLoading, setIsLoading] = useState(true);

   // useEffect(() => {
   //    setTimeout(() => {
   //       setIsLoading(false);
   //    }, 2000);
   // }, [])

   // const ImageSkeleton = () => {
   //    return (
   //       <Placeholder as="p" animation="glow" style={{ height: '100%' }}>
   //          <Placeholder xs={12} style={{ height: '16rem' }} />
   //       </Placeholder>
   //    );
   // }

   return (
      <Card className='project-card' style={{ width: '26rem' }}>

         {/* {isLoading ? <ImageSkeleton /> : <Card.Img className='project-img' variant="top" src={project.image} />} */}
         <Card.Img className='project-img' variant="top" src={project.image} />

         <Card.Body>
            <Card.Title className='project-title'>{project.name}</Card.Title>
            <hr />
            <Card.Subtitle className='project-subtitle mb-2'>{project.technologies.join(" / ")}</Card.Subtitle>
            <hr />
            <Card.Text className='project-description'>
               {project.description}
            </Card.Text>
            <hr />
            {
               project.URL &&
               <div className='d-inline-flex'>
                  <Card.Link className='links' target='_blank' href={project.URL}>Project</Card.Link>
                  <p className='mx-2'>//</p>
               </div>
            }
            <Card.Link className='links' target='_blank' href={project.GitHub}>GitHub</Card.Link>
         </Card.Body>
      </Card>
   )
}
export default Project;