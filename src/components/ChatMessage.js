import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2' >
        <img className='h-8 m-2' src='https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg' alt='user-icon' />
        <p><span className='font-bold '>{name} : </span> {message} </p>

    </div>
  )
}

export default ChatMessage