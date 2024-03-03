import './Footer.css';

const Footer = () => {

   const year = new Date().getFullYear();
   
   return (
      <footer id="footer" className=" py-4 ">
         <div className="container">
            <div className="d-flex justify-content-center align-items-center">

               <h6 className="pe-3">&copy;</h6>

               <h4 id="logo__footer">SZG()</h4>

               <h6 className="year ps-3">{year}</h6>

            </div>
         </div>
      </footer>
   )
}
export default Footer;