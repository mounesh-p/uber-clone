import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">Choose a Vehicle</h3>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('car')

      }} className="flex items-center justify-between w-full p-3 mb-2 border-2 active:border-black rounded-xl">
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="text-base font-medium">
            UberGo
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="text-sm font-medium">2 min away</h5>
          <p className="text-xs font-normal text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('moto')
      }}  className="flex items-center justify-between w-full p-3 mb-2 border-2 active:border-black rounded-xl">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="text-base font-medium">
            Moto
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="text-sm font-medium">3 min away</h5>
          <p className="text-xs font-normal text-gray-600">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('auto')
      }}  className="flex items-center justify-between w-full p-3 mb-2 border-2 active:border-black rounded-xl">
        <img
          className="h-12"
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="text-base font-medium">
            UberAuto
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="text-sm font-medium">3 min away</h5>
          <p className="text-xs font-normal text-gray-600">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
