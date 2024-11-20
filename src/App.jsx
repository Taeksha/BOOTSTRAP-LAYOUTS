
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Row } from 'react-bootstrap';



function App() {


  return (
 <> 
    <Navbar expand="lg" bg='secondary'>
    <Container fluid>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

 
    
    <Container fluid>
    
    
      
    
      <Row>
      <div className='col-8 mains'>

<div className='col-6 main'></div>
       <div className='col-6 main-card'>
       <div className='col-3  cards'></div>
        <div className='col-3  cards'></div>
        <div className='col-3  cards'></div>
       </div>

       <div className='col-8 para'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam asperiores nobis modi dolore. Officia molestiae rem quis. Cum illum hic ad reprehenderit voluptates? Praesentium maiores, odio unde nostrum iure accusantium?
        Eligendi voluptas unde quia velit sit ratione nobis esse accusantium, aut eius explicabo cum voluptatem cupiditate recusandae possimus, tempore error sapiente. Vel maxime neque, molestiae quia unde eligendi aut? Tenetur!
        Ipsa maxime temporibus odit. Quos commodi nemo quo, praesentium dolores minus distinctio voluptas, expedita modi officiis illum nihil qui autem voluptatem facilis tempore molestiae omnis? Repellendus quisquam nihil sunt omnis.
        Molestiae consequatur accusantium veritatis officiis nisi, voluptatum sapiente provident sed nostrum odit natus facilis alias atque blanditiis recusandae distinctio, ex in facere quis ullam, error consequuntur dolorum dicta? Ut, iste.
        Nostrum iste veritatis repellat tempore quasi et fugit voluptas blanditiis dicta, nesciunt accusamus soluta mollitia provident a? Excepturi, placeat, est unde laboriosam ut facere quibusdam architecto iusto officia dolorem blanditiis!
        Magnam repellat possimus, nostrum sequi facere atque culpa quos ipsam, itaque, quia deserunt laboriosam in perspiciatis exercitationem laudantium! Labore, ad delectus minima quia minus doloremque odit doloribus maxime ea mollitia.
        Voluptates corrupti pariatur laboriosam voluptatem reiciendis corporis aut repellat, quos voluptas dolor, odit incidunt et rem dignissimos ad vitae molestias esse vero doloremque saepe, quis inventore velit. Sed, exercitationem magni!
        Molestiae optio maiores libero porro dolore cupiditate, dolorum, est ab recusandae non, modi expedita quasi! Provident aliquid eius atque aspernatur enim. Magnam hic libero, doloremque laboriosam eveniet distinctio commodi sed.
        Inventore ducimus libero sequi veniam iure accusamus facilis culpa adipisci nisi nemo quia aperiam tempore, minima quisquam cupiditate dolorum quasi voluptate illo deserunt eligendi odio, repellat nam iste laborum. Minima!
        Doloribus corporis reiciendis quia incidunt laboriosam suscipit perspiciatis sit optio similique hic nesciunt mollitia, debitis et, consequatur officia. Facilis modi natus voluptas aliquid nostrum id obcaecati quas odio qui dolorum!
       </div>
       <div className='footer col-8'></div>
    

    </div>
    <div className='col-3 sub-mains'>
    
          <div className='col-3 sub-main'>
          
        </div>
            <div className='title col-3 mt-5'></div>
        <div className='content d-flex'>
        <div className='image col-3 mt-5 mb-3'></div>
        <div className='text mt-5 '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor a, tempora itaque incidunt laboriosa eveniet doloribus impedit laborum veniam ipsa temporibus.
        </div>
        
        
        </div>
    </div>

    
      </Row>
    </Container>
    

 
  </>
    
   
  )
}

export default App
