import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { app } from "./../components/Firebase/FireBase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [logInStatus, setLogInStatus] = useState(false);
  const [useName, setUserName] = useState();

  const auth = getAuth();

  async function signUp(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("user added");
      // toast.success("user added", {
      //   position: "top-center",
      //   autoClose: 1000,
      //   theme: "colored",
      // });
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err.message);
    }
  }

  async function logIn(e) {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert("user login");
      setEmail("");
      setPassword("");
      // SetUser({
      //   email: result.user.email,
      //   uid: result.user.uid,
      // });
      setLogInStatus(true);
    } catch (err) {
      alert(err.message);
    }
  }

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((pre) => ({ ...pre, [itemId]: 1 }));
    } else {
      setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };

  const getTotalCartAmmount = () => {
    let totalAmount = 0;
    for (let items in cartItems) {
      if (cartItems[items] > 0) {
        let itemInfo = food_list.find((product) => product._id === items);
        totalAmount += itemInfo.price * cartItems[items];
      }
    }
    return totalAmount;
  };
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmmount,
    signUp,
    setEmail,
    setPassword,
    logIn,
    logInStatus,
    useName,
    setUserName,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
