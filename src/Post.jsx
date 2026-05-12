import React from 'react'

export default function Post({post}) {
    console.log(post);
    
  return (
    <div className='card2'>
        <h4>Title: {post.title}</h4>
        <p>Description: {post.body}</p>
    </div>
  )
}
