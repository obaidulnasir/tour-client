import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllPackage = () => {
    const [allEvents, setAllEvents] = useState([]);
  const singleService = (id) => {
    console.log(id);
    fetch(`https://chilling-beast-37049.herokuapp.com/service/${id}`, {
      method: "POST",
      // headers: { "content-type": "application/json" },
      // body: JSON.stringify({id})
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch("https://chilling-beast-37049.herokuapp.com/allEvents")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, []);
    return (
        <div className="mt-5">
            <div className="container mt-3">
                <div className="row">
                {allEvents.map((events) => (
            <div key={events._id} className="col-md-4 border p-4">
                <img width="250px" src={events.img_link} alt="" rounded className="img-fluid"/>
              <h5>{events.placeName}</h5>
              <p>{events.description.slice(0, 100)}..</p>
              <Link to={`/service/${events._id}`}>
                <button className="btn btn-info" onClick={() => singleService(events._id)}>
                  Book Now
                </button>
              </Link>
            </div>
          ))}
                </div>
            </div>
        </div>
    );
};

export default AllPackage;