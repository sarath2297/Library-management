import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
        
        <div className='d-flex justify-content-center align-items-center w-100 bg-dark bg-gradient text-white p-5'>
        <div className='row'>
          <div className='col-md-3'>
          <h3 className='mb-3 mt-4'><b>Library</b></h3>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit rem impedit labore sed dolores quas error vel quam quod id voluptas necessitatibus consequatur, cumque</p>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-2'>
            <h4 className='mb-3 mt-4'>Links</h4>
            <p>Home</p> 
          </div>
          <div className='col-md-3'>
            <h4 className='mb-3 mt-4'>Guides</h4>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
          <div className='col-md-3'>
            <h4 className='mb-3 mt-4'>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" placeholder='Enter Your Email' className='form-control'/>
              <button className='btn btn-warning bg-gradient ms-2'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly mt-4 w-100'>
            <FontAwesomeIcon icon={faInstagram} size='xl'/>
            <FontAwesomeIcon icon={faTwitter} size='xl'/>
            <FontAwesomeIcon icon={faLinkedin} size='xl'/>
            <FontAwesomeIcon icon={faFacebook} size='xl'/>
            </div>
          </div>
          
        </div>
      </div>
       
    </>
  )
}

export default Footer