import { useState, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import emailjs from '@emailjs/browser';

import './Contact.css'

const Contact = () => {
   const form = useRef();
   const [emailSent, setEmailSent] = useState(false);

   const sent = () => {
      return (
         <p className='sent text-center'>Thank you! I'll get back to you soon!</p>
      )
   }

   const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
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

      console.log(e.target);

      emailjs
         .sendForm('service_jauc33p', 'template_24nqni4', form.current, {
            publicKey: '5tawsU2YEJbGtQgJ2',
         })
         .then(
            () => {
               console.log('Sent!');
               setEmailSent(true);
               setFormData({
                  user_name: '',
                  user_email: '',
                  message: ''
               });
            },
            (error) => {
               console.error('FAILED...', error.text);
            },
         );
   };

   return (
      <Container id="contact">

         <Form ref={form} className='my-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-4" >
               <Form.Label>Name</Form.Label>
               <Form.Control
                  value={formData.user_name}
                  name='user_name'
                  type="text"
                  placeholder="Foo Bar"
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group className="mb-4" >
               <Form.Label>Email</Form.Label>
               <Form.Control
                  value={formData.user_email}
                  name='user_email'
                  type="email"
                  placeholder="foo@bar.com"
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
            <Button type='submit' variant='outline' value="Send" className='btn-primary w-100'>Send</Button>
         </Form>

         {emailSent && sent()}

         <Row className="justify-content-center mt-5">

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

      </Container >
   )
}
export default Contact;