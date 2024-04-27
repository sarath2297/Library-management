import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../assets/liblogo.png'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
        <div>
        <Navbar className="bg-dark bg-gradient p-0">
        <Container>
          
            <Link to={'/'}>
              <img
                src={logo1}
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="Library Logo"
              />
            </Link>
          
        </Container>
      </Navbar>

        </div>
    </>
  )
}

export default Header