import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Head = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 ' >
            <img className='h-8 cursor-pointer' alt='menu-image' src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png' onClick={toggleMenuHandler}/>
            {/* <Link to={"/"}> */}
                <img className='h-8 mx-2' alt='youtube-logo' src='https://cdn.worldvectorlogo.com/logos/youtube-6.svg'/>
            {/* </Link> */}

      </div>

      <div className='col-span-10 px-10'>
            <input type='text' className='p-2 rounded-l-full w-1/2 border border-gray-400'/>
            <button className='border  border-gray-400 py-2 px-5 rounded-r-full bg-gray-100'>🔍</button>
      </div>

      <div className='col-span-1'>
            <img className='h-8' src='https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg' alt='user-icon' />
      </div>
    </div>
  )
}

export default Head