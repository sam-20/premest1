import {Link} from 'react-router-dom'
import Button from '../../Components/Button'
import Inputfield from '../../Components/Inputfields'
import {useAppContext} from '../../Store/Context'
import SignupCSS from './Signup.module.css'

const Signup = () => {
    const {updateValues,goToPage,Validate,values} = useAppContext();
    
    return(
        <div className = {SignupCSS.mainsign}>
            
            

            
            
               

                    <div className={SignupCSS.top}>

                        <h1 className={SignupCSS.signn} >  Sign up</h1>
                        <Inputfield name ="username" className={SignupCSS.inpute} placeholder="Username" type="text" onChange={updateValues}/>
                        <Inputfield name ="email" className={SignupCSS.inpute} placeholder=" Email" type="text" onChange={updateValues}/>
                        <Inputfield name ="password" className={SignupCSS.inpute} placeholder=" Password" type="text" onChange={updateValues}/>
                        <Inputfield name ="Upassword" className={SignupCSS.inpute} placeholder=" Confirm Password" type="text" onChange={updateValues}/>
                        <Button  onClick={ () => goToPage('/') } text = "submit" color = 'peachpuff' width = '300px' alignSelf="center" marginT="15px" />
                          <Link to='/' className = {SignupCSS.linktoLog}>Already have an account ? </Link>
                    </div>
                    <div className={SignupCSS.bottom}>
                        <h1  className={SignupCSS.branding}>
                            RUSHOUR
                        </h1>
                     </div>
            

        </div>

    )
}
export default Signup;