import "../styles/globals.css";

import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
