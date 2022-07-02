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
        src={`https://www.googletagmanager.com/gtag/js?id=G-89Q90R6CZS`}
      />

      <Script id="my-ga-script-code" strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-89Q90R6CZS');
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
                <a href='https://snippetsauce.tech/' >Home</a>
              </Link>
              <Link href={{ pathname: '/search' }}>
                <a href='https://snippetsauce.tech/search' >Search</a>
              </Link>
              <Link href={{ pathname: '/about' }}>
                <a href='https://snippetsauce.tech/about' >About</a>
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
