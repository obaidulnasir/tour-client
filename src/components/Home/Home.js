import React, { useState, useEffect } from 'react';
import "./Home.css"

const Home = () => {
    const [allEvents, setAllEvents]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/allEvents")
        .then(res => res.json())
        .then(data => setAllEvents(data));
    },[])
    
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
                    <button className="btn btn-warning">Button</button>
                </div>)
            }
            </div>
           </div>
        </div>
    );
};

export default Home;