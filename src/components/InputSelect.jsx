const InputSelect = ({label,options})=>{
    return(
        <div className="input-field">
            <div>{label}</div>
            <select name="" id="">
                {options.map((item,index)=>(
                    <option value="" key={index}>{item}</option>
                ))}
            </select>
        </div>
    )
}
export default InputSelect