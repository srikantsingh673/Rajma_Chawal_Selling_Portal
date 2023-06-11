import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Support = () => {
  return (
    <div>
      <Container >
        <Col className='add' id='Support'>
          <IoLocationSharp />
          <h5><strong>Our Location</strong></h5>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.073676007346!2d77.27591422535848!3d28.627553884306888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35319b6a7ff%3A0x127dca80423ad527!2sLaxmi%20Nagar%2C%20Block%20S1%2C%20Nanakpura%2C%20Shakarpur%2C%20New%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1686204040715!5m2!1sen!2sin" title="Map Marker"></iframe>
          <p className='title-add'><b>Laxmi Nagar Shakarpur New Delhi 110092</b></p>
        </Col><br/>
        <Row className='Support-cont'>
        <h5><strong> Contact Us</strong></h5><br/><br/><br/>
        <Col>
          <h6><IoCall /> Helpline</h6>
          <a className='phone' href="tel:7988606676"> 7988451736 </a>
        </Col>
        <Col>
          <h6><MdEmail /> Email Address</h6>
          <a className='email' href="mailto: ironandwash21@gmail.com">laxminagarrajmachawal@gmail.com</a>
        </Col>
      </Row>
      </Container><br />
      <div >
      </div><br /><br/><br /><br/><br /><br/>
      <div className="footer__copyright">
        <small>Design & Developed by <a href='https://www.instagram.com/the_rishu0p/'> Rishu </a></small><br />
        <small>&copy; laxminagarrajmachawal.com</small>
      </div>
    </div>
  )
}

export default Support