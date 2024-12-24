import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

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
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://logospng.org/download/uber/logo-uber-1024.png"
          alt=""
        />
        <Link
          to={"/home"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="object-cover w-full h-full"
          src="https://th.bing.com/th/id/OIP.VJpMhXBsme4wZZpb9IgzhgHaJs?w=740&h=968&rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 rounded-lg relative"
      onClick={()=>{
        setFinishRidePanel(true);
      }} >
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
         
        }}
      >
        <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
      </h5>
      <h4 className="text-xl font-semibold">4 KM away</h4>
      <button className="bg-green-600 text-white font-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
      </div>

      <div ref={finishRidePanelRef}
        className="fixed bottom-0 z-10 w-full translate-y-full  px-3 py-10 bg-white pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>

    </div>
  );
};

export default CaptainRiding;
