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
      fetch('https://chilling-beast-37049.herokuapp.com/addEvents', {
          method: 'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <div>
      <div className="container">
        <h3 className="text-center">Add an Events</h3>
        <div className="w-50 mx-auto text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
          
            <input defaultValue="" placeholder="Events Name" {...register("name", {required:true})} />
              <br />
            <input {...register("email", { required: true })}  placeholder="Email"/>
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input defaultValue="" {...register("img_link")} placeholder="Image Link"/>
              <br />
              <textarea  {...register("description")} placeholder="Description " cols="15" rows="1"></textarea>
     <br />
            <input type="submit" value="Add Events"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
