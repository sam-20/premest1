import { useHistory } from 'react-router-dom'
import Button from '../../Components/Button'
import './Home.css'

 function Homepage() {
     let history = useHistory();
    return(
        <div className='Hbody'>
            <div className='Head'>

                    <div className='fHead'>
                        <h1 className="brandname">Rushour</h1>
                        <div className="LS">
                        <Button onClick = {()=>history.push('/login')} Color="peach" width="80px" marginleft ="0px"  text="login"/>
                        <Button onClick = {()=>history.push('/Signup')} Color="peach" width="80px" marginleft ="0px"  text="Signup"/>
                        </div>
                    </div>
                    <div className='sHead'>
                        <ul>Contact</ul>
                        <ul>About Us</ul>
                        <ul>How Rushour Works</ul>
                    </div>
            
            </div>
            <div className='fmiddle'>
                    <div className='ffmiddle'>

                    <h1 className='yiddle'>
                        Overcome The  Hustle In Traffic At No Cost <br/> 
                        Rushour offers community-based traffic details from other users, with a solem aim to helping you avoid traffic and always be able to take the best route to your destination
                    </h1>
                    <h1 className='ziddle'>
                       Because traffic has always sucked  <br/> We aim To Offer the best cost free traffic information to all stakeholders <br/> At No Cost
                    </h1>
                    </div>
                    <div className='sfmiddle'>
                            <h1 >Rush out</h1>
                    </div>
            </div>

            <div className='smiddle'>
                    <h1 className='msmiddle' style={{color:"aqua"}}>
                        The fastest Yet Affordable <br/> Way TO Overcome Traffic
                    </h1>
                    <button className='buttn' onClick = {()=>history.push('/Signup')} style={{backgroundColor:"peach", height :"40px",width:"80px", borderRadius:"15px",marginLeft:"70px" }} >
                        Register
                    </button>
            </div>

            <div className='tmiddle'>
                    <div className="ftmiddle">
                        {/* <img  classname="pic" src={mpic} className="imge" alt="emoji"/>  */}
                        <h1>Request For Traffic</h1>
                        <p>Rushour Reduces <br/> The Hustle That <br/> Comes With Traffic</p>
                    </div>

                    <div className="stmiddle">
                        {/* <img classname="pic" src={mypic} className="imge" alt="emoji"/>  */}
                        <h1>Suggest Traffic</h1>
                        <p>Be a Contributor  <br/> And Help Reduce <br/>The Traffic In Town </p>
                    </div>

                    <div className="ttmiddle">
                        {/* <img  classname="pic" src={ypic} className="imge" alt="emoji"/>  */}
                        <h1>Easy To Use</h1>
                        <p>Get To Your Destination <br/> As Quickly As The Speed <br/>  Of Your Car Allows You To</p>
                    </div>
            
            </div>
        
        </div>
    )
    
}
export default Homepage