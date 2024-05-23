import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    category: '',
    name: '',
    company: '',
    price: '',
    gst: '',
    totalPrice: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(product);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Add Product</h4>
          <p className="card-description">Fill in the details to add a new product</p>
          <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                className="form-control"
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Home">Home</option>
                
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder=" Enter Product Name"
                value={product.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Product Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                placeholder="Enter Product Company"
                value={product.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Product Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Enter Product Price"
                value={product.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gst">GST (in percentage)</label>
              <input
                type="number"
                className="form-control"
                id="gst"
                name="gst"
                placeholder="Enter GST (in percentage)"
                value={product.gst}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalPrice">Total Price</label>
              <input
                type="number"
                className="form-control"
                id="totalPrice"
                name="totalPrice"
                placeholder="Enter Total Price"
                value={product.totalPrice}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Product Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="Product Description"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                className="form-control-file"
                id="image"
                name="image"
                onChange={handleFileChange}
              />
            </div>
            
            <button type="submit" className="btn btn-gradient-primary me-2" style={{ backgroundColor: 'purple', color: 'white' }}>
              Insert Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;