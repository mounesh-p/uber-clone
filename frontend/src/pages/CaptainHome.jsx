import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useContext, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainHome = () => {

    const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

    const ridePopupPanelRef = useRef(null);
    const confirmRidePopUpPanelRef = useRef(null);

    const { socket } = useContext(SocketContext);
    const { captain } = useContext(CaptainDataContext);

    useEffect(()=>{
      socket.emit("join", { userType: "captain", userId: captain._id })

      const updateLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {

              console.log( {userId: captain._id,
                location: {
                    ltd: position.coords.latitude,
                    lng: position.coords.longitude
                }});
                socket.emit('update-location-captain', {
                    userId: captain._id,
                    location: {
                        ltd: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                })
            })
        }
    }

    const locationInterval = setInterval(updateLocation, 50000)
    updateLocation()

    },[captain]);

    socket.on('new-ride', (data) => {

      console.log("ccc",data);
      // setRide(data)
      // setRidePopupPanel(true)

  })


    useGSAP(
        function () {
          if (ridePopUpPanel) {
            gsap.to(ridePopupPanelRef.current, {
              transform: "translateY(0)",
            }); 
          } else {
            gsap.to(ridePopupPanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [ridePopUpPanel]
      );
    useGSAP(
        function () {
          if (confirmRidePopUpPanel) {
            gsap.to(confirmRidePopUpPanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(confirmRidePopUpPanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [confirmRidePopUpPanel]
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
      <div className="h-3/5">
        <img
          className="object-cover w-full h-full"
          src="https://th.bing.com/th/id/OIP.VJpMhXBsme4wZZpb9IgzhgHaJs?w=740&h=968&rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails/>
      </div>
      <div ref={ridePopupPanelRef}
        className="fixed bottom-0 z-10 w-full -translate-y-full  px-3 py-10 bg-white pt-12"
      >
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>
      <div ref={confirmRidePopUpPanelRef}
        className="fixed bottom-0 z-10 w-full h-full translate-y-full  px-3 py-10 bg-white pt-12"
      >
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
