import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <meta
          name="description"
          content="Glakon IT || Kreativität aus Ansbach"
        />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, IT, it, creative, creative agency, education, hosting, landing page, portfolio, responsive, react, nextjs, software, design, grafik, graphics, videos, videography, ansbach, Ansbach, Stadt Ansbach, bachelor, bildung, clever, modern, neu, groß, kunden"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
