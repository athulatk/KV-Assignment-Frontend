const InputField = ({label,type,onChange,value,disabled})=>{
    return(
        <div className="input-field">
            <label>{label}</label>
            <input type={type} value={value} placeholder={`Enter ${label}`} onChange={onChange} disabled={disabled} required/>
        </div>
    )
}

export default InputField