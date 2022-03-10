import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://serene-wildwood-97102.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Sucessfully Product Added");
        reset();
      });
  };
  return (
    <div className="">
      <div className="text-center ">
        <h4 className="text-info">Add Products</h4>
        <div className="my-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control shadow"
          >
            <input
              {...register("name")}
              placeholder="Product Name"
              className="form-control my-2"
            />
            <input
              {...register("img")}
              placeholder="Product Img Link"
              className="form-control my-2"
            />
            <textarea
              {...register("description")}
              placeholder="Product Description"
              className="form-control my-2"
            />
            <input
              {...register("price")}
              placeholder="Product Price"
              className="form-control my-2"
            />
            <input
              type="submit"
              value="Create Feature"
              className="btn btn-info text-light"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
