
import Head from 'next/head'
import ssPoster from '../public/ssPoster.png'

export default function SeoHandler(props) {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />

            <title>{props.title}</title>
            <meta name="title" content="Snippet Sauce | An one stop snippet store for all your needs." />
            <meta name="description"
                content="Snippet Sauce is a one stop for all your snippet needs. It's got all the latest boiler plate codes, no matter the programming language, just make sure to remember the SAUCE to your favorite snippets." />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="snippetsauce.tech/" />

            <meta property="og:title" content="Snippet Sauce | An one stop snippet store for all your needs." />
            <meta property="og:description"
                content="Snippet Sauce is a one stop for all your snippet needs. It's got all the latest boiler plate codes, no matter the programming language, just make sure to remember the SAUCE to your favorite snippets." />

            <meta property="og:image" content={ssPoster.src} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="snippetsauce.tech" />

            <meta property="twitter:title" content="Snippet Sauce | An one stop snippet store for all your needs." />
            <meta property="twitter:description"
                content="Snippet Sauce is a one stop for all your snippet needs. It's got all the latest boiler plate codes, no matter the programming language, just make sure to remember the SAUCE to your favorite snippets." />

            <meta property="twitter:image" content={ssPoster.src} />



        </Head>
    )
}