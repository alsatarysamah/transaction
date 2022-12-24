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

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age<18 || age >100)
    toast.error("Age between 17 - 100")
    return age;
}
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({img});
if(!fName||!lName||!gender||!birthDate||!status)
toast.error("Fill all the feild");
else
    axios
      .post("https://mstart.cleverapps.io/user", {
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
                            getAge(e.target.value)
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
