import React from 'react';
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
    return (
        <div>
        <h5
          className="p-1 text-center absolute top-0 w-[93%]"
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold"> Finish this Ride</h3>
  
        <div className="flex items-center border-2 border-yellow-400 rounded-lg p-4 justify-between mt-4">
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
          <div className="mt-10 w-full">
             
              <Link
                to={"/captain-home"}
                className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg text-lg"
              >
                Finish Ride
              </Link>
             
  
          </div>
        </div>
      </div>
    );
}

export default FinishRide;
