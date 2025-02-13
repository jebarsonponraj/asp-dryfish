import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ASP Dryfish",
  description: "ASP Dryfish Merchants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/67ad67ad3a842732607e14bb/1ijulpvoi';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();

              // Enhanced branding removal
              const removeBranding = () => {
                try {
                  // Remove the branding div
                  const brandingDiv = document.querySelector('div[id*="sc0ifjs9nvt"]');
                  if (brandingDiv) brandingDiv.remove();

                  // Inject CSS to prevent branding
                  const style = document.createElement('style');
                  style.textContent = \`
                    div[id*="sc0ifjs9nvt"],
                    .tawk-flex-center,
                    a[class*="tawk-branding"],
                    a[class*="tawk-button-small"] {
                      display: none !important;
                      visibility: hidden !important;
                      opacity: 0 !important;
                    }
                  \`;
                  
                  const chatFrame = document.querySelector('iframe[title*="chat"]:nth-child(2)');
                  if (chatFrame && chatFrame.contentDocument) {
                    chatFrame.contentDocument.head.appendChild(style);
                  }
                } catch (e) {}
              };

              // Run repeatedly to ensure branding stays hidden
              setInterval(removeBranding, 1000);
            `,
          }}
        ></script>
      </body>
    </html>
  );
}
