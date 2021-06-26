import React from 'react';
import img from '../../img/pexels-pixabay-60597.jpg';

const Post = () => {
    return (
        <div className="post">
        {/* <!-- Profile picture of the post admin --> */}
        <img src={img} alt="Profile picture" className="post__profilepicture"/>
        <h4 className="profilename">
            Dolma Sherpa
        </h4>
        <p className="post__time">
         
                2 hrs  
       
        </p>
        <p className="post__title">Dolma aunty</p>
        {/* <!-- Image of the post --> */}
        <div className="post__postimage">
            <img src={img} alt="PostImage" className="post__postimage--1" />
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <span className="post__likes"> pasang, hello and 123 other</span> 
            </div>
            <div className="col-1-of-2">
              <span className="post__comments">23 comments</span> 
            </div>
        </div>
        <div className="row top_bottom_border padding-5 ">
             <div className="col-1-of-2">
                 <div className="like u_align_text_center border-5">
                    <a href="" className="like__anchor"><i className="far fa-thumbs-up"></i><span>Like</span></a>
                 </div>
            </div>
            <div className="col-1-of-2">
                <div className="comment u_align_text_center border-5">
                   <a href="" className="comment__anchor"><i className="far fa-comment"></i><span>Comment</span></a>
                </div>
           </div>
        </div>
        <section className="section__comment">
            {/* <!-- Image of the user that is commenting --> */}
            <img src={img} alt="Profile picture" className="post__profilepicture__comment" />
            <input type="text" className="post__profilepicture__addcomment" placeholder="Write a comment" />
        </section>
    </div>
    )
}

export default Post;
