import React from 'react';
import { useForm } from "react-hook-form";

const AddTraveller = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
          console.log(data);
          fetch('http://localhost:5000/addTraveller', {
              method: 'POST',
              headers: { "content-type": "application/json" },
              body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => console.log(data));
      };
    return (
        <div>
      <div className="container">
        <h3 className="text-center">Add a Traveller</h3>
        <div className="w-50 mx-auto text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
          
            <input defaultValue="" placeholder="Traveller Name" {...register("name", {required:true})} />
              <br />
            <input {...register("email", { required: true })}  placeholder="Email"/>
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input type="submit" value="Add traveller"/>

          </form>
        </div>
      </div>
    </div>
    );
};

export default AddTraveller;