import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Contact.css'

const Contact = () => {
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: ''
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;

      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log('formData', formData);

      setFormData({
         name: "",
         email: "",
         phone: "",
         message: ""
      });
   };

   return (
      <Container id="contact">

         <Form className='my-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-4" >
               <Form.Label>Name</Form.Label>
               <Form.Control
                  value={formData.name}
                  name='name'
                  type="text"
                  placeholder="Foo Bar"
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group className="mb-4" >
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  value={formData.email}
                  name='email'
                  type="email"
                  placeholder="foo@bar.com"
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group className="mb-4" >
               <Form.Label>Phone Number</Form.Label>
               <Form.Control
                  value={formData.phone}
                  name='phone'
                  type="tel"
                  placeholder="+44 123 456 789"
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group className="mb-4" >
               <Form.Label>Message</Form.Label>
               <Form.Control as="textarea" rows={4}
                  value={formData.message}
                  name='message'
                  placeholder='Your Message...'
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Button type='submit' variant='outline' className='btn-primary w-100'>Send</Button>
         </Form>

         <Row className="justify-content-center">

            <div className="col-lg-9 d-flex justify-content-evenly align-items-center">
               <a target="_blank" className="" href="mailto:sebastian.zapata.g@gmail.com" alt="My Email">
                  <i className="fa-solid fa-envelope"></i>
               </a>
               <a target="_blank" className="" href="https://github.com/SebZG" alt="My GitHub Profile">
                  <i className="fa-brands fa-github"></i>
               </a>
               <a target="_blank" className="" href="https://www.linkedin.com/in/sebastian-z-g/" alt="My Linkedin Profile">
                  <i className="fa-brands fa-linkedin"></i>
               </a>
            </div>

         </Row>

      </Container>
   )
}
export default Contact;