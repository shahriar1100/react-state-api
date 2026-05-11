import { Suspense } from "react";
import "./App.css";
import { Users } from "./Users";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json(),
);

function App() {
  return (
    <>
      <Suspense fallback={<p>Waiting for messege....</p>}>
        <Users fetchUser ={fetchUser}></Users>
      </Suspense>
    </>
  );
}

export default App;
