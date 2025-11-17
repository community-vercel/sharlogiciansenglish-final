'use client';
import "./globals.css";
import "./index.scss";
import React,{useState,useEffect} from "react";
import Script from 'next/script';
import { usePathname } from "next/navigation";
import { GoogleAnalytics } from '@next/third-parties/google'
import ChatbotLoader from "./components/chat";






export default function RootLayout({ children }) {

 
//     // Ensure we access the router only on the client-side
// const pathname = usePathname(); // Get the current path

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const handleRouteChange = (url) => {
//         window.gtag('config', 'G-SL88DQ1E24', {
//           page_path: url,
//         });
//       };

//       // Call the handleRouteChange function whenever the path changes
//       handleRouteChange(pathname);

//     }
//   }, [pathname]); // Dependency on pathname to trigger the effect

  return (
    <html lang="en">
       <head>
       <link
          rel="preload"
          href="/logo-light.png"  // Path relative to the 'public' folder
          as="image"
          type="image/png"
        />
          <GoogleAnalytics gaId="G-SL88DQ1E24" />

      </head>
      <body >

      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
        
          {children}
          <ChatbotLoader />

      </body>
    </html>
  );
}
