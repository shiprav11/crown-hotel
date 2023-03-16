  import React, { useState,useContext } from "react"
  import { Link } from "react-router-dom"
  import { useHistory} from "react-router-dom"
  import HeadTitle from "../../Common/HeadTitle/HeadTitle"
  import "./design.css"
  import { UserContext } from "../../App"
// import  TextLink  from  'react-native-text-link';

const Login = () => {

  const {dispatch} = useContext(UserContext)

   const[email,setEmail]=useState("")
  const [password, setPassword] = useState("")
  const history=useHistory()
  
    const loginUser= async (e) =>{
      e.preventDefault();
      
    
      const res=await fetch("/sign-in",{
      
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          email,password
        })
      });
    const data=await res.json(); 
    if(data.status ===400|| !data)
    {
      window.alert("Invalid Login");
      console.log("Invalid Login");
    }
    else{
      dispatch({type:"USER",payload:true})
      window.alert(" Login successful");
       
        setEmail("")
        setPassword("")
        
      console.log("Login successful");
    
      history.push("/");
    }
  }




  return (
   
    
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form method="POST" action='' >
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <Link className="flex" to="/pdatepass">
                  <span>I forgot my password</span>
                  </Link>
                </div>
              </div>

              <button type='submit' onClick={loginUser} className='primary-btn'>
                Log In
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default Login
