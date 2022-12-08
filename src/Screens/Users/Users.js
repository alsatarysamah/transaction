"use strict";
import "./Users.css";
import Table from "../../components/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users(props) {
  const [users, setUsers] = useState(
    localStorage.getItem("users") ? localStorage.getItem("users") : []
  );
  const navigate = useNavigate();

 const handleDelete =(id)=>{
  console.log("delete");
  axios.delete(`http://localhost:5050/user/${id}`).then ((e)=>{})
 }

  const addTransaction = (row) => {
    navigate("/newaccount", { state: { user: row } });
  };
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
  const deleteFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button onClick={()=>handleDelete(row.id)} >
     <i class="fa fa-trash " ></i>
</Button>
    );
  };
  const imageFormatter = (cell, row, rowIndex, formatExtraData) => {
    return <img src={row.img} className="img-fluid rounded img-th " size="sm"></img>;
  };
 
  const columns = [
    { dataField: "id", text: "Id", sort: true, width: 100 },
    { dataField: "addAccount", text: "Add Account", formatter: linkFollow },
    { dataField: "img", text: "Image", formatter: imageFormatter },
    { dataField: "first_Name", text: "First Name", sort: true },
    { dataField: "last_Name", text: "Last Name", sort: true },
    { dataField: "gender", text: "Gender", sort: true },
    { dataField: "status", text: "Status", sort: true },
    { dataField: "delete", text: "Delete", formatter: deleteFormatter },

    { dataField: "date_Of_Birth", text: "Birth Date", sort: true },
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
      const res = await axios.get("http://localhost:5050/user");
      localStorage.setItem("users", res.data);
      setUsers(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="my-5">
      <h1>Users</h1>
      <div className="d-flex  justify-content-end my-3">
        <Button
          variant="primary"
          size="mg"
          onClick={() => {
            navigate("/newuser");
          }}
        >
          New User
        </Button>
      </div>
      <div className="table-horiz-scroll">
        <Table data={users} columns={columns} />
      </div>
    </div>
  );
}
//defaultSorted={defaultSorted}
//
