import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import {  OFFSET_LIVE_CHAT_COUNT } from '../utils/constant';



const LiveChat = () => {

    const dispatch = useDispatch();
    const [liveMessages, setLiveMessages] = useState([]);
    const chatMessages = useSelector((store) => store.chat.messages);


    useEffect(() =>{
        const timer = setInterval(() =>{
            // API Polling
            console.log("API Polling");
            dispatch(addMessage({
                name:generateRandomName(),
                message: makeRandomMessage(OFFSET_LIVE_CHAT_COUNT)
            }))
        },1500)

        return () =>{
            clearInterval(timer);
        }

    },[]);

  return (
    <>
        <div className='bg-slate-100 rounded-lg w-full h-[530px] ml-2 p-2 border border-black  overflow-y-auto  overflow-x-hidden flex flex-col-reverse'>
        
        { // Disclaimer: Don't use index as key in real project
        chatMessages.map((c,i) =>(
            <ChatMessage key={i} name={c.name} message={c.message}/>
        ))}

        </div>
        <div className='w-full p-2 ml-2 border border-black'>
        
            <form onSubmit={(e) =>{
                e.preventDefault();
                dispatch(addMessage({
                    name:"Prathamesh",
                    message: liveMessages,
                }))
                setLiveMessages('');
            }}>
                <input className='w-4/5  p-2  border border-gray-400 rounded-lg' type='text' placeholder='Type your message here...' value={liveMessages} onChange={(e)=>setLiveMessages(e.target.value)}/>
                <button className='bg-green-200 p-2  ml-2 rounded-lg' >Send</button>
        
            </form>
        </div>
    </>
  )
}

export default LiveChat