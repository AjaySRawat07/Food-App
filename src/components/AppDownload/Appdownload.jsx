import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appdownload = () => {

  function notify() {
    toast.info("COMING SOON.....", {
      position: "top-center",
      autoClose: 1000,
      theme: "colored",
    });
  }
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> HungryBear App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" onClick={notify} />
        <img src={assets.app_store} alt="" onClick={notify} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Appdownload;
