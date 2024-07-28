import React, { useContext, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Menu from './Menu';
import { UserContext } from '../context/UserContext';

const Navbar = () => {

  const [menu,setMenu] = useState(false)
  const [prompt,setPrompt] = useState('')
  const {user} = useContext(UserContext);
  const path = useLocation().pathname
  //console.log(prompt)
  const navigate = useNavigate()

  const showMenu = () =>{
    setMenu(!menu)
  }

  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
        <h1 className='text-l md:text-xl font-extrabold'><Link to='/'>Thoughts</Link></h1>
        {path === '/' && 
        <div className='flex items-center justify-center space-x-2 md:space-x-3'>
            <p onClick={() => prompt ? navigate('/?search='+prompt) :navigate('/')} className='cursor-pointer'><FaSearch/></p>
            <input onChange={(e) => {setPrompt(e.target.value)}} className='bg-gray-100 outline-none px-2 md:px-3 py-1 rounded-sm' placeholder='Search blogs...' type='text' />
        </div>}
        <div className='hidden md:flex items-center justify-center space-x-2 md:space-x-4'>
            {user ? <h3><Link to='/write'>Write</Link></h3> : <h3><Link to='/login'>Login</Link></h3>}
            {user ? <div>
              <p onClick={showMenu} className='cursor-pointer relative'><FaBars/></p>
              {menu && <Menu/>}          
            </div> : <h3><Link to='/register'>Register</Link></h3>}
        </div>
        <div onClick={showMenu} className='md:hidden text-lg'>
          <p className='cursor-pointer relative'><FaBars/></p>
          {menu && <Menu/>}
        </div>
    </div>
  )
}

export default Navbar