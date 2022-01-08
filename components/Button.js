import style from '../styles/Button.module.css'

export default function Button(props) {

    return (
        props.hoverEffect ?
            <button onClick={props.onPress} className={`${style.customButton}  ${props.type == "fill" ? style.customButtonFilled : style.customButtonOutline}`}>
                {props.title}
            </button>
            :
            <button onClick={props.onPress} className={`${style.customButton}  ${props.type == "fill" ? style.customButtonFilledNohover : style.customButtonOutlineNoHover}`}>
                {props.title}
            </button>
    )
}