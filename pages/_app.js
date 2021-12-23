import '../styles/globals.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ssLogo from '../components/sslogo.png'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <footer>
        <div>
          <div className='footer-stamp'>
            <img src={ssLogo.src} />
            <span className='ss'>Snippet Sauce</span>
            <span className='company'>by Polynomica</span>
          </div>

          <div className='footer-nav'>
            <a href='#' >Home</a>
            <a href='#' >About</a>
            <a href='#' >Contribute</a>
          </div>

        </div>
        <span className='copy-right'>© 2021| All Rights Reserved | Polynomica</span>

      </footer>
    </Layout>

  )
}

export default MyApp
