
const RidePopUp = (props) => {
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
      <h3 className="text-2xl font-semibold">New Ride Available</h3>

      <div className="flex items-center justify-between p-3 mt-4 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="object-cover w-10 h-12 rounded-full"
            src="https://th.bing.com/th/id/OIP.VsPq9C74m_cHRWgbF_pevwAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
          <h2 className="text-lg font-medium">

            {props.ride?.user?.fullname?.firstname + " " + props.ride?.user?.fullname?.lastname}
            </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col items-center justify-between gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="-mt-1 text-sm text-gray-600">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="-mt-1 text-sm text-gray-600">
              {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">
                ₹{props.ride?.fare}
                </h3>
              <p className="-mt-1 text-sm text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-5">
        <button
          onClick={() => {
            props.setRidePopUpPanel(false);
          }}
          className="p-3 px-10 mt-1 font-semibold text-gray-700 bg-gray-300 rounded-lg "
        >
          Ignore
        </button>

        <button
          onClick={() => {
            props.setConfirmRidePopUpPanel(true);
            props.confirmRide()
          }}
          className="p-3 px-10 mt-1 font-semibold text-white bg-green-600 rounded-lg "
        >
          Accept
        </button>
        
        </div>

      </div>
    </div>
  );
};

export default RidePopUp;
