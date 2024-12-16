import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext, { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user, setUser } = useContext(UserDataContext);

  const submitHanlder = async (e) => {
    e.preventDefault();

    const newUser = {
        fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status == 201){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token)
        navigate('/home')
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://th.bing.com/th/id/R.ee430489d1505483166c19ab9ed00d4e?rik=TR8JYzS1MJsqxg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fUber-Logo-PNG-Free-Image.png&ehk=RkArudRupF3ki6m0KJJ67MImDo65xcs3upha4JAEOME%3d&risl=&pid=ImgRaw&r=0"
          alt="dd"
        />
        <form
          onSubmit={(e) => {
            submitHanlder(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What is your name</h3>
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
          <h3 className="text-lg font-medium mb-2">What is your email</h3>
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
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to={"/login"} className="text-blue-600 ">
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
};

export default UserSignup;
