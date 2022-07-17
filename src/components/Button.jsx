const Button = (props)=>{

    const {label,onClick,className,type} = props

    return(
        <button type={type} onClick={onClick} className={className}>{label}</button>
    )
}

export default Button