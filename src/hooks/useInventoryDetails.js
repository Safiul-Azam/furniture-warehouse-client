import { useEffect, useState } from "react";

const useInventoryDetails = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://furniture-9cwv.onrender.com/furniture/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return [product, setProduct];
};
export default useInventoryDetails;
