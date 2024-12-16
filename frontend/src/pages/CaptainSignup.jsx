import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
    const [firstname, setFirstname] = useState("");
      const [lastname, setLastname] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [userData, setUserData] = useState({});
    
      const submitHanlder = (e) => {
        e.preventDefault();
    
        setUserData({
          fullName: {
            firstname: firstname,
            lastname: lastname,
          },
          email: email,
          password: password,
        });
    
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
      };

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-2"
            src="https://static.vecteezy.com/system/resources/previews/027/127/594/original/uber-logo-uber-icon-transparent-free-png.png"
            alt="dd"
          />
          <form
            onSubmit={(e) => {
              submitHanlder(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">What is our Captain's name</h3>
            <div className="flex gap-4 mb-5">
              <input
                required
                type="text"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                placeholder="Firstname"
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              />
              <input
                required
                type="text"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                placeholder="Lastname"
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">What is our Captain's email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
  
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
  
            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
  
            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
              Login
            </button>
          </form>
          <p className="text-center">
            Already have a account?{" "}
            <Link to={"/captain-login"} className="text-blue-600 ">
              Login here
            </Link>
          </p>
        </div>
        <div>
        <p className="text-[10px] leading-tight">
         This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>
        </p>
        </div>
      </div>
    );
}

export default CaptainSignup;
