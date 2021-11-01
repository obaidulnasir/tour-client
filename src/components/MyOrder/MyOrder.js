import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";

const MyOrder = () => {
  const {user} = useFirebase();
  const [order, setOrder]= useState([]);
  const [control, setControl] = useState(false);

  useEffect(()=>{
    fetch(`https://chilling-beast-37049.herokuapp.com/myOrder/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setOrder(data));
  },[user?.email, order]);
  
  // delete order
  const handleDeleteOrder = (id)=> {
    console.log(id)
    fetch(`https://chilling-beast-37049.herokuapp.com/deleteOrder/${id}`, {
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
              <th>Package</th>
              <th>Action</th>
            </tr>
          </thead>
          {order?.map((or, index) => (
            <tbody>
              <tr>
                <td>{index+1}</td>
                <td>{or?.name}</td>
                <td>{or?.email}</td>
                <td>{or?.service}</td>
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