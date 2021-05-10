import React, { useState } from 'react'
import { useAppContext } from '../../../Store/Context'
import Button from '../../../Components/Button'
import Dcss from './Req.module.css'
import Select from '../../../Components/Selections'
import Inputfield from '../../../Components/Inputfields'
import User from '../../../images/suggest.jpg'
function Requested() {
    const { updateValues, values } = useAppContext();

    /**this array will store the various requests objects put in by the user
     * eg. 
    [
        {location: "ayeduase", destination: "oduom", time: "06:59", date: "7686-07-06"},
        {location: "amakom", destination: "asafo", time: "06:59", date: "7686-07-06"},
        {location: "ejisu", destination: "tech", time: "06:59", date: "7686-07-06"},
    ]
     */
    const [requestsArr, setRequestsArr] = useState([])

    function Getvalues() {
        console.log(values);

        setRequestsArr([...requestsArr, values])
        console.log(`requests array: ${JSON.stringify(requestsArr)}`);

        // var temparray = traffic
        // console.log(`temparray: ${temparray}`);
    }
    return (

        <div className={Dcss.main}>
            <div className={Dcss.lef}>
                <div className={Dcss.sug}>
                    <h4 className={Dcss.head}>REQUEST FOR <br /> TRAFFIC</h4>
                    <Inputfield label="Current Location :" name="location" className={Dcss.inpute} placeholder="e.g where are u right now " type="text" onChange={updateValues} />
                    <Inputfield label="Destination :" name="destination" className={Dcss.inpute} placeholder="e.g where re you heading " type="text" onChange={updateValues} />
                    <Inputfield label=" Time :" name="time" className={Dcss.inpute} type="time" onChange={updateValues} />
                    <Inputfield label=" Date :" name="date" className={Dcss.inpute} type="date" onChange={updateValues} />
                    <Button text="Request" height="35px" width="300px" className={Dcss.ibtn} onClick={Getvalues} />
                </div>
            </div>
            <div className={Dcss.rit}>
                <div className={Dcss.ritt}>

                    <div className={Dcss.ritt1}>
                        <p className={Dcss.ptg1}>Feel free to ask for help,we are one big selfless family.whatever your request,someone out there is ready to respond</p>

                    </div>
                    <div className={Dcss.ritt2}>
                        <p className={Dcss.ptg}>Don't forget to update us on the  traffic in your locality.Your tiny effort could go a long way to save  a life,improve productivity and  make the country a better place</p>
                        <img src={User} className={Dcss.imge} alt="user" />
                    </div>
                </div>
                <div className={Dcss.ritb}>
                    <div className={Dcss.ritb1}>
                        <h4 className={Dcss.ptg2} >Current Requests</h4>
                        <Select className={Dcss.select} onChange={updateValues} />
                    </div>
                    <div className={Dcss.ritb2} >

                        <div>
                            <Inputfield label="Current Location: " name="Sug Area" className={Dcss.inpute} placeholder="Ejisu" type="text" onChange={updateValues} />

                            <Inputfield label="Destination :" name="Sug Desc" className={Dcss.inpute} placeholder="Adum" onChange={updateValues} />
                        </div>
                        <div>
                            <Inputfield label="Time  :" name="Sug Route" className={Dcss.inpute} placeholder="e.g use ... route " type="time" onChange={updateValues} />
                            <Inputfield label="Date :" name="Distance trav" className={Dcss.inpute} placeholder="1m/hr " type="date" onChange={updateValues} />
                        </div>
                    </div>
                </div>

            </div>

        </div>



    )
}

export default Requested;
