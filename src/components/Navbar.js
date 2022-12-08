import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavBar from "./components/Navbar/Navbar";
export default function NavBarT() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/transaction#/">Bank</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/transaction#/users">Users</Nav.Link>
            <Nav.Link href="/transaction#/accounts">Accounts</Nav.Link>
            <Nav.Link href="/transaction#/trans">Transactions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
