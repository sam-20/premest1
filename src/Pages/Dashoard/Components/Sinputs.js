
import React from 'react'
import DashCss from './Dashboard.module.css'
import Inputfield from '../../../Components/Inputfields'
import Button from '../../../Components/Button'
import Select from '../../../Components/Selections'
import {useAppContext} from '../../../Store/Context'
function Sinputs() {
    const {updateValues,values} = useAppContext();
    function Getvalues (){
        console.log(values);

        // var temparray = traffic
        // console.log(`temparray: ${temparray}`);
        // // temparray.push(values)
        // // setTraffic(temparray)
        // // console.log(traffic);
    }
    return (
       
        <div>
            <div className = {DashCss.sug}>
                <h4 className={DashCss.head}>SUGGESTED TRAFFICS</h4>
                <Select className={DashCss.select} onChange={updateValues} />
                <Button className={DashCss.btn} text="Details" height="35px" width="300px" onClick={Getvalues}/>
                <Inputfield label="Area/Road: " name ="Sug Area" className={DashCss.inpute} placeholder="e.g off Asafo - Tech Road" type="text" onChange={updateValues}/>
                <Select namee="Traffic Type" text2="Traffic" text1="Road Block" name="traffic type" text3="Accident" text4="Police Inspection" className={DashCss.select} onChange={updateValues} />
                <Inputfield label="Description :" name ="Sug Desc" className={DashCss.inpute} placeholder="where are u talking about?" onChange={updateValues}/>
                <Inputfield label="Suggested Route :" name ="Sug Route" className={DashCss.inpute} placeholder="e.g use ... route " type="text" onChange={updateValues}/>
                <Inputfield label=" Date :" name ="date" type="date" className={DashCss.inpute} onChange={updateValues} />
                <Inputfield label=" Time :" className={DashCss.inpute} name="time" placeholder="e.g 10:00pm " type="time" onChange={updateValues} />
            </div>
        </div>
    )
}

export default Sinputs
