const InputSelect = ({label,options,onChange})=>{
    return(
        <div className="input-field">
            <label>{label}</label>
            <select name="" id="" onChange={onChange} required>
                {options.map((item)=>(
                    <option value={item.label} key={item.key}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}
export default InputSelect