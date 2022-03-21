import '../styles/globals.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ssLogo from '../public/sslogo.png'
import Link from 'next/link'
import SeoHandler from '../components/seoHandler'

function MyApp({ Component, pageProps }) {
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
              <a href='' >Home</a>
            </Link>
            <Link href={{ pathname: '/search' }}>
              <a href='' >Search</a>
            </Link>
            <Link href={{ pathname: '/about' }}>
              <a href='' >About</a>
            </Link>
          </div>

        </div>
        <span className='copy-right'>© 2021| All Rights Reserved | Polynomica</span>

      </footer>
    </Layout>

  )
}

export default MyApp
