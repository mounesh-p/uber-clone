import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';

const UserProtectWrapper = ({children}) => {

  const [isLoading, setIsLoading]= useState(true)
  const {user, setUser } = useContext(UserDataContext);

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(()=>{
        if(!token){
            navigate('/login');
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers: {
                Authorization: `Bearer ${token}`
                }
          }).then(response => {
            if(response.status === 200){
                setUser(response.data.user)
                setIsLoading(false);
            }
          }).catch(err =>{
            localStorage.removeItem('token');
            navigate('/login');
          })

    },[token])
    
  
    
    
      if(isLoading){
        return (
            <div>Loading...</div>
        )
      }

    return (
        <>
            {children}
        </>
    );
}

export default UserProtectWrapper;
