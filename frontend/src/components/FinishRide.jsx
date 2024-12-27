import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const FinishRide = (props) => {
  const navigate = useNavigate()
  
  async function endRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
        rideId: props.ride._id
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (response.status === 200) {
        navigate('/captain-home')
    }

}

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
  
        <div className="flex items-center justify-between p-4 mt-4 border-2 border-yellow-400 rounded-lg">
          <div className="flex items-center gap-3">
            <img
              className="object-cover w-10 h-12 rounded-full"
              src="https://th.bing.com/th/id/OIP.VsPq9C74m_cHRWgbF_pevwAAAA?rs=1&pid=ImgDetMain"
              alt=""
            />
            <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname}</h2>
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
                <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
                <p className="-mt-1 text-sm text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
             
              <button
                onClick={endRide}
                className="flex justify-center w-full p-3 mt-5 text-lg font-semibold text-white bg-green-600 rounded-lg"
              >
                Finish Ride
              </button>
             
  
          </div>
        </div>
      </div>
    );
}

export default FinishRide;
