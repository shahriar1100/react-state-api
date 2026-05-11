import React, { use } from 'react'

export default function Friend({friendsPromise}) {
  const fetchFriendss = use(friendsPromise)
  console.log(fetchFriendss);
  
  return (
    <div className='card'>Friend : {fetchFriendss.length}</div>
  )
}

