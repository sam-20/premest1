import {useAppContext} from '../../Store/Context'
import {Link} from 'react-router-dom'
import Inputfield from '../../Components/Inputfields'
import Button from '../../Components/Button'
import login from '../../images/unknown.png'
import logincss from './Login.module.css'
import drive from '../../images/xxx.png'

export default function Login (){
    const {updateValues} = useAppContext();
    
    return(
        <div className = {logincss.mainLoge}>
            <div className = {logincss.Loge} >

            <div className={logincss.branding}>
               <h1 className={logincss.hi}>Rushour</h1>
               <img src={drive} className={logincss.imge} alt="driver"/>
               <div className={logincss.foot} >
                   <h4>New to rushour?</h4>
                   <Link to ="/signup" style={{marginLeft:"10px"}}>Create an account</Link>
               </div>
           </div>
           <div className = {logincss.Log}>
               <div className={logincss.topdiv}>
                     <img src={login} className={logincss.Pimg} alt="pperson"/>
                        <h1 className={logincss.in}>Login</h1>
               </div>

               <div className = {logincss.input}>
                   <Inputfield label="Email :" name ="email" className={logincss.inpute}placeholder=" example@gmail.com" type="text" onChange={updateValues}/>
                   <Inputfield label="Password :"  name ="password" className={logincss.inpute} placeholder=" *******" type="text" onChange={updateValues}/>
                   <Button text="Log in" width="250px" height="40px" alignSelf="center" color="white"  BS="2px 2px 2px" borderr="20px" marginT="5px" />
                   <Link to = '/' className={logincss.link}>Forgot your username or password?</Link>
               </div>
            </div>
           </div>  
           
            
        </div>
    )
}