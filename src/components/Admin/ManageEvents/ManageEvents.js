import React, { useState } from 'react';

const ManageEvents = () => {
    const [events, setEvents]= useState([]);
    fetch("https://chilling-beast-37049.herokuapp.com/allEvents")
    .then(res=> res.json())
    .then(data=> setEvents(data))
    return (
        <div>
            this is manage Events
            <h3>total data: {events.length}</h3>
        </div>
    );
};

export default ManageEvents;