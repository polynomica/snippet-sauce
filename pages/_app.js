import '../styles/globals.css'
import React, { useRef, useState, useEffect } from "react";
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ssLogo from '../public/sslogo.webp'
import Link from 'next/link'
import SeoHandler from '../components/seoHandler'
import Script from 'next/script';



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log("Get a Job Bro !")

  }, [])


  return (
    <>
      <Script
        id="my-ga-script-link"
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="my-ga-script-code" strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
       `
        }
      </Script>



      <Layout>



        <SeoHandler />
        <Navbar />

        <Component {...pageProps} />
        <footer>
          <div>
            <div className='footer-stamp'>
              <img alt='Snippet sauce footer logo' src={ssLogo.src} />
              <span className='ss'>Snippet Sauce</span>
              <span className='company'>by Polynomica</span>
            </div>

            <div className='footer-nav'>
              <Link href={{ pathname: '/' }}>
                <a href='https://snippetsauce.netlify.app/' >Home</a>
              </Link>
              <Link href={{ pathname: '/search' }}>
                <a href='https://snippetsauce.netlify.app/search' >Search</a>
              </Link>
              <Link href={{ pathname: '/about' }}>
                <a href='https://snippetsauce.netlify.app/about' >About</a>
              </Link>
            </div>

          </div>
          <span className='copy-right'>© 2021| All Rights Reserved | Polynomica</span>

        </footer>
      </Layout>

    </>

  )
}

export default MyApp
