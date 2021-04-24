
function Button (props){

    return(
        <button style={{
            backgroundColor:props.color,
            fontFamily :"verdana,geneva,sans-serif",
            color:'peach',
            width:props.width,
            height:props.height,
            borderRadius:props.borderr,
            boxShadow:props.BS,
            borderStyle:'dotted',
            border:props.border,
            marginLeft:props.marginL,
            alignSelf:props.alignSelf,
            outline:"none",
            marginTop:props.marginT,
            cursor :"pointer"
            

}}
onClick={props.onClick} className = {props.className}  >
            {props.text}
        </button>
    )
}
export default Button;