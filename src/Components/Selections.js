function Selectoption(props, className ){
    return(
        <div>
            <select className={className}>
                <option>--Type--</option>
                <option>{props.text1}</option>
                <option>{props.text2}</option>
                <option>{props.text3}</option>
                <option>{props.text4}</option>
                <option>{props.text5}</option>
            </select>
        
        </div>
    )
}
export default Selectoption