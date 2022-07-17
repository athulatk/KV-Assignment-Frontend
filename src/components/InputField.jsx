const InputField = ({label,type,onChange})=>{
    return(
        <div className="input-field">
            <label>{label}</label>
            <input type={type} placeholder={`Enter ${label}`} onChange={onChange} required/>
        </div>
    )
}

export default InputField