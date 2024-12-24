import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('');

  const submitHandler = (e) => {
      e.preventDefault();
  }
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold">Confirm this ride to start</h3>

      <div className="flex items-center bg-yellow-400 rounded-lg p-3 justify-between mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 rounded-full w-10 object-cover"
            src="https://th.bing.com/th/id/OIP.VsPq9C74m_cHRWgbF_pevwAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form onSubmit={(e)=>{
              submitHandler(e);
          }}>
            <input value={otp} onChange={(e)=> setOtp(e.target.value)} className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 focus:outline-black" type="text" placeholder="Enter OTP"/>
            <Link
              to={"/captain-riding"}
              className="w-full mt-5 flex justify-center bg-green-600 text-white text-lg font-semibold p-3 rounded-lg"
            >
              Confirm
            </Link>

            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="w-full mt-1 bg-red-600 text-white font-semibold text-lg p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
