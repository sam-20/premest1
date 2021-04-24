import {React,useState} from 'react'
import Button from '../../Components/Button'
import Inputfields from '../../Components/Inputfields'
import Ccss from './Contact.module.css'
import update from '../../images/update.png'

function Contact() {
    const [pop, noPop] = useState (true)
    function Popup () {
        noPop(!(pop))
    }
    return (
        <div className={Ccss.main}>
            <div className={Ccss.main1} >
                <div className={Ccss.left}>
                         <img src={update} className={Ccss.img} alt="png"/>
                         <Button className={Ccss.btne} text="Talk to Us" onClick = {Popup}/>
                </div>
                <div className={pop? Ccss.pop : Ccss.right}>
                    <div className={Ccss.rtop} style={{}}>
                          Contact Us  
                    </div>
                    <div className={Ccss.rbottom} >
                        <div className={Ccss.rb1}>
                            <Inputfields placeholder="Full Name" className={Ccss.input}/>
                            <Inputfields placeholder="Email" className={Ccss.input}/>
                            <Inputfields placeholder="Message" className={Ccss.input}/>
                            <Button className={Ccss.btn} text="Contact Us"/>
                        </div>
                        <div className={Ccss.rb2}>
                            <div className={Ccss.rb2t}>
                                <h6 style={{fontSize:"30px"}}>Contact :</h6>
                                <p> fkappau@gmail.com <br/> 233 (0) 245083364 </p>
                            </div>
                            <div className={Ccss.rb2b}>
                                <h6 style={{fontSize:"30px"}}>Address :</h6>
                                <p> AD - 282 - 1818 <br/> Kumasi <br/> Ghana </p>
                            </div>
                            
                           
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
