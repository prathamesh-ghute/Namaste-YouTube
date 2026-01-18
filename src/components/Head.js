import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery , setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCache = useSelector(store => store.search)

    /**
     * searchCache = {
     * "iphone":["iphone11", "iphone12"]
     * }
     * searchQuery = iphone
     */

    useEffect(() =>{
        // make an api call after every key press 
        // but if the difference between 2 api calls is <200ms
        // decline the API call

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery])
            }else{
                getSearchSuggestion()
            }
            // getSearchSuggestion()
        },200);

        return () =>{
            clearTimeout(timer);
        }
        
    },[searchQuery]);

    /**
     * key - i
     *  - render the component
     *  - call useEffect()
     *  - start  timer => make an api call after 200 ms
     * 
     * 
     * key -ip
     *  - destory the component and call clenup function (useEffect return method)
     *  - re-render the component
     *  - call useEffect()
     *  - start new timer => make an api call after 200ms
     * 
     */
    const getSearchSuggestion = async () =>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();

        // console.log(json[1]);  
        // setSearchQuery(json);  
        // console.log(json);
        
        setSuggestion(json[1]);

        // update cache
        dispatch(cacheResults({[searchQuery] : json[1]}))
    }
    
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
            <div>
                    <input 
                    type='text' 
                    className='p-2  rounded-l-full w-1/2 border border-gray-400'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                    />
                    <button className='border  border-gray-400 py-2 px-5 rounded-r-full bg-gray-100'>🔍</button>
            </div>
            {showSuggestion && 
            <div className='fixed bg-white py-2 px-2 w-1/3 shadow-lg rounded-lg border border-gray-100'>
                <ul>
                    {suggestion.map((s) =>  <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s} </li> )}
                  
                </ul>
            </div>
            }
      </div>

      <div className='col-span-1'>
            <img className='h-8' src='https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg' alt='user-icon' />
      </div>
    </div>
  )
}

export default Head