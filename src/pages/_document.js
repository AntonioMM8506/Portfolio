// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Lytics Tracking Script */}
        <script src="/lytics.js" type="text/javascript" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}