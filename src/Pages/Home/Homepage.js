import React from 'react'
import {useHistory} from 'react-router-dom'
import Homecss from './Homepage.module.css'
import Button from '../../Components/Button';
import car from '../../images/carr.jpg'
import logo from '../../images/Plogo.png'
import sug from '../../images/suge.png'
import drive from '../../images/sharee.png'


function Homepage() {
    let history = useHistory();
    return (
        <div className={Homecss.main}>
            <div className={Homecss.up}>
                
                <div className = {Homecss.top}>
                        <div className = {Homecss.tp} >
                            <img  classname="pic" src={logo} className={Homecss.mge} alt="emoji"/> 
                            <h1 style={{color:"#99CA0A",marginLeft:"2px"}}>Rushour</h1>
                        </div>
                        <div className ={Homecss.list}>
                            <ul style={{marginLeft:"5vh"}}>
                                {/* <a classname={Homecss.link}>HOW IT WORKS</a>
                                <a classname={Homecss.link}>ABOUT US</a>
                                <a classname={Homecss.link}>CONTACT US</a> */}
                                <Button  width="150px" height="35px" text="About Us" color="transparent" border="none" onClick={()=>history.push("./Aboutus")}/>
                                <Button  width="150px" height="35px" text="Contact"  color="transparent" border="none" onClick={()=>history.push("./Contact")}/>
                                <Button  width="150px" height="35px" text="How It works" marginL="10px" color="transparent" border="none" onClick={()=>history.push("./How")}/>
                            </ul>
                        </div>
                    <div className={Homecss.btn}>
                        
                        <Button width="150px" height="35px" text="Login"  color="transparent" border="none" onClick={()=>history.push("./login")}/>
                        <Button width="150px" height="35px" text="Signup"  marginR="" border="none" color="#074b66" onClick={()=>history.push("./Signup")}/>  
                    </div>
                </div>
                <div className={Homecss.middlediv}>
                    <div className={Homecss.mid}>

                    <h1 style={{marginTop:"70px"}} >OVERCOMING THE HUSTLE IN TRAFFIC MIGHT BE SIMPLER <br/>THAN YOU THINK. </h1>
                    {/* <p > Because traffic has always sucked, We aim To Offer the best cost free traffic information to all stakeholders  At No Cost</p> */}
                    <Button marginT="80px" width="150px" text="Learn More" color="#074b66"  height="40px" border="none" onClick={()=>history.push("./Aboutus")}/>
                    </div>
                </div>
            </div>

            <div className={Homecss.foot}>
                    <div className={Homecss.ftmiddle}>
                        <img  classname="pic" src={car}  className={Homecss.imege} alt="emoji"/> 
                        <h3 className={Homecss.stm}>Request For Traffic</h3>
                        <p className={Homecss.stm}>Rushour Reduces <br/> The Hustle That <br/> Comes With Traffic</p>
                    </div>

                    <div >
                        <img classname="pic" src={sug} className={Homecss.ige} alt="sug"/> 
                        <h3 className={Homecss.stm}>Suggest Traffic</h3>
                        <p className={Homecss.stm}>Be a Contributor  <br/> And Help Reduce <br/>The Traffic In Town </p>
                    </div>

                    <div className={Homecss.ttmiddle}>
                        <img  classname="pic" src={drive} className={Homecss.imge} alt="drive"/>
                        <h3 className={Homecss.stm}>Easy To Use</h3>
                        <p className={Homecss.stm}>Get To Your Destination <br/> As Quickly As The Speed <br/>  Of Your Car Allows You To</p>
                    </div>
            
            </div>
            
        </div>
    )
}

export default Homepage
