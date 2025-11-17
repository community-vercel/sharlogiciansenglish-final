"use client";
import React, {useEffect,useState } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import { H1, H2 } from "./Typrography";
import Image from "next/image";
import NotFound from "./Notfound";

const PortfolioDetails = ({ portfolio }) => {
  const frontend = process.env.NEXT_PUBLIC_FRONT_URL;
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
const bg_image=serverurl+portfolio?.image;

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
  setsanitizedhtml(adjustImagePaths(portfolio?.detail ))

  }),[]
 
  const [hovered, setHovered] = useState(false);

  
  const metadata = {
    title: portfolio?.metaname
      ? String(portfolio.metaname)
      : "SharpLogicians | Creative Digital Agency",
    description: portfolio?.metadesc
      ? String(portfolio?.metadesc)
      : "SharpLogicians | Creative Digital Agency",
    keywords: portfolio?.keywords
      ? String(portfolio.keywords)
      : "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
    openGraph: {
      title:
        portfolio?.metaname ||
        portfolio?.metaname ||
        "SharpLogicians | Creative Digital Agency",
      description:
        portfolio?.metades || `SharpLogicians | Creative Digital Agency`,
      url: `${frontend} || "default-slug"}`,
      images: ["/logo-light.png"],
    },
    twitter: {
      card: "summary_large_image",
      title:
        portfolio?.metaname ||
        portfolio?.metaname ||
        "SharpLogicians | Creative Digital Agency",
      description:
        portfolio?.metades || `SharpLogicians | Creative Digital Agency`,
      url: `${frontend} || "default-slug"}`,
      images: ["/logo-light.png"],
    },
  };
useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []); 
      const [imageLoaded, setImageLoaded] = useState(false);

      // Function to handle image loading
      const handleImageLoad = () => {
        setImageLoaded(true);
      };

      useEffect(() => {
        const img = new window.Image(); // Create a native Image object (window.Image)
        img.src = bg_image;
    
        // Once the image is loaded, update the state to apply the background
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(true); // If an error occurs, still update the state to avoid infinite loading
      }, [bg_image]);
    
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
      
     <div
      className="rn-page-title-area pt--120 pb--190"
      style={{
        backgroundImage: imageLoaded ? `url(${bg_image})` : 'none', // Apply the background image only when loaded
      }}
      data-black-overlay="7"
    >
      {!imageLoaded && (
        <div className="image-placeholder"></div> // Show a loading state or placeholder
      )}
    
    

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pttt--120">
                <H1 className="title theme-gradient">{portfolio?.header} </H1>
                <p>
                {portfolio?.title}.{" "}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--40 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>
                        <strong>Business </strong>
                      </span>
                      <h4>
                        <strong>{portfolio?.branch}</strong>
                      </h4>
                    </div>

                    <div className="port-view">
                      <span>
                        <strong>Project Types </strong>
                      </span>
                      <h4>
                        <strong>{portfolio?.types}</strong>
                      </h4>
                    </div>

                    <div className="port-view">
                      <span>
                        <strong>Program</strong>
                      </span>
                      <h4>
                        <strong>{portfolio?.progam}</strong>
                      </h4>
                    </div>
                  </div>

                  {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.link}`}>
                            <p style={{ display: "inline-table" }}>
                              {val.Social}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                  <h2 style={{marginTop:'55px'}}>
                    <strong>{portfolio?.heading}</strong>
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitizedHTML }}

                  />
                  <div className="slide-btn"  style={{
                  display: "flex",
                  justifyContent: "center",
                 
                }}>
                <a
                  className="rn-button-style--2 btn-primary-color"
                  style={{
                    color: hovered ? '#ffffff' : '#000000', 
                    fontWeight: 600, 
                    // transition: 'color 0.3s ease-in-out'
                  }}
                  onMouseEnter={() => setHovered(true)}  // When the mouse enters, change color
                  onMouseLeave={() => setHovered(false)}
                  href="/quote"
                >
    <span
     
    >
      Get a quote
    </span>                  </a>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

      {/* Start Related Work */}
      {/* <div className="portfolio-related-work pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="theme-color font--18 fontWeight600">
                    Related Work
                  </span>
                  <h2>Our More Projects</h2>
                </div>
              </div>
            </div>
            <div className="row mt--10">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="related-work text-center mt--30">
                  <div className="thumb">
                    <a href="/portfolio-details">
                      <img
                        src={relatedImg1}
                        alt="Portfolio-images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-details">Digital Analysis</a>
                    </h4>
                    <span className="category">Technique</span>
                  </div>
                </div>
              </div>
          
              <div className="col-lg-6 col-md-6 col-12">
                <div className="related-work text-center mt--30">
                  <div className="thumb">
                    <a href="/portfolio-details">
                      <img
                        src={relatedImg2}
                        alt="Portfolio-images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-details">Plan Management</a>
                    </h4>
                    <span className="category">PLANNING</span>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div> */}
      {/* End Related Work */}

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
};

export default PortfolioDetails;
