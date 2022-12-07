

import "./NewAccount.css"
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


//id:uuidv4()

export default function NewAccount() {
  const [accountNum, setAccountNum] = useState();
  const [balance, setBalance] = useState();
  const [availableBalance, setAvailableBalance] = useState();
  const [currency, setCurrency] = useState();
  const [status, setStatus] = useState();
  const [userIdsArr, setUserIdsArr] = useState([]);
  const [userId, setUserId] = useState([]);


  /**accountNum[Account_Number]
[Balance]
[Available_Balance]
[Currency]
 */

  const submitHandler = (e) => {
    e.preventDefault();
    

    axios
      .post("http://localhost:5050/account", {
        status: status,
        account_Number: accountNum,
        balance: balance,
        available_Balance: availableBalance,
        currency: currency,
        userId: userId,
      })
      .then((data) => {
        
        toast.success(`New account is added for user ID=${userId}`)
      })
      .catch((e) => {
        toast.error("Fill all the field ");

        
        console.log(e);
      });
  };
  useEffect(()=>{
    
let arr=[];
    axios.get("http://localhost:5050/user").then((res) => {
       
        res.data.forEach(element => {
            userIdsArr.push(element.id)  
        });
        setUserIdsArr(userIdsArr);
        console.log({userIdsArr});
      });
  },[])
  /**Account_Number]
[Balance]
[Available_Balance]
[Currency]
[Status]
 */
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
                  <h2 className="fw-bold mb-2 text-center  ">New Account</h2>
                  <div className="mb-1">
                    <Form onSubmit={submitHandler}>
                    <InputGroup className="mb-3">
                          <DropdownButton
                            variant="outline-secondary"
                            title="User ID                 " 
                            id="input-group-dropdown-2"
                            onSelect={(e) => {
                              console.log(e);
                              setUserId(e);
                            }}
                          >
                           
                            {userIdsArr?userIdsArr.map((element)=> (<Dropdown.Item eventKey={element}>{element}</Dropdown.Item>)):null}
                           
                          </DropdownButton>
                          <Form.Label className="text-center mx-3">
                        {userId}
                        </Form.Label>
                        </InputGroup>
                      <Form.Group className="my-3" controlId="Name">
                        <Form.Label className="text-center">
                          Account Number
                        </Form.Label>
                        <Button
                          className="mx-5"
                          onClick={() => {
                            setAccountNum(
                              Math.floor(Math.random() * 10000) + 1
                            );
                          }}
                        >
                          Generate
                        </Button>
                        <Form.Label className="text-center">
                          {accountNum}
                        </Form.Label>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Balance</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Balance"
                          onChange={(e) => setBalance(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Available Balance
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Available Balance"
                          onChange={(e) => setAvailableBalance(e.target.value)}
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
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Status</Form.Label>
                        <Form.Check
                          value="active"
                          type="radio"
                          aria-label="radio 2"
                          name="status"
                          label="Active"
                          onChange={(e) => {
                            setStatus(e.target.getAttribute("value"));
                          }}
                        />
                        <Form.Check
                          value="inactive"
                          type="radio"
                          aria-label="radio 2"
                          name="status"
                          label="Inactive"
                          onChange={(e) => {
                            setStatus(e.target.getAttribute("value"));
                          }}

                          //   checked={kindOfStand === "food"}
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
