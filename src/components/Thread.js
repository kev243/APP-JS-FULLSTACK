import React, { useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux"
import Post from './Post';
import {getPosts} from "../feature/post.slice"

const Thread = () => {
   const dispatch =useDispatch();
   const posts = useSelector((state)=> state.posts.postsData)
   


   


    useEffect(()=>{
       dispatch(getPosts());

    },[]);


    return (
        <div className='thread-container'>
            { posts && 
            posts.slice().sort((a,b)=> b.createdAt.localeCompare(a.createdAt)).map((post=>
            <Post key={post._id} post={post} />
            ))}
           
        </div>
    );
};

export default Thread;