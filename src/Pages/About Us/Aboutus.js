import React from 'react'
import {Link , useHistory} from 'react-router-dom'
import Button from '../../Components/Button'
import Acss from './Aboutus.module.css'
import top from '../../images/fam.jpg'
import p from '../../images/contact.jpg'
function Aboutus() {
    let history = useHistory ();
    return (
        <div className={Acss.main}>
            <div className={Acss.main1}>
                <div className={Acss.top}>
                    <div className={Acss.imgtdiv}>
                        <img src={p} alt="top" className={Acss.img}/>
                    </div>
                    <div className={Acss.topt}>
                      
                        <h2 style={{marginTop:"50px",fontFamily:"Poppins"}}>About Us </h2>
                        <p style={{fontFamily:"Poppins",fontSize:"small"}} >

                        Rushour help stakeholders get to where they’re going faster, smoother, safer, and happier while working to beat traffic. <br/>
                        Rushour develops practical solutions that empower people to make better choices, from taking the fastest route ,<br/> to leaving at the right time, to sharing daily traffic commutes.
                        Traffic starts with us, but it can end with us, too.
                        We rely on on stakeholders to make travelling an easy thing to do. 
                        </p>
                        
                        <p style={{marginTop:"20px", fontFamily:"Poppins",fontSize:"small"}}>
                        We record all traffics sugested on this platform and make it accessible to all.
                        Among our stakeholders includes drivers,dispatch riders, passengers, delivery companies etc.
                        We’re committed to the greater good.
                        We partner with  first responders to put our community driven data to work for anyone making transportation better for everyone.
                        </p>

                    </div>


                </div>
                <div className={Acss.bottom}>
                    <div className={Acss.bottomt}>
                         <h2 style={{color:"white", marginTop:"40px"}}>Mission </h2>
                         <p style={{color:"white",fontFamily:"Poppins",fontSize:"small"}}>Providing Tailored cost free traffic and direction information to all stakehoholders</p>
                        <h2 style={{color:"white", marginTop:"50px"}}>Vision </h2>
                         <p style={{color:"white",fontFamily:"Poppins",fontSize:"small"}}>Our vision is to create a better everyday traffic life for all Ghanains</p>
                         <div className={Acss.foot}>
                                <Button className={Acss.btn} text="Signup" color="white" onClick={()=> history.push("/Signup")}/>
                                <Link  className={Acss.link} to="/">  Back to Home</Link>
                                </div>
                        </div>
                    <div className={Acss.imgbdiv}>
                        <img src={top} alt="down"  className={Acss.imge}/>
                    </div>

                </div>


            </div>
            
        </div>
    )
}

export default Aboutus
