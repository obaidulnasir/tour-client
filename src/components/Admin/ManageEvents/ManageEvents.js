import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("https://chilling-beast-37049.herokuapp.com/allEvents")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [events]);

  //Delete Events
  const handleDelete = (id) => {
      console.log(id)
    fetch(`https://chilling-beast-37049.herokuapp.com/deleteEvent/${id}`, {
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
  };
  return (
    <div>
      this is manage Events
      <h3>total data: {events.length}</h3>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {events?.map((en, index) => (
              
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{en?.title}</td>
                <td>{en?.img}</td>
                <td>{en?.date}</td>
                <button
                  onClick={() => {
                    handleDelete(en._id);
                  }}
                  className="btn bg-danger p-2"
                >
                  Delete
                </button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageEvents;
