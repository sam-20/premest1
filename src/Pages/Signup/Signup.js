import {Link , useHistory} from 'react-router-dom'
import Button from '../../Components/Button'
import Inputfield from '../../Components/Inputfields'
import {useAppContext} from '../../Store/Context'
import SignupCSS from './Signup.module.css'

const Signup = () => {

    const {updateValues,goToPage} = useAppContext();
    
    return(
        <div className = {SignupCSS.mainsign}>
            <div className={SignupCSS.new}>
                    <div className={SignupCSS.top}>

                        <h1 className={SignupCSS.signn} >  Sign up</h1>
                        <Inputfield name ="username" className={SignupCSS.inpute} placeholder="Username" type="text" onChange={updateValues}/>
                        <Inputfield name ="email" className={SignupCSS.inpute} placeholder=" Email" type="text" onChange={updateValues}/>
                        <Inputfield name ="Phone" className={SignupCSS.inpute} placeholder="Phone" type="text" onChange={updateValues}/>
                        <Inputfield name ="password" className={SignupCSS.inpute} placeholder=" Password" type="text" onChange={updateValues}/>
                        <Inputfield name ="Upassword" className={SignupCSS.inpute} placeholder=" Confirm Password" type="text" onChange={updateValues}/>
                        <Button onClick={()=>goToPage("/")} text = "submit" className={SignupCSS.btn}/>
            
                          <Link to='/Login' className = {SignupCSS.linktoLog}>Already have an account ? </Link>
                    </div>
                    <div className={SignupCSS.bottom}>
                        <div className={SignupCSS.bl} >
                            <div  className={SignupCSS.b2}>

                            <p style={{color:"white", fontFamily :"verdana,geneva,sans-serif",fontSize:"large"}}>Overcome The  
                                <br/> Hustle In Traffic</p>
                            <p style={{fontSize:"small",marginTop:"10px"}}>
                                Get traffic and direction information at the comfort of your home before you pla your journey,
                                Feel free to ask for help. We are one big selfless family,whatever your request we are ready to
                                respond.
                            </p>
                            </div>
                        </div>
                     </div>
            </div>    

            

        </div>

    )
}
export default Signup;