import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { AppProvider } from '../contexts/appContext';
import { MouseProvider } from '@/contexts/mouseContext';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="tagmanager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${
              process.env.NEXT_PUBLIC_GTM_CODE ?? 'GTM-XXXXXXX'
            }');
          `
        }}
      />
      <AppProvider>
        {/* <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY ?? ''}
        > */}
        {/* <MouseProvider> */}
        <Component {...pageProps} />
        {/* </MouseProvider> */}
        {/* </GoogleReCaptchaProvider> */}
      </AppProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
