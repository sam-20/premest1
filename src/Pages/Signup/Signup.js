import {Link} from 'react-router-dom'
import Button from '../../Components/Button'
import Inputfield from '../../Components/Inputfields'
import {useAppContext} from '../../Store/Context'
import SignupCSS from './Signup.module.css'

const Signup = () => {
    const {updateValues,goToPage,Validate,values} = useAppContext();
    function submit (){
        fetch('http://localhost:5000/api/signup',
        {
            method: 'POST',
            body : JSON.stringify(values),
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response=>response.json())
        .then0(responseData =>{
            console.log(responseData);
        },err=>console.log(err))
    }
    
    return(
        <div className = {SignupCSS.mainsign}>
            
            

            
            
               

                    <div className={SignupCSS.top}>

                        <h1 className={SignupCSS.signn} >  Sign up</h1>
                        <Inputfield name ="username" className={SignupCSS.inpute} placeholder="Username" type="text" onChange={updateValues}/>
                        <Inputfield name ="email" className={SignupCSS.inpute} placeholder=" Email" type="text" onChange={updateValues}/>
                        <Inputfield name ="password" className={SignupCSS.inpute} placeholder=" Password" type="text" onChange={updateValues}/>
                        <Inputfield name ="Upassword" className={SignupCSS.inpute} placeholder=" Confirm Password" type="text" onChange={updateValues}/>
                        <Button  onClick={ submit } text = "submit" color = 'rgb(91, 238, 17)' width = '300px' alignSelf="center" marginT="15px" />
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