import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";

const Service = () => {
  const { user } = useFirebase();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //on submit
  const onSubmit = (data) => {
    fetch("https://chilling-beast-37049.herokuapp.com/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
       if(data.insertedId){
        alert("Booking trip successfully!")
        console.log(data)
       }
      });
  };

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
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            {/* form  */}
            {/* <form onSubmit={handleSubmit(onSubmit)}>
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
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Name</label>
                  <input
                    value={user?.displayName}
                    {...register("name")}
                    type="text"
                    class="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="form-group w-50">
                <label>Email</label>
                <input
                  value={user?.email}
                  {...register("email")}
                  type="email"
                  class="form-control"
                  placeholder="email"
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <div class="form-group col-md-6">
                  <label for="inputEmail4">Package</label>
                  <input
                    value={service?.placeName}
                    {...register("service")}
                    type="text"
                    class="form-control"
                    placeholder="service"
                  />
                </div>
              <div class="form-group w-50">
                <label>Date</label>
                <input
                  {...register(("time"))} defaultValue={Date()}
                  type="date"
                  class="form-control"
                  placeholder="email"
                />
              </div>
              <div class="form-group w-50">
                <label for="inputAddress2">Address</label>
                <textarea
                 {...register(("address"))}
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-2">
                Book Now
              </button>
            </form>
          </div>
          {/* an image  */}
          <div className="col-md-6">
          
            <h3>{service.placeName}</h3>
            <img className="img-fluid mt-2" width="350px" src={service.img_link} alt="trip-img" />
            <p className="mt-2">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
