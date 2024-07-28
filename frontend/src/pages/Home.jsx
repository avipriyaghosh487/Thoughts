import React, { useContext, useEffect, useState } from 'react'
import HomePosts from '../components/HomePosts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { url } from '../url'
import { Link,useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import { UserContext } from '../context/UserContext'


const Home = () => {


  const {user} = useContext(UserContext)
  console.log(user)
  const [posts,setPosts] = useState([])
  const [isEmpty,setIsEmpty] = useState(false)
  const [loader,setLoader] = useState(false)
  const {search}= useLocation()
  console.log(search)

  const fetchPosts = async () => {
    setLoader(true)
    try{
      const res = await axios.get(url+'/api/posts/'+search)
      //console.log(res.data)
      setPosts(res.data)
      if(res.data.length == 0){
        setIsEmpty(true)
      }else{
        setIsEmpty(false)
      }
      //console.log(posts)
    }catch(err){
      console.log(err)
      setLoader(true)
    }
    setLoader(false)
  }

  useEffect(() => {
    fetchPosts()
  },[search])

  return (
    <>
      <Navbar />
      <div className='px-8 md:px-[200px] min-h-[40vh]'> 
        {loader?<Loader /> :!isEmpty ? posts.map((post) => (
          <>
            <Link to={user ? '/posts/post/'+post._id : '/login'} >
              <HomePosts key ={post._id} post={post}/>
            </Link>
          </>
        )) : <h3 className='md:text-2xl  mt-60 text-center text-lg font-bold'>No such blogs found</h3>}
      </div>
      <Footer/>
    </>
  )
}

export default Home