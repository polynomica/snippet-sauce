import './errorScreen.scss'
import brokenBottle from '../assets/fragile.png'
import { useEffect } from 'react'
import NavBar from './navBar'

export default function ErrorScreen(props) {

    useEffect(() => {
        document.title = "Page not found"
    }, [])

    const ErrorText = () => {
        switch (props.mode) {
            case "pageError":
                return <h4>Error 404 : Page not found</h4>;
            case "nosnippet":
                return <h4>Invalid sauce <code>"{props.sauce}"</code> ! No Snippet found.</h4>;
            case "other":
                return <h4>Hmmm... Looks like someone is trying to be a NASA Hacker Today!</h4>
            default:
                return <h4>Hmmm... Looks like someone is trying to be a NASA Hacker Today!</h4>
        }

    }


    return (
        <>
            <NavBar navOptions={true} />
            <div className="base-flex error-screen">
                <img src={brokenBottle} />
                <ErrorText />
                <br />
                <br />
                <span>Didn't found what you were looking for ?</span>
                <span> <strong>Let's be a Hero and Add it yourself!</strong> </span>
                <br />
                <div className="base-flex contrib-btn-holder">
                    <a role="button" rel="noopener noreferrer" target="blank" href="https://github.com/polynomica/service-snippetsauce#add-snippet" className="btn btn-outline-dark">Add Snippet</a>
                    |
                    <a role="button" rel="noopener noreferrer" target="blank" href="https://github.com/polynomica/service-snippetsauce" className="btn btn-outline-primary" >Contribute </a>
                </div>

            </div>
        </>

    )
}