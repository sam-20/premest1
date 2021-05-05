
import {useAppContext} from '../../../Store/Context'
import Inputfield from '../../../Components/Inputfields'
import Button from '../../../Components/Button'
import React from 'react'
import DashCss from './Dashboard.module.css'
function Rinputs() {
    const {updateValues,values} = useAppContext();
    function Getvalues (){
        console.log(values);

        // var temparray = traffic
        // console.log(`temparray: ${temparray}`);
        // temparray.push(values)
        // setTraffic(temparray)
        // console.log(traffic);
    }
    return (
        <div>
            <div>
                <h4 className={DashCss.head1}>REQUESTED TRAFFICS</h4>
                <Inputfield label="Current Location :" name ="location" className={DashCss.inpute} placeholder="e.g where are u right now " type="text" onChange={updateValues}/>
                <Inputfield label="Destination :" name ="destination" className={DashCss.inpute} placeholder="e.g where re you heading " type="text" onChange={updateValues}/>
                <Inputfield label=" Time :" name ="time" type="time" className={DashCss.inpute} onChange={updateValues}/>
                <Inputfield label=" Date :" name ="date" type="date" className={DashCss.inpute} onChange={updateValues}/>
                <Button text="Request" height="35px" width="300px" className={DashCss.btn}  onClick={Getvalues}/>
            </div>
        </div>
    )
}

export default Rinputs
