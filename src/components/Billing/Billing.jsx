// import React from "react";
// import { format } from "date-fns";
// import {
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers";
// import { FaUserPlus, FaCalendarAlt } from "react-icons/fa";

// import "./Billing.css";

// const Billing = () => {
//   const currentDate = new Date();
//   const formattedDate = format(currentDate, "dd-MM-yyyy");

//   return (
//     <div className="billing-container">
//       <div className="header">
//         <div className="order-details">
//           <p>
//             Order : <strong>#ORD-1001</strong>
//           </p>
//           <p>
//             Date: <strong>{formattedDate} </strong>
//             <FaCalendarAlt className="calendar-icon" />
//           </p>
//         </div>
//         <div className="customer-selection">
//           <input
//             type="text"
//             placeholder="Enter Customer Name"
//             className="customer-input"
//           />
//         </div>
//         <button className="new-member-button">
//           <FaUserPlus />
//         </button>
//       </div>
//       <div className="table-container">
//         <table className="service-table">
//           <thead>
//             <tr>
//               <th>Service</th>
//               <th>Color</th>
//               <th>Rate</th>
//               <th>QTY</th>
//             </tr>
//           </thead>
//           <tbody></tbody>
//         </table>
//       </div>
//       <div className="totals-container">
//         <div className="totals">
//           <p>
//             Add on : <strong>0.00 Rupees</strong>
//           </p>
//           <p>
//             Sub Total : <strong>0.00 Rupees</strong>
//           </p>
//           <p>
//             Tax (1%) : <strong>0.00 Rupees</strong>
//           </p>
//           <p>
//             Discount : <strong>0.00 Rupees</strong>
//           </p>
//           <p>
//             Gross Total : <strong>0.00 Rupees</strong>
//           </p>
//         </div>
//       </div>
//       <div className="footer">
//         <select className="payment-method">
//           <option>Payment Method</option>
//           <option>Cash</option>
//           <option>Card</option>
//           <option>UPI</option>
//         </select>
//         <button className="save-print-button">Save & Print</button>
//       </div>
//     </div>
//   );
// };

// export default Billing;

// *****************************
/*
import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Billing.css";
const BillingPage = () => {
  const items = [
    {
      id: 1,
      name: "açaí no copo",
      details: "[03 Adicionais]",
      extra: "extra: colher: Rp 1",
      price: 7,
      qty: 1,
    },
    { id: 2, name: "açaí no copo", details: "", extra: "", price: 12, qty: 1 },
    { id: 3, name: "asdv", details: "", extra: "", price: 123, qty: 7 },
    {
      id: 1,
      name: "açaí no copo",
      details: "[03 Adicionais]",
      extra: "extra: colher: Rp 1",
      price: 7,
      qty: 1,
    },
    { id: 2, name: "açaí no copo", details: "", extra: "", price: 12, qty: 1 },
    { id: 3, name: "asdv", details: "", extra: "", price: 123, qty: 7 },
    {
      id: 1,
      name: "açaí no copo",
      details: "[03 Adicionais]",
      extra: "extra: colher: Rp 1",
      price: 7,
      qty: 1,
    },
    { id: 2, name: "açaí no copo", details: "", extra: "", price: 12, qty: 1 },
    { id: 3, name: "asdv", details: "", extra: "", price: 123, qty: 7 },
  ];

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
  };

  return (
    <div className="billing-page">
      <div className="header">
        <input type="text" placeholder="Walk-In Customer" />
        <button className="add-btn">Add</button>
      </div>
      <div className="order-type">
        <label>Order Type *</label>
        <button className="order-btn active">Dining</button>
        <button className="order-btn">Takeaway</button>
        <button className="order-btn">Delivery</button>
        <label className="table-select">Select Table:</label>
        <select>
          <option>Choose Table</option>
          <option> Option 1</option>
          <option>Option 2 </option>
        </select>
      </div>
      <table className="item-table">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                {item.name} - {item.details} {item.extra}
              </td>
              <td>Rp {item.price}</td>
              <td>{item.qty}</td>
              <td>Rp {item.price * item.qty}</td>
              <td>
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <div className="total">Bill Total Rp 880.00</div>
        <button className="clear-btn">Clear All</button>
        <button className="order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default BillingPage;
*/

// *******************************
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import "./Billing.css";

const BillingPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "açaí no copo",
      details: "[03 Adicionais]",
      extra: "extra: colher: Rp 1",
      price: 7,
      qty: 1,
    },
    { id: 2, name: "açaí no copo", details: "", extra: "", price: 12, qty: 1 },
    { id: 3, name: "asdv", details: "", extra: "", price: 123, qty: 7 },
    // ... other items
  ]);
  const [orderType, setOrderType] = useState("");

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleOrderTypeClick = (type) => {
    setOrderType(type);
  };

  return (
    <div className="billing-page">
      <div className="header">
        <input type="text" placeholder="Walk-In Customer" />
        <button className="add-btn">
          <PersonAddIcon style={{ color: "white", marginRight: "1px" }} /> Add
        </button>{" "}
      </div>

      {/* <div className="order-type">
        <label>Order Type * </label>
        <button
          className={`order-btn ${orderType === "Dining" ? "active" : ""}`}
          onClick={() => handleOrderTypeClick("Dining")}
        >
          Dining
        </button>
        <button
          className={`order-btn ${orderType === "Takeaway" ? "active" : ""}`}
          onClick={() => handleOrderTypeClick("Takeaway")}
        >
          Takeaway
        </button>
        <button
          className={`order-btn ${orderType === "Delivery" ? "active" : ""}`}
          onClick={() => handleOrderTypeClick("Delivery")}
        >
          Delivery
        </button>
        <label className="table-select">Select Table:</label>
        <select className="select1">
          <option>Choose Table</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div> */}
      <table className="item-table">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                {item.name} - {item.details} {item.extra}
              </td>
              <td>Rp {item.price}</td>
              <td>{item.qty}</td>
              <td>Rp {item.price * item.qty}</td>
              <td>
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <div className="total">
          Bill Total Rp{" "}
          {items.reduce((acc, item) => acc + item.price * item.qty, 0)}
        </div>
        <button className="clear-btn" onClick={() => setItems([])}>
          Clear All
        </button>
        <button className="order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default BillingPage;
