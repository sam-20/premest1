import {Link} from 'react-router-dom'
import Inputfield from '../../Components/Inputfields'
import Button from '../../Components/Button'
import login from '../../images/unknown.png'
import logincss from './Login.module.css'
import {useAppContext} from '../../Store/Context'

export default function Login (){
    const {updateValues,goToPage} = useAppContext();
    return(
        <div className = {logincss.mainLoge}>
           <div className = {logincss.Log}>
               <div className={logincss.topdiv}>
                     <img src={login} className={logincss.Pimg} alt="pperson"/>
                        <h1 className={logincss.in}>Login</h1>
               </div>

               <div className = {logincss.input}>
                   <Inputfield  name ="email" className={logincss.inpute}placeholder=" Email" type="text" onChange={updateValues}/>
                   <Inputfield name ="password" className={logincss.inpute} placeholder=" Password" type="text" onChange={updateValues}/>
                   <Button text="Log in" width="250px" alignSelf="center" color="blue"/>
                   <Link to = '/' className={logincss.link}>Forgot your username or password?</Link>
               </div>
           </div>  
           <h1  className={logincss.branding}>
                    
                    RUSHOUR
            </h1>
            
        </div>
    )
}