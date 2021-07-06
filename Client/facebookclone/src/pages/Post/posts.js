import React from 'react';
import PostItem from './PostItem.js';
import {useSelector} from 'react-redux';

const Posts = () => {
    const {posts} = useSelector((state) => state.postCRD);
    return (
        
        <div className="posts">
            {posts.map(post =>(
                <PostItem key={post._id} post= {post} />
            ))}
        </div>
    )
}

export default Posts;
