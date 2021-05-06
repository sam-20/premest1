
import {useAppContext} from '../../../Store/Context'
import Inputfield from '../../../Components/inputs'
import Button from '../../../Components/Button'
import React from 'react'
import Select from '../../../Components/Selections'
import DashCss from './Current.module.css'
function CurrentR() {
    const {updateValues,} = useAppContext();
   
    return (
        <div>
            <div>
                <h4 className={DashCss.head1}>Requested Traffic</h4>
                <Select  className={DashCss.select} onChange={updateValues} />
                <Button text="Details" height="35px" width="300px" className={DashCss.btn}  />
                <Inputfield label="Current Location :" name ="location" className={DashCss.inpute} placeholder="e.g where are u right now " type="text" onChange={updateValues}/>
                <Inputfield label="Destination :" name ="destination" className={DashCss.inpute} placeholder="e.g where re you heading " type="text" onChange={updateValues}/>
                <Inputfield label=" Time :" name ="time" type="time" className={DashCss.inpute} onChange={updateValues}/>
                <Inputfield label=" Date :" name ="date" type="date" className={DashCss.inpute} onChange={updateValues}/>
            </div>
        </div>
    )
}

export default CurrentR