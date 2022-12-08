import axios from "axios";
import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form, Image } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function NewUser() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState();
  const [status, setStatus] = useState();
  const [img, setImg] = useState("data:image/png;base64,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")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({img});
if(!fName||!lName||!gender||!birthDate||!status)
toast.error("Fill all the feild");
else
    axios
      .post("http://localhost:5050/user", {
        first_Name: fName,
        last_Name: lName,
        gender: gender,
        status: status,
        date_Of_Birth: birthDate,
        dateTime_UTC: new Date().toUTCString(),
        img:img

      })
      .then((data) => {
        toast.success("New user is added");
      })
      .catch((e) => {
        console.log(e);
        // toast.error("Fill all the feild");
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
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Imag URL
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Image URL"
                          onChange={(e) => {setImg(e.target.value);
                          console.log({img});
                          }}
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