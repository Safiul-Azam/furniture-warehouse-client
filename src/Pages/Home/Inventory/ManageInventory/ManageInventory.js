import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventory from "../../../../hooks/useInventory";
import ManageTable from "../ManageTable/ManageTable";

const ManageInventory = () => {
  const [products, setProducts] = useInventory();
  const navigate = useNavigate();
  const handleRemoveItem = (id) => {
    const proceed = window.confirm("are you sure");
    if (proceed) {
      const url = `https://furniture-9cwv.onrender.com/furniture/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  const handleUpdateItem = (id) => {
    navigate("/updateInventory/" + id);
  };
  return (
    <div className="container">
      <h3 className="text-center my-4">
        Manage <span className="title-color">Inventory</span>
      </h3>
      <div>
        {products.map((product) => (
          <ManageTable
            key={product._id}
            product={product}
            handleRemoveItem={handleRemoveItem}
            handleUpdateItem={handleUpdateItem}
          ></ManageTable>
        ))}
      </div>
      <div className="text-center my-4 ">
        <Button
          onClick={() => navigate("/addItem")}
          className="rounded-0 my-3 px-5"
          variant="dark"
        >
          All Inventory
        </Button>
      </div>
    </div>
  );
};

export default ManageInventory;
