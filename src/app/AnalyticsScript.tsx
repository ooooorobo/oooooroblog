import Script from "next/script";

export const AnalyticsScript = () => (
  <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-W8WNQ2WC88" />
    <Script id={"google-analytics"}>
      {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-W8WNQ2WC88');
                `}
    </Script>
  </>
);
