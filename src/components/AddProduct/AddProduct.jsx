import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import "./AddProduct.css";

const AddProduct = () => {
  const [categoryName, setCategoryName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      categoryName,
      productPrice,
      productImage,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Add Product</h2>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={categoryName} onChange={handleCategoryChange} required>
          <MenuItem value="Chinese">Chinese</MenuItem>
          <MenuItem value="Italian">Italian</MenuItem>
          <MenuItem value="Mexican">Mexican</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Product Price"
        type="number"
        value={productPrice}
        onChange={handlePriceChange}
        required
        fullWidth
      />

      <Button variant="contained" component="label" startIcon={<PhotoCamera />}>
        Upload Image
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </Button>

      {productImage && <p>{productImage.name}</p>}

      <Button type="submit" variant="contained">
        Add Product
      </Button>
    </form>
  );
};

export default AddProduct;
