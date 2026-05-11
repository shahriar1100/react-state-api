import { Suspense } from "react";
import "./App.css";
import { Users } from "./Users";
import Friend from "./Friend";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json(),
);

const fetchFriend =async ()=>{
 const res = await fetch("https://jsonplaceholder.typicode.com/users")
 return res.json()
}

function App() {
  const friendsPromise = fetchFriend()
  return (
    <>
      <Suspense fallback={<p>LOADING....</p>}>
        <Users fetchUser ={fetchUser}></Users>
      </Suspense>
      <Suspense fallback={<p>LOADING FRIEND async....</p>}>
        <Friend friendsPromise = {friendsPromise}></Friend>
      </Suspense>
    </>
  );
}

export default App;
