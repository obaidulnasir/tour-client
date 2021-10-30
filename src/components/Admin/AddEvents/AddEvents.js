import React from "react";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data);
      fetch('http://localhost:5000/addEvents', {
          method: 'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  };
  return (
    <div>
      <div className="container">
        <h3 className="text-center">Add an Events</h3>
        <div className="w-50 mx-auto text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="" placeholder="Events Name" {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("email", { required: true })}  placeholder="Email"/>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" value="Add Events"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
