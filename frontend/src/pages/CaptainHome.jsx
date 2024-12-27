import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useContext, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from 'axios';

const CaptainHome = () => {

    const [ridePopUpPanel, setRidePopUpPanel] = useState(false);
    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
    const [ride, setRide] = useState(null);

    const ridePopupPanelRef = useRef(null);
    const confirmRidePopUpPanelRef = useRef(null);

    const { socket } = useContext(SocketContext);
    const { captain } = useContext(CaptainDataContext);

    useEffect(()=>{
      socket.emit("join", { userType: "captain", userId: captain._id })

      const updateLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {

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

    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation();
    },[]);

    socket.on('new-ride', (data) => {
      setRide(data)
      setRidePopUpPanel(true)
    })
  
    async function confirmRide() {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {
          rideId: ride._id,
          captainId: captain._id,
      }, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      setRidePopUpPanel(false)
      setConfirmRidePopUpPanel(true)
  }

  
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
      <div className="h-3/5">
        <img
          className="object-cover w-full h-full"
          src="https://th.bing.com/th/id/OIP.VJpMhXBsme4wZZpb9IgzhgHaJs?w=740&h=968&rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className="p-6 h-2/5">
   
        <CaptainDetails/>
      </div>
      <div ref={ridePopupPanelRef}
        className="fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white"
      >
        <RidePopUp 
          ride={ride}
          confirmRide={confirmRide}
          setRidePopUpPanel={setRidePopUpPanel} 
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} 
        />
      </div>
      <div ref={confirmRidePopUpPanelRef}
        className="fixed bottom-0 z-10 w-full h-screen px-3 py-10 pt-12 translate-y-full bg-white"
      >
        <ConfirmRidePopUp 
          ride={ride}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel} 
        />
      </div>
    </div>
  );
};

export default CaptainHome;
