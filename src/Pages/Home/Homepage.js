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
                        <h1>Rushour</h1>
                    </div>
                    <div className ={Homecss.list}>
                        <ul>
                        <li classname={Homecss.link}>HOW IT WORKS</li>
                        <li classname={Homecss.link}>ABOUT US</li>
                        <li classname={Homecss.link}>CONTACT</li>
                        </ul>
                    </div>
                    <div className={Homecss.btn}>
                        
                        <Button width="150px" text="Login" marginL="10px" color="transparent" border="none" onClick={()=>history.push('./login')}/>
                        <Button width="150px" text="Signup"marginL="20px" color="orange" onClick={()=>history.push('./login')}/>  
                    </div>
                </div>
                <div className={Homecss.middlediv}>
                    <h1 className={Homecss.mid}>Overcome The  Hustle In Traffic At No Cost </h1>
                    {/* <h5> Because traffic has always sucked We aim To Offer the best cost free traffic information to all stakeholders  At No Cost</h5> */}
                    <Button width="150px" text="Register" color="orange"/>
                </div>
            </div>

            <div className={Homecss.foot}>
                    <div className={Homecss.ftmiddle}>
                        <img  classname="pic" src={car} className={Homecss.imge} alt="emoji"/> 
                        <h3>Request For Traffic</h3>
                        <p>Rushour Reduces <br/> The Hustle That <br/> Comes With Traffic</p>
                    </div>

                    <div className={Homecss.stmiddl}>
                        <img classname="pic" src={sug} className={Homecss.imge} alt="sug"/> 
                        <h3>Suggest Traffic</h3>
                        <p>Be a Contributor  <br/> And Help Reduce <br/>The Traffic In Town </p>
                    </div>

                    <div className={Homecss.ttmiddle}>
                        <img  classname="pic" src={drive} className={Homecss.imge} alt="drive"/>
                        <h3>Easy To Use</h3>
                        <p>Get To Your Destination <br/> As Quickly As The Speed <br/>  Of Your Car Allows You To</p>
                    </div>
            
            </div>
            
        </div>
    )
}

export default Homepage
