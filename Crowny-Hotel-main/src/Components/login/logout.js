import "./design.css"


import { useHistory } from "react-router-dom";
import { useEffect } from "react";



 const Logout = () => {



  const history=useHistory();
 
useEffect(() => {
fetch('/Logout' ,
{
  method:"GET",
  headers:{
    Accept:"application.json",
    "Content-type":"application.json"
  },
  credentials:"include"

}).then((res)=> 
{
  history.push( '/sign-in',{replace:true});
if(!res.status===200)
{
  const error=new Error(res.error);
  throw error;
}

}).catch((err ) =>
{
  console.log(err);
});
});




}
export default Logout