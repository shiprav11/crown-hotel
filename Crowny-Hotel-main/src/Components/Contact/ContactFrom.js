import React, { useState } from "react"
import "./Contact.css"
// import { useHistory} from "react-router-dom"



const ContactFrom = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { fname, lname,phone,email,subject,company, message } = e.target.elements;
    let details = {
      fname: fname.value,
      lname:lname.value,
      phone:phone.value,
      email: email.value,
      subject:subject.value,
      company:company.value,
      message: message.value,
    };
    let response = await fetch("/contact", {
      method:"POST",
        headers:{
          "Content-type":"application/json"
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  
  

  
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contact Form</h2>
            <p>Fill out the form below, we will get back you soon.</p>

            <form onSubmit={handleSubmit}>
           
          
              <div className='grid1'>
                <div className='input'>
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input type='text' name='fname'  required />
                </div>
                <div className='input'>
                  <span>
                    Last Name <label>*</label>
                  </span>
                  <input type='text' name='lname'  required />
                </div>
                <div className='input'>
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input type='numeric' name='phone'  />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email'  required />
                </div>
                <div className='input'>
                  <span>Subject</span>
                  <input type='text' name='subject'  />
                </div>
                <div className='input'>
                  <span>Your Company</span>
                  <input type='text' name='company'  />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message'></textarea>
              </div>
              <button className='primary-btn'  type="submit">{status}</button>
            </form>
          </div>

          <div className='side-content'>
            <h3>Visit our location</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
            <br />

            <h3>Message us</h3>
            <span>info@exampal.com</span>
            <br />
            <span>+01 123 456 789</span>
            <br />

            <div className='icon'>
              <h3>Follow Us</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      </>
  )
  }

export default ContactFrom

