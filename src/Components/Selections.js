function Selectoption(props){
    return(
        <div>
            <select className={props.className} name={props.name} onChange={props.onChange}>
                <option >--Type--</option>
                <option value={props.value1}>{props.text1}</option>
                <option value={props.value2}>{props.text2}</option>
                <option value={props.value3}>{props.text3}</option>
                <option value={props.value4}>{props.text4}</option>
                <option value={props.value5}>{props.text5}</option>
            </select>
        
        </div>
    )
}
export default Selectoption