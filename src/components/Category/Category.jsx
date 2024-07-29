// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// import Billing from "../Billing/Billing";
// import "./Category.css";

// const items = [
//   { id: 1, img: "img1.jpg", desc: "Item 1", price: "10.00" },
//   { id: 2, img: "img2.jpg", desc: "Item 2", price: "121.00" },
//   { id: 3, img: "img3.jpg", desc: "Item 6", price: "12.00" },
//   { id: 4, img: "img4.jpg", desc: "Item 4", price: "150.00" },
//   { id: 5, img: "img5.jpg", desc: "Item 4", price: "14.00" },
// ];

// const Category = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const filteredItems = items.filter((item) =>
//     item.desc.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="category-container">
//       <div className="category-items">
//         <div className="search-category-container">
//           <div className="search-bar">
//             <FaSearch className="search-icon" />{" "}
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="category-dropdown"
//           >
//             <option value="">All Categories</option>
//             <option value="category1">Category 1</option>
//             <option value="category2">Category 2</option>
//             <option value="category3">Category 3</option>
//             <option value="category4">Category 4</option>
//             <option value="category5">Category 5</option>
//           </select>
//         </div>
//         <div className="filter-buttons">
//           <button className="veg-button">Veg</button>
//           <button className="non-veg-button">Non-Veg</button>
//         </div>
//         <div className="items-grid">
//           {filteredItems.map((item) => (
//             <div key={item.id} className="item-card">
//               <img src={item.img} alt={item.desc} />
//               <div className="item-details">
//                 <h3>{item.desc}</h3>
//                 <p>ID: {item.id}</p>
//                 <p>Price: Rs {item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="billing">
//         <Billing />
//       </div>{" "}
//     </div>
//   );
// };

// export default Category;

// *******************************************************
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Billing from "../Billing/Billing";
import "./Category.css";

const items = [
  { id: 1, img: "img1.jpg", desc: "Item 1", price: "10.00" },
  { id: 2, img: "img2.jpg", desc: "Item 2", price: "121.00" },
  { id: 3, img: "img3.jpg", desc: "Item 6", price: "12.00" },
  { id: 4, img: "img4.jpg", desc: "Item 4", price: "150.00" },
  { id: 5, img: "img5.jpg", desc: "Item 4", price: "14.00" },
];

const Category = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [discount, setDiscount] = useState("");
  const [serviceCharge, setServiceCharge] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [paymentType, setPaymentType] = useState("Cash");

  const filteredItems = items.filter((item) =>
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-container">
      <div className="category-items">
        <div className="search-category-container">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-dropdown"
          >
            <option value="">All Categories</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            <option value="category4">Category 4</option>
            <option value="category5">Category 5</option>
          </select>
        </div>
        {/* 
        <div className="filter-buttons">
          <button className="veg-button">
            {" "}
            <RestaurantIcon style={{ color: "green" }} />
            Veg
          </button>
          <button className="non-veg-button">
            <RestaurantIcon style={{ color: "red" }} /> Non-Veg
          </button>
        </div> */}
        <div className="items-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.img} alt={item.desc} />
              <div className="item-details">
                <h3>{item.desc}</h3>
                <p>ID: {item.id}</p>
                <p>Price: Rs {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-section">
          <div className="footer-field">
            <label>Discount(%):</label>
            <input
              type="text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter Discount"
            />
          </div>
          <div className="footer-field">
            <label>Service Charge:</label>
            <input
              type="text"
              value={serviceCharge}
              onChange={(e) => setServiceCharge(e.target.value)}
              placeholder="0"
            />
          </div>
          <div className="footer-field">
            <label>TaxAmount:</label>
            <span>Rp 0.00</span>
          </div>
          <div className="footer-field">
            <label>Paid Amount:</label>
            <input
              type="text"
              value={paidAmount}
              onChange={(e) => setPaidAmount(e.target.value)}
              placeholder="0"
            />
          </div>
          <div className="footer-field">
            <label>PaymentType:</label>
            <select
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
        </div>
      </div>
      <div className="billing">
        <Billing />
      </div>
    </div>
  );
};

export default Category;
