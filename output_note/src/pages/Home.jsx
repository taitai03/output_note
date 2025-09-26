import { useContext } from "react";
import { SessionContext } from "../SessionProvider";
import { Navigate } from "react-router-dom";

function  Home(){
  const {currentUser}=useContext(SessionContext);

  if (currentUser == null) return <Navigate replace to="/signup"/>

  return <div>this is home</div>
}
export default Home;