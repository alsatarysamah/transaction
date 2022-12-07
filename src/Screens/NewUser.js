import axios from "axios";
import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function NewUser() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState();
  const [status, setStatus] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5050/user", {
        first_Name: fName,
        last_Name: lName,
        gender: gender,
        status: status,
        date_Of_Birth: birthDate,
      })
      .then((data) => {
        toast.success("New user is added");
      })
      .catch((e) => {
        toast.error("Fill all the feild");
      });
  };

  return (
    <div>
      <Container>
        <ToastContainer />
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className=""></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center  ">New User</h2>
                  <div className="mb-3">
                    <Form onSubmit={submitHandler}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          onChange={(e) => setFName(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          onChange={(e) => setLName(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                          value="female"
                          type="radio"
                          aria-label="radio 2"
                          name="gender"
                          label="Female"
                          onChange={(e) => {
                            setGender(e.target.getAttribute("value"));
                          }}
                        />
                        <Form.Check
                          value="male"
                          type="radio"
                          aria-label="radio 2"
                          name="gender"
                          label="Male"
                          onChange={(e) => {
                            setGender(e.target.getAttribute("value"));
                          }}

                          //   checked={kindOfStand === "food"}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Status</Form.Label>
                        <Form.Check
                          value="Single"
                          type="radio"
                          aria-label="radio 2"
                          label="Single"
                          name="status"
                          onChange={(e) => {
                            setStatus(e.target.getAttribute("value"));
                          }}
                          //   checked={kindOfStand === "food"}
                        />
                        <Form.Check
                          value="Married"
                          type="radio"
                          aria-label="radio 2"
                          label="Married"
                          name="status"
                          onChange={(e) => {
                            setStatus(e.target.getAttribute("value"));
                          }}
                          //   onChange={handleChange}
                          //   checked={kindOfStand === "food"}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>Date of Birth</Form.Label>

                        <Form.Control
                          type="date"
                          onChange={(e) => {
                            setBirthDate(e.target.value);
                          }}
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create User
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
