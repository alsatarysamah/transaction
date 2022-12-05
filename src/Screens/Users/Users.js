"use strict";
import "./Users.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Table from "../../components/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Users(props) {


  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "first_Name", text: "First Name", sort: true },
    { dataField: "last_Name", text: "Last Name", sort: true },
    { dataField: "gender", text: "Gender", sort: true },
    { dataField: "status", text: "Status", sort: true },
    { dataField: "date_Of_Birth", text: "Birth Date", sort: true },
    { dataField: "dateTime_UTC", text: "DateTime UTC", sort: true },
    { dataField: "update_DateTime_UTC", text: "Update DateTime UTC", sort: true },
    { dataField: "server_DateTime", text: "Server DateTime", sort: true },






    // { dataField: "animal", text: "Animal", sort: true },
  ];
  /**{
  "id": 3,
  "server_DateTime": null,
  "dateTime_UTC": null,
  "update_DateTime_UTC": null,
  "first_Name": null,
  "last_Name": null,
  "status": null,
  "gender": null,
  "date_Of_Birth": null
} */
   const [users, setUsers] = useState(localStorage.getItem("users")?localStorage.getItem("users"):[]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5050/user");
      localStorage.setItem("users",res.data)
      setUsers(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <div className="d-flex  justify-content-end my-3">
        <Button variant="primary" size="mg">
          New User
        </Button>
      </div>
      <div className="table-horiz-scroll" >
      <Table data={users} columns={columns} />
    </div>
    </div>
  );
}
//defaultSorted={defaultSorted}
