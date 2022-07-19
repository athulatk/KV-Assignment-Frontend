const InputSelect = ({label,options,onChange,value})=>{
    return(
        <div className="input-field">
            <label>{label}</label>
            <select name="" id="" onChange={onChange} value={value} required>
                {options.map((item)=>(
                    <option value={item.value} key={item.key}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}
export default InputSelect