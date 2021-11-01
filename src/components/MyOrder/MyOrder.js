import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";

const MyOrder = () => {
  const {user} = useFirebase();
  const [order, setOrder]= useState([]);
  const [control, setControl] = useState(false);

  useEffect(()=>{
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setOrder(data));
  },[user?.email, order]);
  
  // delete order
  const handleDeleteOrder = (id)=> {
    console.log(id)
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        } else {
          setControl(false);
        }
      });
    console.log(id);
  }

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
                <button onClick={()=>{handleDeleteOrder(or._id)}} className="btn bg-danger p-2">Delete</button>
              </tr>
            </tbody>
           ))}
        </Table>
      </div>
    </div>
  );
};

export default MyOrder;