import React, {useState} from 'react';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPosts } from '../feature/post.slice';

const NewPost = () => {
    const [message,setMessage]=useState("");
    const userId= useSelector((state)=> state.user.userId)
    const dispatch = useDispatch();

    const handleForm=(e)=>{
        e.preventDefault();
        const data={
            message,
            author:userId,
            _id:Date.now(),

        }

    //on verifie que le pseudo ne pas vide 
    //pour eviter de faire cracher le server
    if(!userId){
        alert('Veuiller saisir un Pseudo')
    }else{
        axios.post ('http://localhost:5000/post/', data).then(()=>{
            dispatch(createPost(data))
            //getpost pour chercher l'id crée par mongoDb
            dispatch(getPosts());

            
        })

        setMessage('')

    }
          

    }
    return (
    <form className="new-post-container" onSubmit={(e)=>handleForm(e)} >
      <textarea 
        placeholder="Quoi de neuf ?" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
      <input type="submit" value="Envoyer" />
    </form>
    );
};

export default NewPost;