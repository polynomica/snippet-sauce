import style from '../styles/Button.module.css'

export default function Button(props) {

    const ButtonRender = () => {
        if (props.type == "fill") {
            return <button className={`${style.customButton} ${style.customButtonFilled}`}>{props.title}</button>
        }
        if (props.type == "outline") {
            return <button className={`${style.customButton} ${style.customButtonOutline}`}>{props.title}</button >
        }
    }

    return <ButtonRender />
}