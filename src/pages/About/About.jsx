import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import './About.css';

import Avatar from '../../assets/images/avatar.jpeg';

const Home = () => {
   return (
      <div className='mt-5'>
         <Container id="hero" className="container">
            <Row className="justify-content-center">
               <div className="col-10 col-xl-8">
                  <Card className="mb-0">
                     <Row className="g-0">
                        <div className="col-6 col-sm-8 col-md-6 col-lg-4 col-xl-4 m-auto">
                           <Card.Img
                              src={Avatar}
                              className="img-fluid rounded-circle w-75 my-4 mx-auto d-block" alt="Profile Picture"
                           />
                        </div>
                        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto">
                           <Card.Body>
                              <Card.Title className="text-center text-sm-center text-md-center text-lg-start text-xl-start">
                                 Sebastian Zapata Gutierrez
                              </Card.Title>
                              <hr className="hero-title__divider" />
                              <blockquote className="blockquote mb-0">
                                 <Card.Text>
                                    Welcome! I am an aspiring Web Developer eager to learn and improve everyday. I
                                    love
                                    to code and build exciting Web Apps. I am currently on a Front-End Web Development Bootcamp which I
                                    will finish end of March. Feel free to look around and contact me if you have any questions.
                                    Checkout my <a target="_blank" className="css-portfolio"
                                       href="https://sebzg.github.io/CSS-Portfolio/">CSS Portfolio!</a>
                                 </Card.Text>
                              </blockquote>
                           </Card.Body>
                        </div>
                     </Row>
                     <hr className="tech-stack__divider" />
                     <Row id="tech-stack" className="justify-content-center tech-stack__section">
                        <div className="col-8">
                           <div className=" d-flex justify-content-evenly flex-wrap flex-md-nowrap tech-stack">
                              <i className="fa-brands fa-html5" alt="HTML"></i>
                              <i className="fa-brands fa-css3-alt" alt="CSS"></i>
                              <i className="fa-brands fa-js" alt="JavaScript"></i>
                              <i className="fa-brands fa-react" alt="React"></i>
                              <i className="fa-brands fa-bootstrap" alt="Bootstrap"></i>
                           </div>
                        </div>
                     </Row>
                  </Card>
               </div>
            </Row>
         </Container>

         <Container id="info" className="container">

            <Row className="row justify-content-center">
               <div className="col-10 d-flex justify-content-between border-bottom section-division">
                  <h2 className="fs-1">Info</h2>
               </div>
            </Row>

            <Row className="justify-content-center">

               <div id="skills" className="col-10">
                  <Card className="h-100">
                     <Card.Body>
                        <Card.Title className="fs-3">Skills</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <Card.Text>
                              So far I have learned HTML, CSS, JavaScript, React and Bootstrap. During the bootcamp I intend to dive
                              deeper into these technologies with the practice of building real world Web Apps whilst learning the
                              soft and hard skills of a great Font-End Web Developer. I'm really looking forward to the challenges
                              ahead and what I help establish for years to come with these new set of skills.
                           </Card.Text>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </div>

               <hr className="info__divider" />

               <div id="about" className="col-10">
                  <Card className="card h-100">
                     <Card.Body className="card-body">
                        <Card.Title className="card-title fs-3">About</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <Card.Text>
                              Originally I am from Colombia, South America.
                              Grew up in London, UK where I studied music extensively for many years.
                              I later went on to work in Hospitality for a few years before I decided to pursue my interest in coding.
                              Have always been drawn to learning programming languages and so glad I did!
                              It can be beautiful and elegant or ugly and raw. Learning to code has taught me
                              a lot about my self and given me new insights on life. I wish to one day pass on these skills.
                           </Card.Text>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </div>

            </Row>

         </Container>
      </div>
   )
}
export default Home;