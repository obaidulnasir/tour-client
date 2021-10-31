import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Service = () => {
    const {id}=useParams()
    console.log(id)
    const [service, setService] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
            this is service page{service.title}
        </div>
    );
};

export default Service;