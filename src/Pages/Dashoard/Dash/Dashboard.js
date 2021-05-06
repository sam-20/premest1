import {Switch,Route, Link , BrowserRouter} from 'react-router-dom'
import User from '../../../images/suggest.jpg'
import DashCss from './Dashboard.module.css'
import Sinputs from '../Components/Sinputs'
import CurrentR from '../Components/currentR'
import CurrentS from '../Components/CurrentS'
import Rinputs from '../Components/Rinputs'
function Dashboard () {
   

    

    return(
        <BrowserRouter>
        
        <div className ={DashCss.main}>
            <div className = {DashCss.left}>
                <div className={DashCss.lt} >
                    <p className={DashCss.lt2}>Get all traffic updates <br/>  here</p>
                    <div className={DashCss.lt1}>
                        <Link to="/"><p className={DashCss.ptag2}>All Suggested</p></Link>
                        <Link to="/Rinputs"><p className={DashCss.ptag2}>All Requested</p></Link>
                    </div>
                </div>
                <div className={DashCss.lb}>
                    <Switch>
                        <Route exact path = "/" component={Sinputs}/>
                        <Route exact path = "/Rinputs" component={Rinputs}/>
                    </Switch>
                    
                </div>
                
            </div>
            <div className={DashCss.right}>
                    <div className={DashCss.RT}>
                        <div className={DashCss.RT1}>
                            <p className={DashCss.ptag}>Feel free to ask for help,we are one big selfless family.whatever your request,someone out there is ready to respond</p>
                                    
                        </div>
                        <div className={DashCss.RT2}>
                            <p className={DashCss.ptag1}>Don't forget to update us on the traffic in your locality.Your tiny effort could go a long way to save a life,improve productivity and make the country a better place</p>
                            <img src={User} className={DashCss.imge} alt="user"/>
                        </div>
                    </div>
                    <div className={DashCss.RB}>
                        <div className={DashCss.RB1}>

                        <p className={DashCss.lt2}>Current Updates </p>
                        <div className={DashCss.RB2}>
                            <div>
                            <CurrentR/>  
                            </div>
                            <div>
                            <CurrentS/>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
    </div>
    </BrowserRouter>
    )
}
export default Dashboard;