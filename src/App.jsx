import { Suspense } from "react";
import "./App.css";
import { Users } from "./Users";
import Friend from "./Friends";
import Posts from "./Posts";

// const fetchUser = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (res) => res.json(),
// );

const fetchFriend =async ()=>{
 const res = await fetch("https://jsonplaceholder.typicode.com/users")
 return res.json()
}

const fetchPosts = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

function App() {
  const friendsPromise = fetchFriend()
  const postsPromise = fetchPosts()
  return (
    <>

    <Suspense fallback={<h2>post loading...</h2>}>
      <Posts postsPromise={postsPromise}></Posts>
    </Suspense>

{/* 
    <Suspense fallback={<p>LOADING FRIEND async....</p>}>
        <Friend friendsPromise = {friendsPromise}></Friend>
      </Suspense> */}
      {/* <Suspense fallback={<p>LOADING....</p>}>
        <Users fetchUser ={fetchUser}></Users>
      </Suspense> */}
      
    </>
  );
}

export default App;
