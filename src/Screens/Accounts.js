"use strict";

import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";

export default function Accounts(props) {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState(
    localStorage.getItem("accounts") ? localStorage.getItem("accounts") : []
  );
  /** */
  const columns = [
    { dataField: "id", text: "Id", sort: true ,width:100},
    { dataField: "userId", text: "userId", sort: true },

    { dataField: "account_Number", text: "Account Number", sort: true },
    { dataField: "balance", text: "Balance", sort: true },
    { dataField: "available_Balance", text: "Available Balance", sort: true },
    { dataField: "currency", text: "Currency", sort: true },
    { dataField: "status", text: "Status", sort: true },
    { dataField: "dateTime_UTC", text: "DateTime UTC", sort: true },
    {
      dataField: "update_DateTime_UTC",
      text: "Update DateTime UTC",
      sort: true,
    },
    { dataField: "server_DateTime", text: "Server DateTime", sort: true },
  ];
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5050/account");
      localStorage.setItem("accounts", res.data);
      setAccounts(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 >Accounts</h1>
      <div className="d-flex  justify-content-end my-3">
        {/* <Button variant="primary" size="mg" onClick={()=>{navigate("/newaccount")}}>
          New Account
        </Button> */}
      </div>
      <div className="table-horiz-scroll">
        <Table data={accounts} columns={columns} />
      </div>
    </div>
  );
}
//defaultSorted={defaultSorted}
//
