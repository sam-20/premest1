function Inputfield({label,type,placeholder,name,className,onChange,value}){
    return(
        <div >
                <label style={{fontSize:"15px",fontWeight:"50p",color:"wheat"}}>{label}</label> <br/>
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