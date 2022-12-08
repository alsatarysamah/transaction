import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  DropdownButton,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

//id:uuidv4()

export default function NewTransaction() {
  
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState();

  const { state } = useLocation();


  const [isCredit, setIsCredit] = useState(false);

  const onSwitchAction = () => {
    setIsCredit(!isCredit);
    console.log(isCredit);
  };
  
  const submitHandler = (e) => {
    e.preventDefault();

    // Server_DateTime]
    // [DateTime_UTC]

    axios
      .post("http://localhost:5050/transaction", {
        currency: currency,
        userId: state.userId,
        amount: amount,
        Is_Credit: isCredit,
        accountId: state.accountId,
        dateTime_UTC: new Date().toUTCString(),
        
      })
      .then((data) => {
        toast.success(
          `New Transaction is added for userID=${state.userId} & AccountID ${state.ammountId}`
        );
      })
      .catch((e) => {
        toast.error("Fill all the field ");

        console.log(e);
      });
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={5} xs={12}>
            <div className=""></div>
            <ToastContainer />
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center  ">
                    New Transaction
                  </h2>
                  <div className="mb-1">
                    <Form onSubmit={submitHandler}>
                      <Form.Group className="my-3" controlId="Name">
                        <Form.Label className="text-center">Amount</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Amount"
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Currency
                        </Form.Label>
                        <InputGroup className="mb-3">
                          <DropdownButton
                            variant="outline-secondary"
                            title="Currency                 "
                            id="input-group-dropdown-1"
                            onSelect={(e) => {
                              setCurrency(e);
                            }}
                          >
                            <Dropdown.Item eventKey="ERU">EUR</Dropdown.Item>
                            <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                            <Dropdown.Item eventKey="JOD">JOD</Dropdown.Item>
                          </DropdownButton>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className="mx-1">
                        <Form.Switch className=" form-switch-xl"
                          onChange={onSwitchAction}
                          id="custom-switch"
                          label="Is Credit"
                          checked={isCredit}
                         
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
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
