import {configureStore} from "@reduxjs/toolkit";
import  useReducer  from "../feature/user.slice";
import  postsReducer  from "../feature/post.slice";


export default configureStore({
    reducer :{
        user:useReducer,
        posts: postsReducer,
    }

})