import React, { use } from 'react'
import Post from './Post';

export default function Posts({postsPromise}) {
    const postsPromisee = use(postsPromise)
    console.log(postsPromisee);
    
  return (
    <div className='card'>
        <h3>Post</h3>
        {
            postsPromisee.map(post => <Post key={post.id}  post={post}> </Post>)
        }
    </div>
  )
}
