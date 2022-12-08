"use strict";

import Table from "../components/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Transaction(props) {

  const [transactions, setTransactions] = useState(
    localStorage.getItem("transactions")
      ? localStorage.getItem("transactions")
      : []
  );
  const navigate = useNavigate();

  //handle add transaction related to the spacific userId and AccountId
  const addTransaction = (row)=>{
    navigate('/newtransaction', { state:{userId:row.userId,accountId:row.accountId} })
  }

  //add btn to the cell
  const linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        onClick={() => {
          addTransaction(row);
        }}
      >
       Add
      </Button>
    );
  };
  const columns = [
    { dataField: "id", text: "Id", sort: true, width: 100 },
    { dataField: "userId", text: "User ID", sort: true },
    { dataField: "accountId", text: "Account ID", sort: true },
    { dataField: "addTransaction", text:"Add Trans" , formatter: linkFollow,},
    { dataField: "amount", text: "Amount", sort: true },
    { dataField: "currency", text: "Currency", sort: true },
    { dataField: "Is_Credit", text: "Is Credit", sort: true },
    { dataField: "dateTime_UTC", text: "DateTime UTC", sort: true },
    { dataField: "server_DateTime", text: "Server DateTime", sort: true },
  ];
 
 
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mstart.up.railway.app/transaction");
      localStorage.setItem("transactions", res.data);
      setTransactions(res.data);
     

    };

    fetchData();
  
  }, []);
  return (
    <div>
      <h1 >Transaction</h1>
     
      <div className="table-horiz-scroll my-3">
     <Table data={transactions} columns={columns} /> 
      </div>
    </div>
  );
}
//defaultSorted={defaultSorted}
//
