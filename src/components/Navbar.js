import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavBar from "./components/Navbar/Navbar";
export default function NavBarT() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Bank</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/user">Users</Nav.Link>
            <Nav.Link href="#features">Accounts</Nav.Link>
            <Nav.Link href="#pricing">Transactions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
