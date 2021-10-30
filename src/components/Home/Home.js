import React from 'react';
import "./Home.css"

const Home = () => {
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
        </div>
    );
};

export default Home;