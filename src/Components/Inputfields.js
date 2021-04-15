function Inputfield({label,type,placeholder,name,className,onChange,value}){
    return(
        <div >
                <label>{label}</label>
                <input 
                 type={type} 
                placeholder={placeholder} 
                name= {name} 
                className={className}
                 onChange={onChange}  
                 value={value}>
                 </input>
        </div>
    )
}
export default Inputfield