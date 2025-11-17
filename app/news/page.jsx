"use client";
import React, { useState, useEffect, Fragment } from "react";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import Image from "next/image";

const News = () => {
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const [newsdata, setNewsdata] = useState([]);
  const [visibleItems, setVisibleItems] = useState(9); // Track how many items are visible

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${serverurls}news/`);
      const data = await response.json();
      // Sort by id in descending order
      const sortedData = data.data.sort((a, b) => b.id - a.id);
      setNewsdata(sortedData);
    };

    fetchServices();
  }, []);

  const metaTitle = "SharpLogicians | News";
  const metaDescription = "SharpLogicians | Creative Digital Agency | News";
  const metaImages = ["/logo-light.png"];
  const frontend = process.env.NEXT_PUBLIC_FRONT_URL;

  const metadata = {
    title: metaTitle || "SharpLogicians | Service",
    description: metaDescription || "SharpLogicians | News | Creative Digital Agency | News",
    keywords:
      "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${frontend}/services`,
      images: metaImages,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      url: `${frontend}/services`,
      images: metaImages,
    },
  };

  // Function to load more items
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 9); // Increase visible items by 9
  };

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:image" content={metadata.openGraph.images[0]} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images[0]} />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrumb Area */}
      <Breadcrumb title={"News"} />
      {/* End Breadcrumb Area */}

      {/* Start Service Area */}
      <div className="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
        <div className="rn-slick-dot">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                  <h2 className="title">All News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slick-space-gutter--15 slickdot--20">
                  <div className="row">
                    {newsdata?.slice(0, visibleItems).map((value, index) => (
                      <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left" key={index}>
                        <div className="portfolio">
                          <div className="thumbnail-inner">
                            <div>
                              <Image
                                width={500}
                                height={665}
                                className="thumbnail"
                                src={`${serverurl}${value.image}`}
                                alt={value.title || "Portfolio"}
                                layout="responsive"
                              />
                            </div>
                            <div className={`bg-blr-image ${serverurl}${value.image}`}></div>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <h4>
                                <Link href={`/news/${value.slug}`}>{value.title}</Link>
                              </h4>
                              <div className="portfolio-button">
                                <Link className="rn-btn" href={`/news/${value.slug}`}>
                                  Read More
                        
                                </Link>
                              </div>
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            {visibleItems < newsdata.length && (
              <div className="row mt--30">
                <div className="col-lg-12 text-center">
                  <button className="rn-btn" onClick={loadMore}>      Load More
              
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* End Service Area */}

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

export default News;