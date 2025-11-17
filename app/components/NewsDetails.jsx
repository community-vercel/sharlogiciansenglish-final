'use client'
import React, {useEffect,useState } from "react";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import error404 from "../not-found";
import Link from "next/link";
import { H1 } from "./Typrography";
import NotFound from "./Notfound";
const NewsDetail=({news})=> {

  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
const bg_image=serverurl + news?.image
const [sanitizedHTML,setsanitizedhtml]=useState()
  useEffect(() => {
  const adjustImagePaths = (html, baseUrl) => {
    if (typeof window !== 'undefined') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const images = doc.querySelectorAll("img");
    
      images.forEach((img) => {
        const src = img.getAttribute("src");
    
        // Skip base64 images
        if (src && src.startsWith("data:")) {
          img.style.width = "auto";  // Let the image retain its natural width
          img.style.height = "auto"; // Let the image retain its natural height
          img.style.objectFit = "contain"; 
        }
    
        // Adjust non-base64 image paths
        if (src && !src.startsWith("http") && !src.startsWith("data:")) {
          img.setAttribute("src", `${serverurl}${src}`);
        }
      });
    
      return doc.body.innerHTML;
      
    }
   
  };
  setsanitizedhtml(adjustImagePaths(news?.detail ))

  }),[]
 
    const formattedDate = new Date(news?.published_date).toLocaleDateString("en-US", {
      month: "long", // 'December'
      day: "numeric", // '13'

      year: "numeric" // '2024'
      });
      const frontend = process.env.NEXT_PUBLIC_FRONT_URL;

      const metadata = {
        title: news?.metaname
          ? String(news.metaname)
          : "SharpLogicians | Creative Digital Agency",
        description: news?.metadesc
          ? String(news?.metadesc)
          : "SharpLogicians | Creative Digital Agency",
        keywords: news?.keywords
          ? String(news.keywords)
          : "bootstrap, business, consulting, coworking space, newss, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
        openGraph: {
          title:
            news?.metaname ||
            news?.metaname ||
            "SharpLogicians | Creative Digital Agency",
          description:
            news?.metades || `SharpLogicians | Creative Digital Agency`,
          url: `${frontend} || "default-slug"}`,
          images: ["/logo-light.png"],
        },
        twitter: {
          card: "summary_large_image",
          title:
            news?.metaname ||
            news?.metaname ||
            "SharpLogicians | Creative Digital Agency",
          description:
            news?.metades || `SharpLogicians | Creative Digital Agency`,
          url: `${frontend} || "default-slug"}`,
          images: ["/logo-light.png"],
        },
      };
      useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []); 
    
      return (
        <>
          <title>{metadata.title}</title>
    
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta
            property="og:description"
            content={metadata.openGraph.description}
          />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.images} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.images} />
      
 
         <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
  className="rn-page-title-area pt--120 pb--190"
  style={{
    backgroundImage: `url(${bg_image})`,
  }}
  data-black-overlay="7"
>
            {/* <Image
                                    width={1920}
                                    height={600}
                                    src={serverurl + news?.image}
                                    alt="news "
                                    layout="responsive"
                                    className="w-100"
                                  /> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                  <H1 className="title theme-gradient">
{news?.news_title}                  </H1>
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock />
                      {formattedDate}
                    </li>
                    <li>
                      <FiUser />
                     {news && news.author?news.author:'Sharplogicians'}
                    </li>
{/*                    
                    <li>
                      <FiHeart />
                      Like
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
               
                    <div
      dangerouslySetInnerHTML={{__html:sanitizedHTML}}
    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Details */}

        {/* Start BLog Comment Form  */}
       
        {/* End BLog Comment Form  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </>
    );
  }

export default NewsDetail;
