import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";

const Service = () => {
    const {user}= useFirebase()
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState:{ errors },
  } = useForm();

  //on submit
  const onSubmit = (data) => {
      fetch ('https://chilling-beast-37049.herokuapp.com/booking', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
      .then(res=> res.json())
      .then(data=> console.log(data))
  }

  console.log(id);

  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://chilling-beast-37049.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h2>{service?.title}</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              {/* form  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user?.displayName} {...register("name")} />
              <br />
              <input value={user?.email} {...register(("email"))} />
              <br />
              <input type="datetime-local" {...register(("time"))} defaultValue={Date()}  />
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <textarea {...register(("address"))} cols="10" rows="2"></textarea>
              <br />
              <input type="submit" value="Book" />
            </form>
          </div>
          {/* an image  */}
          <div className="col-md-6">
              <h4>an image here</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
