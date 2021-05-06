import React from 'react'
import {BrowserRouter,Switch,Route , Link,useHistory} from 'react-router-dom'
import Suggested from './Suggest/Suggested'
import Dashboard from './Dash/Dashboard'
import Button from '../../Components/Button'
import Requested from './Requests/Requested'
import Sug from '../../images/suggest.jpg'
import Dashe from '../../images/Dash.png'
// import Profile from '../../images/unknown.png'
import Home from '../../images/Home.png'
import Req from '../../images/Req.png'
import logout from '../../images/Logout.png'
import Dcss from './Maindash.module.css'
function Request() {
    let history = useHistory ()
    return (
        <BrowserRouter>
        <div className={Dcss.main}>
            <div className={Dcss.main1}>

            <div className={Dcss.links}>
                            <div className={Dcss.rush}>
                                <img src={Dashe} className={Dcss.imge} alt="emoji"/> 
                                <Link to = "/" > <p className={Dcss.lnk}>Dashboard</p> </Link>
                            </div>
                            <div className={Dcss.rush}>
                                <img src={Req} className={Dcss.imgel} alt="emoji"/> 
                                <Link to = "/requested" > <p className={Dcss.lnk}>Request</p> </Link>
                            </div>
                            <div className={Dcss.rush}>

                                    
                                <img src={Sug} className={Dcss.imgel} alt="emoji"/> 
                                
                                <Link to = "/suggested" > <p className={Dcss.lnk}>Suggest</p> </Link>
                            </div>
                            <div className={Dcss.nav}>
                                <img src={Home} className={Dcss.imgel} alt="emoji"/> 
                                <Button text="Home" className={Dcss.btn} onClick={()=>history.push("/homepage")} />
                            </div>
                            {/* <div className={Dcss.rush}>
                               
                                <img src={Profile} className={Dcss.imgel} alt="emoji"/> 

                                <Link to = "/profile" > <p className={Dcss.lnk}>Profile</p> </Link>
                                
                            </div> */}
                            <div className={Dcss.nav}>
                                <img src={logout} className={Dcss.imgel} alt="emoji"/>
                                <Button text="logout" className={Dcss.btn} onClick={()=>history.push("/login")} />
                            </div>
            </div>
            <div className={Dcss.routes}>
                <Switch>
                    <Route exact path = "/suggested" component = {Suggested}/>
                    <Route exact path = "/requested" component = {Requested}/>
                    <Route exact path = "/" component = {Dashboard}/>
                </Switch>
            </div>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Request
