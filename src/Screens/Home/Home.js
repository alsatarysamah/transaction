import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  return (
  
    <Row>
      <div className="cards ">
        {/* <Col sm={6} md={4} lg={3} className="mb-3"> */}
        <Card style={{ width: "18rem" }} className="my-3 shadow ">
          <Card.Img
            variant="top"
            src="data:image/png;base64,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"
          />
          <Card.Body>
            <Card.Title>
              <strong>Users</strong>
            </Card.Title>

            <Button variant="outline-primary" size="md" className="mx-3 shadow" onClick={()=>{navigate("/users")}}>
              List
            </Button>
            <Button variant="outline-primary" size="md" className="mx-3 shadow" onClick={()=>{navigate("/newuser")}}>
              New User
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="my-3 shadow">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOQakUz0g4DVNPBUbatGJCH-9amKaR9m6-w&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>
              <strong>Accounts</strong>
            </Card.Title>

            <Button variant="outline-primary" size="md" className="mx-3 shadow" onClick={()=>{navigate("/accounts")}}>
              List
            </Button>

          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="my-3 shadow">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqKMGaP3SF5AULU9GcI_EKwUwHDl5Ft3xcA&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>
              <strong>Transactions</strong>
            </Card.Title>

            <Button variant="outline-primary" size="md" className="mx-3 shadow" onClick={()=>{navigate("/transaction")}}>
              List
            </Button>
     
          </Card.Body>
        </Card>
        {/* </Col> */}
      </div>
    </Row>
  );
}

export default Home;
