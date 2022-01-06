import style from '../styles/Button.module.css'

export default function Button(props) {

    return (
        <button className={`${style.customButton} ${props.type == "fill" ? style.customButtonFilled : style.customButtonOutline}`}>
            {props.title}
        </button>
    )
}