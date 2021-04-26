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
import {useState} from 'react'

function Dashboard () {
    const {updateValues,goToPage,values} = useAppContext();
    function Getvalues (){
        console.log(values);

        var temparray = traffic
        console.log(`temparray: ${temparray}`);
        // temparray.push(values)
        // setTraffic(temparray)
        // console.log(traffic);
    }

    const [traffic, setTraffic] = useState([])

    return(
        
        <div className ={DashCss.main}>


            <div className = {DashCss.dash} >

                    <div className={DashCss.left}>
                        
                        <div className = {DashCss.left1}>
                            <div className={DashCss.rush}>
                                <img src={Rushour} className={DashCss.imge} alt="emoji"/> 
                                <p>Rushour</p>
                            </div>
                            <div className={DashCss.rush}>
                                <img src={Dash} className={DashCss.imge} alt="emoji"/> 
                                <p>Dashboard</p>
                            </div>
                            <div className={DashCss.rush}>
                                <img src={Profile} className={DashCss.imge} alt="emoji"/> 
                                <p>Profile</p>
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
                                <Select text2="Traffic" text1="Road Block" name="select" text3="Accident" text4="Police Inspection" className={DashCss.select} onChange={updateValues} />
                                <Inputfield label="Description :" name ="Sug Desc" className={DashCss.inpute} placeholder="where are u talking about?" onChange={updateValues}/>
                                <Inputfield label="Suggest Route :" name ="Sug Route" className={DashCss.inpute} placeholder="e.g use ... route " type="text" onChange={updateValues}/>
                                {/* <Inputfield label="Suggest Route :" name ="Sug Route" className={DashCss.inpute} placeholder="e.g use ... route " type="text" onChange={updateValues}/> */}
                                <Inputfield label=" Time :" className={DashCss.inpute} name="time" placeholder="e.g 10:00pm " type="time" onChange={updateValues} />
                                <Button text="Suggest" height="35px" width="300px" onClick={Getvalues}/>
                            </div>
                            <div>
                                <h4 style={{textAlign:"center"}}>REQUEST FOR TRAFFIC</h4>
                                <Inputfield label="Current Location :" name ="location" className={DashCss.inpute} placeholder="e.g where are u right now " type="text" onChange={updateValues}/>
                                <Inputfield label="Destination :" name ="destination" className={DashCss.inpute} placeholder="e.g where re you heading " type="text" onChange={updateValues}/>
                                <Inputfield label=" Time :" name ="time" className={DashCss.inpute} />
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
                            <h3 style={{alignSelf:'center',justifySelf:'center'}}>Get all your traffic update here</h3>
                            <div className={DashCss.RBLL}>
                            <div className={DashCss.RBL} >
                                <h4>Suggested Traffic</h4>
                                <Select className={DashCss.Sselect} />
                                <Select className={DashCss.Sselect} />
                                <Select className={DashCss.Sselect} />
                                <Select className={DashCss.Sselect} />
                            </div>
                            <div className={DashCss.RBR}>
                            <h4>Requested Traffic</h4>
                                <Select className={DashCss.Sselect} />
                                <Select className={DashCss.Rselect} />
                                <Select className={DashCss.Rselect} />
                                <Select className={DashCss.Rselect} />
                            </div>
                            </div>

                        </div>
                        
                        

                    </div>
                        
                        
                    </div>
            </div>  

           
        </div>
    )
}
export default Dashboard;