import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBarT from "./components/Navbar";
import Users from "./Screens/Users/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site">
        <header>
          <NavBarT></NavBarT>
        </header>
        <main>
          <Container className="mt-3">
          <Routes>
              <Route path="/user" element={<Users />} />
              <Route path="/"  />

              </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All right is reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
