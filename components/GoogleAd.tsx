// components/GoogleAd.tsx
import Script from "next/script";

const GoogleAd = () => {
  return (
    <>
      {/* Load AdSense library */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7883738601124403"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Ad unit */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7883738601124403"
        data-ad-slot="6450896650"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

      {/* Init script */}
      <Script
        id="adsbygoogle-verbal"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </>
  );
};

export default GoogleAd;
