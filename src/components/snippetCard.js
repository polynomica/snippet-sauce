import React from "react";


export default function SnippetCard(props) {
    return (
        <div className="snippet-card">
            <div className="snippet-card-thumbnail">
                <img
                    src={props.snippetThumbnail}
                    alt="Python Snippet by {Author name} {snippet sauce}"
                />
                <h2 className="snippet-card-title">{props.snippetTitle}</h2>
            </div>
            <div className="base-flex snippet-card-data">
                <div className="base-flex snippet-card-about">
                    <img src={props.authorPic} alt="Author Profile pi" />
                    <div className="base-flex">
                        <span>{props.snippetAuthor}</span>
                        <figcaption className="figure-caption">{props.snippetTime}</figcaption>
                    </div>
                    <button type="button" className="btn btn-success">Visit</button>
                </div>
            </div>
        </div>
    )
}