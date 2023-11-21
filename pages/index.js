import Wrapper from "../layout/wrapper";
import Home from "./home/Home";
import Script from "next/script";

const MainRoot = () => {
  return (
    <Wrapper>
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/19790c70b19a49e41cc25753/script.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8DK9TKL1SH"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8DK9TKL1SH');
          `,
        }}
      />
      <Home />
    </Wrapper>
  );
};

export default MainRoot;
