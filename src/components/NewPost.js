import React, {useState} from 'react';
import axios from "axios"

const NewPost = ({userId}) => {
    const [message,setMessage]=useState("");

    const handleForm=(e)=>{
        e.preventDefault();

    //on verifie que le pseudo ne pas vide 
    //pour eviter de faire cracher le server
    if(!userId){
        alert('Veuiller saisir un Pseudo')
    }else{
        axios.post ('http://localhost:5000/post/', 
        {
            message,
            author:userId,
        });

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