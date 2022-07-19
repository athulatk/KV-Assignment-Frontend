const Button = (props)=>{

    const {label,onClick,className,type,style} = props

    return(
        <button type={type} onClick={onClick} className={className} style={style}>{label}</button>
    )
}

export default Button