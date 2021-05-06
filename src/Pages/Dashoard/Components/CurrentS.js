
import {useAppContext} from '../../../Store/Context'
import Inputfield from '../../../Components/inputs'
import Button from '../../../Components/Button'
import React from 'react'
import Select from '../../../Components/Selections'
import DashCss from './Current.module.css'
function CurrentS() {
    const {updateValues,} = useAppContext();
   
    return (
        <div>
            <div>
                <h4 className={DashCss.head1}>Suggested Traffic</h4>
                <Select  className={DashCss.select} onChange={updateValues} />
                <Button text="Details" height="35px" width="300px" className={DashCss.btn}  />
                <Inputfield label="Area/Road: " name ="Sug Area" className={DashCss.inpute} placeholder="e.g off Asafo - Tech Road" type="text" onChange={updateValues}/>
                <Select namee="Traffic Type" text2="Traffic" text1="Road Block" name="traffic type" text3="Accident" text4="Police Inspection" className={DashCss.select} onChange={updateValues} />
                {/* <Inputfield label="Description :" name ="Sug Desc" className={DashCss.inpute} placeholder="where are u talking about?" onChange={updateValues}/> */}
                <Inputfield label="Suggested Route :" name ="Sug Route" className={DashCss.inpute} placeholder="e.g use ... route " type="text" onChange={updateValues}/>
                {/* <Inputfield label=" Date :" name ="date" type="date" className={DashCss.inpute} onChange={updateValues} /> */}
                <Inputfield label=" Time :" className={DashCss.inpute} name="time" placeholder="e.g 10:00pm " type="time" onChange={updateValues} />
            </div>
        </div>
    )
}

export default CurrentS