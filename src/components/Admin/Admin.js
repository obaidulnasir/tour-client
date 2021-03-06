import React, { useState } from "react";
import MyOrder from "../MyOrder/MyOrder";
import AddEvents from "./AddEvents/AddEvents";
import ManageEvents from "./ManageEvents/ManageEvents";

const Admin = () => {
    const [control, setControl]= useState("addTraveller")
  return (
    <div>
      <div className="container">
        <div className="row mt-2">
          <div className="col py-2">
            <h2 className="text-center">Dashboard</h2>
            <div className="btn-group" aria-label="Basic outlined example">
              <button type="button" onClick={()=>setControl('addTraveller')} className="btn btn-outline-info">My Order</button>
              <button type="button" onClick={()=>setControl('addEvents')} className="btn btn-outline-success">Add Events</button>
              <button type="button" onClick={()=>setControl('manageEvents')} className="btn btn-outline-warning">Manage Events</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
            <div className="col">
                {control === "addTraveller" && <MyOrder></MyOrder>}
                {control === "addEvents" && <AddEvents></AddEvents>}
                {control === "manageEvents" && <ManageEvents></ManageEvents>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
