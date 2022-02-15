import Document, {Html, Head, Main, NextScript} from 'next/document'

class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script defer data-domain="inspin.co" src="https://pa.inspin.co/js/latest.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
