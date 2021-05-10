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
     * we provide initial state to show in the drop down menu if the user hasnt put any requests
     * eg. 
    [
        {location: "ayeduase", destination: "oduom", time: "06:59", date: "7686-07-06"},
        {location: "amakom", destination: "asafo", time: "06:59", date: "7686-07-06"},
        {location: "ejisu", destination: "tech", time: "06:59", date: "7686-07-06"},
    ]
     */
    const [requestsArr, setRequestsArr] = useState([{ location: "Not selected", destination: "Not selected", time: "00:00", date: "2000-01-01" }])


    /**when a user selects a particular request object from the requestsArr , we fetch only that object 
     * into this state variable.
     * initially since there's no selected request we set the default paramaters
    */
    const [selectedReq, setSelectedReq] = useState({ location: "Not selected", destination: "Not selected", time: "00:00", date: "2000-01-01" })

    function Getvalues() {

        /**keep the previous state (previous values in the array and add the incoming values to it) */
        setRequestsArr([...requestsArr, values])
    }

    /**when a user selects an item in the select drop down we
     * update the input fields below the select menu
     */
    function updateInputs(e) {

        /**we filter out the object from the requestsArr based on the 
         * comparing location property from the requestsArr (array.location)
         * WITH 
         * location value we set to the option's value prop (e.target.value)
         */
        let newobj = requestsArr.find(array => array.location === e.target.value)
        setSelectedReq(newobj)
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


                        {/**the objects in the requestedarray are mapped into the select option */}
                        <select
                            name={requestsArr}
                            id="requestsarray"
                            onChange={updateInputs}
                            className={Dcss.newSelect}
                        >
                            {
                                requestsArr.map((count, index) => {
                                    return (
                                        <option key={index} value={count.location}>
                                            {`Location:${count.location}    Destination:${count.destination}    Time:${count.time}  Date:${count.date}`}
                                        </option>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <div className={Dcss.ritb2} >

                        <div>
                            <Inputfield
                                value={selectedReq.location} readOnly={true}
                                label="Current Location: " name="Sug Area" className={Dcss.inpute}
                                placeholder={selectedReq.location} type="text" />

                            <Inputfield
                                value={selectedReq.destination} readOnly={true}
                                label="Destination :" name="Sug Desc" className={Dcss.inpute}
                                placeholder={selectedReq.destination} />
                        </div>
                        <div>
                            <Inputfield
                                value={selectedReq.time} readOnly={true}
                                label="Time  :" name="Sug Route" className={Dcss.inpute} placeholder="e.g use ... route " type="time" />

                            <Inputfield
                                value={selectedReq.date} readOnly={true}
                                label="Date :" name="Distance trav" className={Dcss.inpute} placeholder="1m/hr " type="date" />
                        </div>
                    </div>
                </div>

            </div>

        </div >



    )
}

export default Requested;
