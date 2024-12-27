import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import LiveTracking from "../components/LiveTracking";

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    const location = useLocation();
    const rideData = location.state?.ride

    useGSAP(
        function () {
          if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(0)",
            }); 
          } else {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [finishRidePanel]
      );

  return (
    <div className="relative flex flex-col justify-end h-screen">
      <div className="fixed top-0 flex items-center justify-between w-screen p-6">
        <img
          className="w-16"
          src="https://logospng.org/download/uber/logo-uber-1024.png"
          alt=""
        />
        <Link
          to={"/captain-home"}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
     
      <div className="relative flex items-center justify-between p-6 pt-10 bg-yellow-400 h-1/5"
      onClick={()=>{
        setFinishRidePanel(true);
      }} >
      <h5 className="p-1 text-center absolute top-0 w-[93%]">
        <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
      </h5>
      <h4 className="text-xl font-semibold">4 KM away</h4>
      <button className="p-3 px-10 font-semibold text-white bg-green-600 rounded-lg font-white">Complete Ride</button>
      </div>

      <div ref={finishRidePanelRef}
        className="fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white"
      >
        <FinishRide
          ride={rideData}
          setFinishRidePanel={setFinishRidePanel} 
        />
      </div>

      <div className="h-screen fixed w-screen top-0 z-[-1]">
      <LiveTracking/>

        {/* <img
          className="object-cover w-full h-full"
          src="https://th.bing.com/th/id/OIP.VJpMhXBsme4wZZpb9IgzhgHaJs?w=740&h=968&rs=1&pid=ImgDetMain"
          alt=""
        /> */}
      </div>

    </div>
  );
};

export default CaptainRiding;
