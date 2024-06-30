import { Container, Nav, Navbar } from 'react-bootstrap';

export const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='light'
        data-bs-theme='light'
      >
        <Container>
          <Navbar.Brand href='#home'>
            <img src='./src/assets/logo.svg' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav className='gap-4'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#menu'>Menu</Nav.Link>
              <Nav.Link href='#reservations'>Reservations</Nav.Link>
              <Nav.Link href='#order-online'>Order Online</Nav.Link>
              <Nav.Link href='#login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
