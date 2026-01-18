import React from 'react'
import Comment, { CommentsList } from './Comment'


const commentContainer = [
    {
        name:"Akshay Saini",
        text:"Lorem ipsum dolor sit amet consseti deep ",
        replies:[
             {
                name:"Akshay Saini",
                text:"Lorem ipsum dolor sit amet consseti deep ",
                replies:[]
            },
             {
                name:"Akshay Saini",
                text:"Lorem ipsum dolor sit amet consseti deep ",
                replies:[
                     {
                        name:"Akshay Saini",
                        text:"Lorem ipsum dolor sit amet consseti deep ",
                        replies:[
                                {
                                    name:"Akshay Saini",
                                    text:"Lorem ipsum dolor sit amet consseti deep ",
                                    replies:[
                                        {
                                            name:"Akshay Saini",
                                            text:"Lorem ipsum dolor sit amet consseti deep ",
                                            replies:[
                                                    {
                                                        name:"Akshay Saini",
                                                        text:"Lorem ipsum dolor sit amet consseti deep ",
                                                        replies:[]
                                                    },
                                                    {
                                                        name:"Akshay Saini",
                                                        text:"Lorem ipsum dolor sit amet consseti deep ",
                                                        replies:[]
                                                    },
                                            ]
                                            
                                        },
                                    ]
                                },
                        ]
                    },
                ]
            },
            {
                name:"Akshay Saini",
                text:"Lorem ipsum dolor sit amet consseti deep ",
                replies:[]
            },
    
        ]
    },
     {
        name:"Akshay Saini",
        text:"Lorem ipsum dolor sit amet consseti deep ",
        replies:[]
    },
     {
        name:"Akshay Saini",
        text:"Lorem ipsum dolor sit amet consseti deep ",
        replies:[]
    },
     {
        name:"Akshay Saini",
        text:"Lorem ipsum dolor sit amet consseti deep ",
        replies:[]
    },
     {
        name:"Akshay Saini",
        text:"Lorem ipsum dolor sit amet consseti deep ",
        replies:[]
    },
]



const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 '>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        {/* <Comment data={commentContainer[0]}/> */}
        <CommentsList comments= {commentContainer} />
    </div>
  )
}

export default CommentsContainer