import React from "react";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://chilling-beast-37049.herokuapp.com/addEvents", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          alert("add event successfully!")
          reset()
        }
      });
  };
  return (
    <div>
      <div className="container">
        <h3 className="text-center">Add an Events</h3>
        <div className="w-75 mx-auto">
          
           <form onSubmit={handleSubmit(onSubmit)} className="w-100">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Place</label>
                <input {...register("placeName", {required:true})}  type="text" class="form-control" placeholder="Place" />
              </div>
            </div>
            <div class="form-group w-50">
              <label>City and Country</label>
              <input {...register("name")} type="text" class="form-control" placeholder="city" />
            </div>
            <div class="form-group w-50">
              <label for="inputAddress">Image Link</label>
              <input {...register("img_link")} type="text" class="form-control" placeholder="Image bb link" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div class="form-group w-50">
              <label for="inputAddress2">Description</label>
              <textarea  {...register("description")} className="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-2">
              Add
            </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
