import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Adobe Fonts */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(d) {
                var config = {
                  kitId: 'swp2bnx',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
          `,
            }}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon16.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="favicon64.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="favicon128.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="favicon256.png"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
