
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory} from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"


// const Updatepass =() => {
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [email, setEmail] = useState("")
//   const history=useHistory()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const res=await fetch("/pdatepass", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ oldPassword, newPassword ,email}),
//     })
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data); // handle response from server
      // })
      // .catch((err) => console.error(err));

//       const data=await res.json(); 
// if(data.status ===422|| !data)
// {
//   window.alert("Invalid ");
//   console.log("Invalid ");
// }
// else{
//   window.alert(" Registration successful");
    
//     setEmail("")
//     setOldPassword("")
//     setNewpassword("")
//   console.log("Registration successful");
// }

//   };


const Updatepass = () => {
   
    const [email, setEmail] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const history=useHistory()
  
    
  const handleSubmit= async (e) =>{
    e.preventDefault();
    
  
    const res=await fetch("/pdatepass",{
    
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email,oldPassword,newPassword
      })
    });
  const data=await res.json(); 
  if(data.status ===401|| !data)
  {
    window.alert("Invalid registration");
    console.log("Invalid registration");
  }
  else{
    window.alert(" Password changed Successfully");
     
      setEmail("")
      setOldPassword("")
      setNewPassword("")
    console.log("Registration successful");
  
    history.push("/");
  
  }
  }
  
  return (

     
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Change your password.</p>
            <form method="POST" action='' >
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='oldPassword' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder='Old Password' />
              <input type='password' name='newPassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password' />
              
              
                

              <button type='submit' onClick={handleSubmit} className='primary-btn'>
                Submit Password
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

         
    </>

  );
}

export default Updatepass;
