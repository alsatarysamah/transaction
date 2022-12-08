import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBarT from "./components/Navbar";
import Users from "./Screens/Users/Users";
import NewUser from "./Screens/NewUser";
import Accounts from "./Screens/Accounts";
import NewAccount from "./Screens/NewAccount/NewAccount";
import Transaction from "./Screens/Transaction";
import NewTransaction from "./Screens/NewTransaction";
import Home from "./Screens/Home/Home";



function App() {
  return (

      <div className="d-flex flex-column site">
        <header>
          <NavBarT></NavBarT>
        </header>
        <main>
          <Container className="mt-3">
          <Routes>
              <Route index path="/users" element={<Users />} />
              <Route index path="/newuser" element={<NewUser />} />
              <Route index path="/accounts" element={<Accounts/>} />
              <Route index path="/newaccount" element={<NewAccount/>} />
              <Route index path="/trans" element={<Transaction/>} />
              <Route index path="/newtransaction" element={<NewTransaction/>} />
              <Route index path="/"  element={<Home />} />

              </Routes>
              
          </Container>
          </main>
        <footer bg="dark" variant="dark">
          <div className="text-center"  >All right is reserved</div>
        </footer>
      </div>
      
  );
}

export default App;