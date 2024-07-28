import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios"
import {url} from '../url'

const Register = () => {

  const navigate = useNavigate()
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(false)

  const handleRegister = async () => {
    try{
        const res = await axios.post(url+'/api/auth/register',{username,email,password})
        setUsername(res.data.username)
        setEmail(res.data.email)
        setPassword(res.data.password)
        setError(false)
        navigate('/login')
    }catch(err){
      setError(true)
      console.log(err)
    }
  }

  return (
    <>
       <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
       <h1 className='text-l md:text-xl font-extrabold'><Link to='/'>Thoughts</Link></h1>
       <h3><Link to='/login'>Login</Link></h3>
       </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            onChange={(e) => {setUsername(e.target.value)}}
            className="w-full px-4 py-2 border-2 border-black rounded-md"
            type="text"
            placeholder="Enter your username.."
          />
          <input
             onChange={(e) => {setEmail(e.target.value)}}
            className="w-full px-4 py-2 border-2 border-black rounded-md"
            type="email"
            placeholder="Enter your email.."
          />
          <input
           onChange={(e) => {setPassword(e.target.value)}}
            className="w-full px-4 py-2 border-2 border-black rounded-md"
            type="password"
            placeholder="Enter your password.."
          />
          <button onClick={handleRegister} className="w-full px-4 py-4 font-bold text-white text-lg bg-black rounded-lg hover:bg-gray-500 hover:text-black">
            Register
          </button>
          {error && <h3 className="text-red-600">Something went wrong !</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>Already registered?</p>
            <p className="text-black hover:text-gray-500">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Register;
