import React, {useState} from "react";


const Basic2 = () => {
  const [products, setProducts] = useState([]);
  const newProducts = () => {
    setProducts([...products, {
      id: products.length,
      name: "Hello,product!"
    }])
  }

  return (
    <div>
        <button onClick={newProducts} >Add New Product</button>
        <ul>
          {products.map( pro => 

              <li key={pro.id}>id: {pro.id} / { pro.name }</li>
            )}
        </ul>
    </div>
  );
};

export default Basic2;
