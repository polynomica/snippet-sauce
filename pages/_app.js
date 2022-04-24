import '../styles/globals.css'
import React, { useRef, useState, useEffect } from "react";
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ssLogo from '../public/sslogo.webp'
import Link from 'next/link'
import SeoHandler from '../components/seoHandler'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log("No !")

  }, [])

  return (
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

  )
}

export default MyApp
