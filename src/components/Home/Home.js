import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    
    const [allEvents, setAllEvents]= useState([]);
    const singleService = (id)=>{
        console.log(id)
        fetch(`http://localhost:5000/service/${id}`, {
            method: 'POST',
            // headers: { "content-type": "application/json" },
            // body: JSON.stringify({id})
        })
        .then(res => res.json())
          .then(data => console.log(data));

    }

    useEffect(()=>{
        fetch("https://chilling-beast-37049.herokuapp.com/allEvents")
        .then(res => res.json())
        .then(data => setAllEvents(data));
    },[]);
    //Book service
   
    
    return (
        <div>
           <div className="banner bg-success">
                <div className="container">
                    <div className="row w-50 mx-auto">
                        <h2>Welcome Traveller</h2>
                    </div>
                </div>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col w-50 mx-auto text-center">
                       <h3>Popular Destination</h3>
                       <p className="w-50 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nulla dolores, placeat rerum dignissimos accusantium. Reiciendis delectus ratione iste odio! Incidunt error fuga, minima cupiditate numquam officiis natus quasi adipisci!</p>
                   </div>
               </div>
           </div>
           <div className="container">
            <div className="row">
            {
                allEvents.slice(1, 10).map(events=><div key= {events._id} className="col-md-4">
                    <h5>{events.title}</h5>
                    <p>{events.description}</p>
                   <Link to={`/service/${events._id}`}><button onClick={()=>singleService(events._id)}>Book Now</button></Link>
                </div>)
            }
            </div>
           </div>
        </div>
    );
};

export default Home;