import React, { use } from 'react'
import Friend from './Friend';

export default function Friends({friendsPromise}) {
  const fetchFriendss = use(friendsPromise)
  console.log(fetchFriendss);
  
  return (
    <>
    <div className='card'>Friend : {fetchFriendss.length}
    {
      fetchFriendss.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
    }
    </div>
    </>
  )
}

