//Modules
import SEO from '../seo.config'

import { DefaultSeo } from 'next-seo'

//Style
import '../styles/styles.scss'

function App({ Component, pageProps }) {

  return (
    <>
      <DefaultSeo {...SEO} />
      <main id="main">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App