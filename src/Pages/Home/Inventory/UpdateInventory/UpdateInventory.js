import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useInventoryDetails from "../../../../hooks/useInventoryDetails";

const UpdateInventory = () => {
  const { updateId } = useParams();
  const [product] = useInventoryDetails(updateId);
  console.log(product);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://furniture-9cwv.onrender.com/furniture/${updateId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((furniture) => {
        if (furniture) {
          toast("Update Your product");
          console.log(furniture);
        } else {
          toast("please update product info!");
        }
      });
    reset();
  };

  return (
    <div className="container product-details my-5">
      <div className="col-5">
        <h2 className="text-center mt-3">
          Previous <span className="title-color">Information</span>
        </h2>
        <div className="border p-4">
          <img className="w-75" src={product.img} alt="" />
          <h5>{product.name}</h5>
          <h5 className="price">${product.price}</h5>
          <h5>Supplier: {product.supplier}</h5>
          <p className="description">{product.description}</p>
        </div>
      </div>
      <div className="col-7">
        <div className="w-50 mx-auto my-5">
          <h2 className="text-center my-3">
            Update <span className="title-color">Inventory</span>
          </h2>
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="mb-2 p-2"
              placeholder="Product Name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              className="mb-2 p-2"
              placeholder="Supplier Name"
              {...register("supplier")}
            />
            <input
              className="mb-2 p-2"
              placeholder="Description"
              {...register("description")}
            />
            <input
              className="mb-2 p-2"
              placeholder="Product Quantity"
              type="number"
              {...register("quantity")}
            />
            <input
              className="mb-2 p-2"
              placeholder="Price"
              type="number"
              {...register("price")}
            />
            <input
              className="mb-2 p-2"
              placeholder="image url"
              type="text"
              {...register("img")}
            />
            <input
              className="mb-2 p-2 submit-btn"
              value="Add Item"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInventory;
