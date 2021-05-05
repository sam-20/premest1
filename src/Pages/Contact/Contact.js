import {React,useState} from 'react'
import  { useHistory } from 'react-router-dom'
import {useAppContext} from '../../Store/Context'
import Button from '../../Components/Button'
import Inputfields from '../../Components/Inputfields'
import Ccss from './Contact.module.css'
import update from '../../images/update.png'

function Contact() {
    const {updateValues,values,goToPage} = useAppContext();
    const [pop, noPop] = useState (true)
    function Popup () {
        noPop(!(pop))
    }
    function submit(e) {
        e.preventDefault();
        
        fetch('http://localhost:5000/api/v1/contact',
          {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(res => res.json())
          .then(resData => {
            console.log(resData);
            // if (!(updateValues)){alert('input fields empty')}
            if (resData.message === "Thank you for contacting us we'll get back to u soon") {
              goToPage("/homepage")
            }
            else {
              alert("else sorry, we couldnt get your message. Check your connection and try again")
            }
              
            
          }, err => console.log(err))
    
      }
    let history = useHistory();
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
                            <Inputfields placeholder="Full Name" className={Ccss.input} onChange={updateValues}/>
                            <Inputfields placeholder="Email" className={Ccss.input} onChange={updateValues}/>
                            <Inputfields placeholder="Message" className={Ccss.input} onChange={updateValues}/>
                            <Button className={Ccss.btn} text="Contact Us" onClick={submit}/>
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
                            <Button className={Ccss.bton} text="Go home"  onClick={()=> history.push("/")}/>
                           
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
