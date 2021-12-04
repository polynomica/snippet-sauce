import './errorScreen.scss'
import brokenBottle from '../assets/fragile.png'
import { useEffect } from 'react'

export default function ErrorScreen(props) {

    useEffect(() => {
        document.title = "Page not found"
    }, [])

    const ErrorText = () => {
        switch (props.mode) {
            case "pageError":
                return <h3>Error 404 : Page not found</h3>;
            case "nosnippet":
                return <h3>Invalid sauce ! No Snippet found.</h3>;
            default:
                console.log("Error 404 ")
        }

    }


    return (
        <div className="base-flex error-screen">
            <img src={brokenBottle} />
            <ErrorText />
            <br />
            <a role="button" href='/' className="btn btn-primary" >Go Home</a>
        </div>
    )
}