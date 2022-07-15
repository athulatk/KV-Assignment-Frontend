const InputField = ({label,type})=>{
    return(
        <div className="input-field">
            <div>{label}</div>
            <input type={type} placeholder={label}/>
        </div>
    )
}

export default InputField