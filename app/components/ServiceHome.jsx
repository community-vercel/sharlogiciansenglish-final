'use client';
import React from "react";
import {FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Footer from "../components/Footer";
import ServiceList from '../components/ServiceList'
import Breadcrumb from "../components/Breadcrumb";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";



const ServiceHome =({data})=>{
    const [services, setServices] = useState([]);
    const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
    const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
    
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${serverurls}services/`);
      const data = await response.json();
      setServices(data.data);

    }
    fetchServices()
},[])


const metaTitle = data?.meta_title ;
const metaDescription = data?.meta_description;
const metaKeywords =data?.meta_keywords ;
const metaImages = ['/logo-light.png'];

const frontend = process.env.NEXT_PUBLIC_FRONT_URL;

const metadata = {

  title: metaTitle || 'SharpLogicians |  Service',
  description: metaDescription || 'SharpLogicians | Service | Creative Digital Agency | Service',
  keywords: metaKeywords || "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `${frontend}/service`,
    images: metaImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    url: `${frontend}/service`,
    images: metaImages,
  },

};



        return(
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


              
    <header
        className={`header-area formobile-menu header--transparent `}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <Link href="/">   <Image className="logo-2" width={270} height={72} src="/logo-light.png" alt="Sharplogicians"  /></Link>
            </div>
          </div>
          <div className="header-right">
           
            <div className="header-btn">
              <a className="rn-btn" href="/quote">
                <span>Get a quote</span>
              </a>
            </div>
            </div>
            </div>
            </header>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={ 'Services'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Our Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                        <div className="col-lg-12">
              <ServiceList
                item="6"
                service={services}
                column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
              />
            </div>
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
        )
    
}
export default ServiceHome;