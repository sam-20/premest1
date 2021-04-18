import {Switch,Route, Link} from 'react-router-dom'
import {useAppContext} from '../../Store/Context'
import Button from '../../Components/Button'
import Select from '../../Components/Selections'
import Inputfield from '../../Components/Inputfields'
import DashCss from './Dashboard.module.css'
import Rushour from '../../images/Plogo.png'
import Dash from '../../images/Dash.png'
import Profile from '../../images/Profile.png'
import settings from '../../images/Settings.png'
import User from '../../images/User.png'
import logout from '../../images/Logout.png'


function Dashboard () {
    const {updateValues,goToPage} = useAppContext();
    return(
        
        <div className ={DashCss.main}>


            <div className = {DashCss.dash} >

                    <div className={DashCss.left}>
                        
                        <div className = {DashCss.left1}>
                            <div className={DashCss.rush}>
                                <img src={Rushour} className={DashCss.imge} alt="emoji"/> 
                                <h3>Rushour</h3>
                            </div>
                            <div className={DashCss.rush}>
                                <img src={Dash} className={DashCss.imge} alt="emoji"/> 
                                <h3>Dashboard</h3>
                            </div>
                            <div className={DashCss.rush}>
                                <img src={Profile} className={DashCss.imge} alt="emoji"/> 
                                <h3>Profile</h3>
                            </div>
                            <div className={DashCss.rush}>
                                <img src={settings} className={DashCss.imge} alt="emoji"/> 
                                <p>Settings</p>
                            </div>
                            <div className={DashCss.rush}>
                                <img src={logout} className={DashCss.imge} alt="emoji"/> 
                                <p>Logout</p>
                            </div>
                        </div>

                        <div className = {DashCss.left2}>
                            <h3>WELCOME</h3>
                            <div className = {DashCss.sug}>
                                <h4 style={{textAlign:"center"}}>SUGGEST TRAFFIC</h4>
                                <Inputfield label="Area/Road: " name ="Sug Area" className={DashCss.inpute} placeholder="e.g off Asafo - Tech Road" type="text" onChange={updateValues}/>
                                <Select text2="Traffic" text1="Road Block" text3="Accident" text4="Police Inspection" className={DashCss.select} />
                                <Inputfield label="Description :" name ="Sug Desc" className={DashCss.inpute} placeholder="where are u talking about?" type="text" onChange={updateValues}/>
                                <Inputfield label="Suggest Route :" name ="Sug Route" className={DashCss.inpute} placeholder="e.g use " type="text" onChange={updateValues}/>
                                <Inputfield label=" Time :" className={DashCss.inpute}/>
                                <Button text="Suggest" height="35px" width="300px"/>
                            </div>
                            <div>
                                <h4 style={{textAlign:"center"}}>REQUEST FOR TRAFFIC</h4>
                                <Inputfield label="Current Location :" name ="Sug Route" className={DashCss.inpute} placeholder="e.g where are u right now " type="text" onChange={updateValues}/>
                                <Inputfield label="Destination :" name ="Sug Route" className={DashCss.inpute} placeholder="e.g where re you heading " type="text" onChange={updateValues}/>
                                <Inputfield label=" Time :" className={DashCss.inpute} />
                                <Button text="Request" height="35px" width="300px" />
                            </div>
                            
                        </div>
                    
                    </div>
                    <div>
                    
                    <div className={DashCss.right}>
                        

                        <div className={DashCss.RT}>
                        
                                <div className={DashCss.RT1}>
                                    <p>Feel free to ask for help,we are one big selfless family.whatever your request,someone out there is ready to respond</p>
                                    
                                </div>
                                <div className={DashCss.RT2}>
                                    <p>Don't forget to update us on the traffic in your locality.Your tiny effort could go a long way to save a life,improve productivity and make the country a better place</p>
                                <img src={User} className={DashCss.imge} alt="user"/>
                                </div>
                        </div>
                        <div className={DashCss.RB}>
                            rB
                            <div className={DashCss.RBL} >

                                <div className={DashCss.RBL1}></div>
                                <div className={DashCss.RBL1}></div>
                                <div className={DashCss.RBL1}></div>
                            </div>
                            <div className={DashCss.RBR}>

                                <div className={DashCss.RBL1}></div>
                                <div className={DashCss.RBL1}></div>
                                <div className={DashCss.RBL1}></div>
                            </div>

                        </div>
                        
                        

                    </div>
                        
                        
                    </div>
            </div>  

           
        </div>
    )
}
export default Dashboard;