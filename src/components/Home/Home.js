import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import background from "./5100.png";

const Home = () => {
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
  //Book service

  return (
    <div>
      {/* banner  */}
      <div>
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="banner-images d-flex align-items-center justify-content-center"
        >
          <div className="text-center">
            <h1 className="my-2 text-white fw-bolder ">Welcome to Travello</h1>
            {/* <input placeholder="Search" className="input-field border w-75" type="text" /> */}
            <button className="btn w-75 mx-auto mt-3 search-button bg-info fw-bold">
              Explore
            </button>
          </div>
        </div>
      </div>
      {/* popular destination  */}
      <div className="container">
        <div className="row my-5">
          <div className="col w-50 mx-auto text-center">
            <h3 className="fw-bold">Popular Destination</h3>
            <p className="w-50 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          {allEvents.map((events) => (
            <div key={events._id} className="col-md-4 border p-4">
                <img width="250px" src={events.img_link} alt="" rounded className="img-fluid"/>
              <h5>{events.placeName}</h5>
              <p>{events.description.slice(0, 100)}..</p>
              <Link to={`/service/${events._id}`}>
                <button onClick={() => singleService(events._id)}>
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container my-5">
        <div className="row my-5">
          <div className="col-md-4">
            <div className="text-center">
              <img
                className="my-2"
                width="150px"
                src="https://img.icons8.com/ios/50/000000/bus.png"
                alt=""
              />
              <h3 my-1>Comfortable Journey</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                repellaae?
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <img
                className="my-2"
                width="150px"
                src="https://img.icons8.com/ios/50/000000/bus.png"
                alt=""
              />
              <h3 my-1>Comfortable Journey</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                repellaae?
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <img
                className="my-2"
                width="150px"
                src="https://img.icons8.com/ios/50/000000/bus.png"
                alt=""
              />
              <h3 my-1>Comfortable Journey</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                repellaae?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark my-5">
        <div className="container my-5">
          <div className="row w-50 mx-auto text-center py-5">
            <div className="col">
              <h2 className="text-white">Subscribe Our Newsletter</h2>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
                <br />
                <button className="text-center btn btn-info">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
