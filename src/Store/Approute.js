import {Switch,Route} from 'react-router-dom'
import Signup from '../Pages/Signup/Signup'
import Dashboard from '../Pages/Dashoard/Dashboard'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Homepage/Home'
import Homepage from '../Pages/Home/Homepage'
function Approutes (){
    return(
        <Switch>
            <Route exact path ="/Login" component = {Login}/>
            <Route  exact path ="/Signup" component = {Signup}/>
            <Route exact path ="/Dashboard" component = {Dashboard}/>
            <Route  exact path ="/Home" component = {Home}/>
            <Route  exact path ="/" component = {Homepage}/>
        </Switch>
    )
}
export default Approutes;