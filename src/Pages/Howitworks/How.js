import { useHistory , Link} from 'react-router-dom'
import img from '../../images/update.png'
import Button from '../../Components/Button'
import  Hcss from './How.module.css'

 function How() {
     let history = useHistory();
    return(
        <div className={Hcss.Hbody}>
            <div className='Head'>
                    <div className={Hcss.sHead}>
                        <ul style={{color:"#f4af1b", marginTop:"6px"}}>Someone makes a request</ul>
                        <ul style={{color:"#f2bc94", marginTop:"6px"}} >Anyone can respond</ul>
                        <ul style={{color:"white", marginTop:"6px"}}>We make this communication possible</ul>
                    </div>
            
            </div>
            <div className={Hcss.fmiddle}>
                    <div className={Hcss.ffmiddle}>
                   
                        <div className={Hcss.yiddle}>
                            <div className={Hcss.R1}>
                                <p className={Hcss.headings} style={{color:"white"}}>Rushour</p>
                                <p style={{marginTop:"15px",fontSize:"small",color:"#00154f"}}>
                                Basically , Rushour Groups all road users into 2categories. Those who need information or traffic status
                                at a particular point in time and those who update us on relevant information on the road.
                                </p>
                            </div>
                                
                        </div>
                        <div className={Hcss.ziddle}>
                            <div className={Hcss.R3}>
                                
                                <p style={{color:"#f2bc94"}} className={Hcss.headings} >Someone makes a request</p>
                                <p style={{marginTop:"15px",fontSize:"small",color:"#f4af1b"}}>

                                    Want to plan Ahead?
                                    We've got you covered. Rushour how makes it possible for anyone at all to request for traffic information
                                    at the comfort of their home. We make it possible for you to plan yor journey ahead of time.
                                    It doesn't matter what you need to know on the road, we are here to help.
                                </p>
                            </div>

                        </div>
                        <div className={Hcss.xiddle}>
                            <div className= {Hcss.R3}>

                                <p style={{color:"#black"}} className={Hcss.headings}>Anyone can respond</p>
                                <p style={{marginTop:"15px",fontSize:"small",color:"#00154f"}}>

                                Feel like making a difference?, We record all traffics sugested on this platform as and when they come. on click of a Button
                                you can help reduce the traffic in town, increase productivity or save a life even. You can respond to traffic request
                                of other road users, or make a traffic suggestion as and when the need arise
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Hcss.sfmiddle}>
                             <div className={Hcss.L}>

                                <p  className={Hcss.headings} style={{color:"#f2bc94",marginLeft:"30px",marginRight:"30px"}}>We provide a  platform to make this communication possible</p>
                                <p style={{fontSize:"small",marginTop:"20px",color:"#f4af1b",marginLeft:"30px",marginRight:"30px"}}>

                                We beleive road traffic begins with us and can  end with us as well. We have the power not just to reduce 
                                the traffic in town but to prevent it from happening.
                                From street closure to event specific traffic controls, our two way data exchange
                                helps keep all stakeholders informed on traffic status at a particular place within a specific time.
                                </p>
                                <img src={img} alt="share" className={Hcss.img}/>
                                <div className={Hcss.foot}>
                                <Button className={Hcss.btn} text="Signup" color="#f2bc94" onClick={()=> history.push("/Signup")}/>
                                <Link  className={Hcss.link} to="/">  Back to Home</Link>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
    
}
export default How;
