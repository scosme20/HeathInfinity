import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'; // Importe o componente de linha

function OffcanvasExample() {
  return (
    <>
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="offcanvasNavbarDropdown-expand"
                  style={{ color: 'white' }}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Carousel fade className='m-2'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.introba.com/sites/default/files/styles/b1_l_16x9/public/image/2022-11/Houston-Methodist-Hospital-Institute-for-Technology-Innovation_Education1920x1080.jpg?h=d1cb525d&itok=l4fA8A7L"
            alt="First slide"
            width={"500"}
            height={"500"}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://asdf.amerins.com/uploads/Hospital_General_de_Massachusetts_488eabdcf1.jpeg"
            alt="Second slide"
            width={"500"}
            height={"500"}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hospitalmoriah.com.br/wp-content/uploads/2020/06/moriah-3254.jpg"
            alt="Third slide"
            width={"500"}
            height={"500"}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Utilize um componente de linha para exibir os cards lado a lado */}
      <Row className="d-flex m-2">
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src="https://fcmsantacasasp.edu.br/blog/wp-content/uploads/2022/03/especialista-ou-generalista.jpg"  width={"200"} height={"200"} className='mt-2' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src="https://helptechnology.com.br/wp-content/uploads/2022/05/banner-1.jpg" width={"200"} height={"200"} className='mt-2' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src="https://prodoctor.net/blog/wp-content/uploads/2021/08/SAIBA-COMO-A-TECNOLOGIA-PODE-REDUZIR-A-BUROCRACIA-NO-SEU-CONSULTORIO.png"  width={"200"} height={"200"} className='mt-2'  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src="https://img.freepik.com/fotos-premium/recepcao-da-zona-de-recepcao-do-consultorio-medico-com-dispositivos-tecnologicos-material-de-escritorio-e-utilitarios-medicos-area-de-recepcao-do-paciente-sem-funcionarios-atendendo-a-ninguem-ninguem-no-lobby-da-clinica_482257-52940.jpg"  width={"200"} height={"200"} className='mt-2'  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
      <footer className="bg-dark text-light text-center py-3">
      Este é o footer
    </footer>
    </div>
    </>
  );
}

export default OffcanvasExample;













