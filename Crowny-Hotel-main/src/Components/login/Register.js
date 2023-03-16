import React, { useState } from "react"
import { useHistory} from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"


const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const history=useHistory()

  
const PostData= async (e) =>{
  e.preventDefault();
  

  const res=await fetch("/register",{
  
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      name,email,password,cpassword
    })
  });
const data=await res.json(); 
if(data.status ===422|| !data)
{
  window.alert("Invalid registration");
  console.log("Invalid registration");
}
else{
  window.alert(" Registration successful");
    setName("")
    setEmail("")
    setPassword("")
    setCpassword("")
  console.log("Registration successful");

  history.push("/sign-in");

}
}

  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form  method="POST"action=''>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              <input type='password' name='cpassword' value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder='Confirm Password' required />

              <button type='submit' onClick={PostData}className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Create an Account Successfully</h1>
                <h3>
                  Name : <p>{cureentValue.name}</p>
                </h3>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Password : <p>{cureentValue.password}</p>
                </h3>
                <h3>
                  Confirm Password : <p>{cureentValue.cpassword}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section> */}
    </>
  )
}

export default Register
