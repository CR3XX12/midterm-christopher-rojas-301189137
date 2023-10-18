import React, { useState } from 'react';
import './AddProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddProduct() {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    categories: '',
    quantity: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(productData, null, 2));
    console.log(productData);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="label">Description:</label>
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="label">Categories:</label>
          <input
            type="text"
            name="categories"
            value={productData.categories}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="label">Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="label">Price:</label>
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" class="btn btn-outline-success">Submit</button>
          <button type="button" class="btn btn-outline-danger"onClick={() => setProductData({
            name: '',
            description: '',
            categories: '',
            quantity: '',
            price: '',
          })}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
