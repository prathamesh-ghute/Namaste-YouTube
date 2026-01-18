import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex shadow-sm bg- gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12' alt='user' 
        src='https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg'
        />

        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export const CommentsList = ({comments}) =>{
    //Disclamier : Don't use indexes as keys
    return comments.map((comment,index) => (
        <div key={index}>

            <Comment  data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
               <CommentsList comments={comment.replies}/>
     
            </div>
        </div>
 
    ));
};

export default Comment