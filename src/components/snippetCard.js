import React from "react";
import { useHistory } from "react-router-dom";
import './snippetCard.scss'


export default function SnippetCard(props) {

    const history = useHistory();

    const formattedTitle = props.snippetTitle.replaceAll(' ', '-');
    const snippetId = props.snippetId;
    const imageAlt = `Snippet by ${props.snippetAuthor} ${props.snippetId}`

    const openDetails = () => history.push({ pathname: '/snippet', search: `?${formattedTitle}/`, hash: `${snippetId}`, state: { snippetName: props.snippetTitle, snippetId: props.snippetId } });

    return (
        <div className="snippet-card">
            <div onClick={openDetails} className="snippet-card-thumbnail">
                <img src={props.snippetThumbnail} alt={imageAlt} />
                <h2 className="snippet-card-title">{props.snippetTitle}</h2>
            </div>

            <div className="base-flex snippet-card-about">
                <img src={props.authorPic} alt="Author Profile pi" />
                <div className="base-flex">
                    <span>{props.snippetAuthor}</span>
                    <figcaption className="figure-caption">{props.snippetTime}</figcaption>
                </div>
                <button onClick={openDetails} type="button" className="btn btn-success">Visit</button>
            </div>

        </div>
    )
}