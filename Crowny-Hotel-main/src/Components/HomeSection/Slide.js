import React, { useState } from "react"


const Home = () => {
  //   const [current, setCurrent] = useState(0)
  // const length = slides.length

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1)
  // }

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1)
  // }

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null
  // }

  const [guestName, setGuestName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const[adults,setAdults]=useState("")
  const[children,setChildren]=useState("")
  const [rooms, setRooms] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Check In Date: ${checkInDate}
           Check Out Date: ${checkOutDate}
           Number of Adults: ${adults}
           Number of Children: ${children}
           Rooms:${rooms}`);


    
// const Home = ({ slides }) => {
//   const [current, setCurrent] = useState(0)
//   const length = slides.length

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1)
//   }

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1)
//   }

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null
//   }




    const res=await fetch("/",{
  
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        guestName,checkInDate,checkOutDate,adults,children,rooms
      })
    });
  const data=await res.json(); 
  if(data.status ===428|| !data)
  {
    window.alert("Invalid registration");
    console.log("Invalid registration");
  }
  else{
    window.alert(" Booking successful");
      
     
    console.log("Booking successful");
  
   
  }

 
  }
  return (
    <>
      {/* <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && <img src={slide.image} alt='Home Image' />}
            </div>
          )
        })}
      </section> */}

      <section className='slide-form'>
        <div className='container'>
          <h2>Enjoy Your Holiday</h2>
          <span>  Book Hotel</span>

          <form  method="POST"action=''>
          <input type='text' placeholder='Guest Name' value={guestName} onChange={(e) =>  setGuestName(e.target.value)} />
         
            <div className='flex_space'>
            <input type='date'  value={checkInDate} onChange={(e) =>setCheckInDate(e.target.value)} />
            <input type='date'  value={checkOutDate} onChange={(e) =>setCheckOutDate(e.target.value)} /> 
             
            </div>
            <div className='flex_space'>
              <input type='numeric' value={adults}onChange={(e)=>setAdults(e.target.value)} placeholder='Adult(s)(18+)' />
              <input type='numeric'   value={children}onChange={(e)=>setChildren(e.target.value)} placeholder='Children(0- 17)' />
            </div>
            <input type='numeric'value={rooms}onChange={(e)=>setRooms(e.target.value)} placeholder='Rooms' />
            <input type='Submit' value='Book Now' onClick={handleSubmit}className='submit' />
            {/* <Link className="flex" to="/pdatepass">
                  <span>I forgot my password</span>
                  </Link> */}
          </form>
        </div>
      </section>
    </>
  )
    }

export default Home
