import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./AddCategory.css";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
    setCategoryError("");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCategoryImage(file);
      setImageError("");
    } else {
      setImageError("Please select an image file.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (!categoryName.trim()) {
      setCategoryError("Category name is required.");
      return;
    }

    if (!categoryImage) {
      setImageError("Please upload an image.");
      return;
    }

    const newCategory = {
      name: categoryName,
      image: categoryImage,
    };

    console.log("New Category:", newCategory);

    // Reset form fields
    setCategoryName("");
    setCategoryImage(null);
  };

  return (
    <div className="addcategory-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <h2>Add New Category</h2>
          <TextField
            id="categoryName"
            label="Category Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={categoryName}
            onChange={handleCategoryNameChange}
            required
            error={Boolean(categoryError)}
            helperText={categoryError}
          />
        </div>

        <div className="input-group">
          <label htmlFor="categoryImage">Image</label>
          <input
            type="file"
            id="categoryImage"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imageError && <p className="error-text">{imageError}</p>}
        </div>

        <Button type="submit" variant="contained" className="submit-button">
          Add Category
        </Button>
      </form>
    </div>
  );
};

export default AddCategory;
