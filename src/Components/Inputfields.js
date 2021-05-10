function Inputfield({ label, type, placeholder, name, className, onChange, value, readOnly }) {
    return (
        <div >
            <label style={{ fontSize: "15px", fontWeight: "50p" }}>{label}</label> <br />
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={className}
                onChange={onChange}
                readOnly={readOnly}
                value={value}>
            </input>
        </div>
    )
}
export default Inputfield