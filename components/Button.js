import style from '../styles/Button.module.css'

export default function Button(props) {

    return (
        props.hoverEffect ?
            <button style={props.customStyle} onClick={props.onPress} className={`${props.customClass} ${style.customButton}  ${props.type == "fill" ? style.customButtonFilled : style.customButtonOutline}`}>
                {props.title}
                {props.children}
            </button>
            :
            <button style={props.customStyle} onClick={props.onPress} className={`${props.customClass} ${style.customButton}  ${props.type == "fill" ? style.customButtonFilledNohover : style.customButtonOutlineNoHover}`}>
                {props.title}
                {props.children}
            </button>
    )
}