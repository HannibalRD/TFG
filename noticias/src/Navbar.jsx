import React, { useState, Suspense } from 'react';
import './navbar.css';
import './style.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';



const LazyTea = React.lazy(() => import('./NewsBoard'));
const LazyTeas = React.lazy(() => import('./Fase2'))
const LazyTeas1 = React.lazy(() => import('./AppEmail'))
const LazyTeas2 = React.lazy(() => import('./Fase3'))
const LazyTeas3 = React.lazy(() => import('./Fase4'))


function Navbars() {
  const [showTea, setShowTea] = useState(false);


  const handleTeaClick = () => {
    setShowTea(true);
  };

  return (
    <Router>
      
      <div className='navbar'>
        <Navbar className='hola' bg='myRed' variant='dark' sticky='top'  expand='lg' collapseOnSelect>
          <Navbar.Brand>
          👌Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <NavDropdown title='Vocabulario'>
                <NavDropdown.Item className=' first bg-dark' as={NavLink} to='/NewsBoard' onClick={handleTeaClick}  >
                  Ancla
                </NavDropdown.Item>
                <NavDropdown.Item className=' first bg-dark' as ={NavLink} to='Fase2' onClick={handleTeaClick} >
                  Peces
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to='/AppEmail'>Blog</Nav.Link>
              <Nav.Link as={NavLink} to='/Fase3'>About us</Nav.Link>
              <Nav.Link as={NavLink} to='/Fase4'>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <div className='content'>
        <div>
      <div className="context">
      <Routes>
              {showTea && (
                <Route path='/NewsBoard' element={<Suspense fallback={<div>Loading...</div>}><LazyTea /></Suspense>} />
              )}
              {showTea && (
                  <Route path='/Fase2' element={<Suspense fallback={<div>Loading...</div>}><LazyTeas/></Suspense>}/>
                )}
              {showTea && (
                  <Route path='/AppEmail' element={<Suspense fallback={<div>Loading...</div>}><LazyTeas1/></Suspense>}/>
              )}
              {showTea && (
                  <Route path='/Fase3' element={<Suspense fallback={<div>Loading...</div>}><LazyTeas2/></Suspense>}/>
              )}
              {showTea && (
                  <Route path='/Fase4' element={<Suspense fallback={<div>Loading...</div>}><LazyTeas3/></Suspense>}/>
              )}
              
            </Routes>
      </div>

      <div className="area area2">
        
      </div>
    </div>

        </div>
    </Router>
  );
}

export default Navbars;

