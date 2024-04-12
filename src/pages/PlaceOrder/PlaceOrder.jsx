import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaceOrder = () => {
  function notify(e) {
    e.preventDefault();
    toast.success("Order placed", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  }
  const { getTotalCartAmmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fileds">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fileds">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fileds">
          <input type="text" placeholder="Zip cade" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmmount() === 0 ? 0 : getTotalCartAmmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={(e) => notify(e)}>PROCEED TO PAYMENT</button>
        </div>
        <ToastContainer />
      </div>
    </form>
  );
};

export default PlaceOrder;
