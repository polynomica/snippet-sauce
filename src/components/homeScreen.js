import React from "react";
import SnippetCard from "./snippetCard";
import snippetThumb from '../assets/snippetThumb.png'
import authorPic from '../assets/authorPic.jpg'
import NavBar from './navBar'

export default function HomeScreen() {

    const snippetData = [
        {
            snippetTitle: "Java Swift",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'jv123456'
        },
        {
            snippetTitle: "Python Djangio",
            snippetAuthor: "Suyash Vashishtha",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'py123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
        {
            snippetTitle: "Java Swift",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'jv123456'
        },
        {
            snippetTitle: "Python Djangio",
            snippetAuthor: "Suyash Vashishtha",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'py123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
        {
            snippetTitle: "Python Djangio",
            snippetAuthor: "Suyash Vashishtha",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'py123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },

    ];



    return (
        <>
            <NavBar navOptions={true} />
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
                            snippetId={item.snippetId}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}