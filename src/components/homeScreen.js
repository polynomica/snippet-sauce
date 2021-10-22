import React from "react";
import SnippetCard from "./snippetCard";
import snippetThumb from '../assets/snippetThumb.png'
import authorPic from '../assets/authorPic.jpg'

export default function HomeScreen() {

    const snippetData = [
        {
            snippetTitle: "Java Swift",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
        },
        {
            snippetTitle: "Python Djangio",
            snippetAuthor: "Suyash Vashishtha",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
        },
        {
            snippetTitle: "Java Swift",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
        },
        {
            snippetTitle: "Python Djangio",
            snippetAuthor: "Suyash Vashishtha",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
        },
    ];



    return (
        <section className="base-flex snippet-grid">
            <h3 className="snippet-grid-head">Home</h3>
            <div className="base-flex snippet-grid-wrapper">

                {snippetData.map((item, index) => (
                    <SnippetCard
                        key={index}

                        snippetTitle={item.snippetTitle}
                        snippetAuthor={item.snippetAuthor}
                        snippetTime={item.snippetTime}
                        authorPic={item.authorPic}
                        snippetThumbnail={item.snippetThumbnail}
                    />
                ))}

            </div>
        </section>
    )
}