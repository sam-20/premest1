import {Switch,Route} from 'react-router-dom'
import Signup from '../Pages/Signup/Signup'
import Dashboard from '../Pages/Dashoard/Dashboard'
import Login from '../Pages/Login/Login'
import Howitwork from '../Pages/Howitworks/How'
import Homepage from '../Pages/Home/Homepage'
import Aboutus from '../Pages/About Us/Aboutus'
import Contact from '../Pages/Contact/Contact'
function Approutes (){
    return(
        <Switch>
            <Route exact path ="/Login" component = {Login}/>
            <Route  exact path ="/Signup" component = {Signup}/>
            <Route exact path ="/Dashboard" component = {Dashboard}/>
            <Route  exact path ="/How" component = {Howitwork}/>
            <Route  exact path ="/" component = {Homepage}/>
            <Route  exact path ="/Aboutus" component = {Aboutus}/>
            <Route exact path ="/Contact" component = {Contact}/>
        </Switch>
    )
}
export default Approutes;