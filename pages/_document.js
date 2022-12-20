import { gtagScript } from 'next-gtag';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html>
      <Head />{' '}
      <body>
        <Main />
        <NextScript />
        {gtagScript}
      </body>
    </Html>
  );
};

export default Document;
