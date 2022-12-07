import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBarT from "./components/Navbar";
import Users from "./Screens/Users/Users";
import NewUser from "./Screens/NewUser";
import Accounts from "./Screens/Accounts";
import NewAccount from "./Screens/NewAccount/NewAccount";



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
              <Route path="/users" element={<Users />} />
              <Route path="/newuser" element={<NewUser />} />
              <Route path="/accounts" element={<Accounts/>} />
              <Route path="/newaccount" element={<NewAccount/>} />



              <Route path="/"  />

              </Routes>
          </Container>
          </main>
        <footer bg="dark" variant="dark">
          <div className="text-center"  >All right is reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;