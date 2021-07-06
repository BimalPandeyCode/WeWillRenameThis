import React, {useState} from 'react';
import img from '../../img/pexels-pixabay-60597.jpg';
import {useSelector, useDispatch} from 'react-redux';
import "../../css/style.css";
import {createPost1 , postCreation} from '../../redux/reducers/Post.js';
import {createPost}  from '../../redux/api/userApi.js';


const CreatePost = () => {
    const error = useSelector((state) => state.signin.user);
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const [text, setText] = useState("");
    const onClick = () =>{
        setState(!state);
        dispatch(createPost1(!state));
    }
    const onSubmit =async e => {
        e.preventDefault();
        try {
            const postCreation1 = await createPost({text});
            console.log(postCreation1);
            dispatch(postCreation(postCreation1));  
        } catch (err) {
            console.log(err.message);
        }
    }
    const myStyle = () =>{
        if(state){
            return{
                opacity:"1",
                
            }
        }
    }
    if(error!== null){
        const {firstname, lastname} = error;
        if(state){
            return (<>
            <div className="CONTAINER">
                <form className="create-post" style={myStyle()} onSubmit={onSubmit} >
                    <header className="header">
                        <h1 className="header__title">Create Post</h1>
                        <i className="fas fa-times-circle header__right" onClick={()=> onClick()}></i>
                    </header>
                    {/* <!-- Profile picture of the post admin --> */}
                    <img src={img} alt="Profile picture" className="post__profilepicture" />
                    <h4 className="profilename">
                        {firstname + " " + lastname}
                    </h4>
                    <p className="create-post__seen">
                        Friends    
                    </p>
                    <textarea name="" id="" cols="30" rows="10" className="create-post__textarea" autoFocus value={text} onChange={(e)=> setText(e.target.value)}></textarea>
                    <div className="create-post__add-photo">
                        Add to Your Post
                    </div>
                    <div className="create-post__post ">
                        <input type="submit" className="create-post__postanchor btn btn-blue" value="Post"/>
                    </div>
                </form>
                </div>
            </>
            )
        }else{
            return (
                <div className="postContainer">
                <div className="createPost">
                    <img src={img} alt="Profile picture" className="createPost__profilePicture" />
                    <input type="text" placeholder={"What's on your mind, "+firstname } className="createPost__textInput" onClick={()=> onClick()}></input>
                </div>
            </div>
            )
        }
  } else{
      return <> </>
  } 
}

export default CreatePost;
