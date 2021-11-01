import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";

const MyOrder = () => {
  const {user} = useFirebase();
  const [order, setOrder]= useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setOrder(data));
  },[user?.email])
  return (
    <div>
      <div>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          {order?.map((or, index) => (
            <tbody>
              <tr>
                <td>{index+1}</td>
                <td>{or?.name}</td>
                <td>{or?.email}</td>
                <td>{or?.address}</td>
                <button className="btn bg-danger p-2">Delete</button>
              </tr>
            </tbody>
           ))}
        </Table>
      </div>
    </div>
  );
};

export default MyOrder;