import './errorScreen.scss'
import brokenBottle from '../assets/fragile.png'
import { useEffect } from 'react'

export default function ErrorScreen() {

    useEffect(() => {
        document.title = "Page not found"
    }, [])


    return (
        <div className="base-flex error-screen">
            <img src={brokenBottle} />
            <h3>Error 404 : Page not found</h3>
            <br />
            <a role="button" href='/' className="btn btn-primary" >Go Home</a>
        </div>
    )
}