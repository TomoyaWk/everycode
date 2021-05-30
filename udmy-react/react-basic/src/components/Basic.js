import React, { useState } from 'react';


const Basic = () => {

  const [ product, setProducts ] = useState({name: '', price: ''});

  return (
    <>
      <form>
        Name:
        <input type="text" value={ product.name }
        onChange={ e => setProducts({ ...product, name: e.target.value})}/>

        Price:
        <input type="text" value={ product.price }
        onChange={ e => setProducts({ ...product, price: e.target.value})}/>
      </form>
      <h1>Product name : { product.name }</h1>  
      <h1>Product price : { product.price }</h1>  
    </>
  );
}

export default Basic
