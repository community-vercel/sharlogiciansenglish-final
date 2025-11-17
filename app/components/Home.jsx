"use client";
import { useState, useEffect} from "react";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import Slider from "react-slick";
import Team from "../components/Team";
import BrandTwo from "../components/BrandTwo"; // Assuming the path to
import Contact from "../components/ContactTwo";
import Testimonial from "../components/Testimonial";
import CounterOne from "../components/CounterOne";
import Link from "next/link";
import FooterTwo from "../components/FooterTwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollSpy from "../components/ScrollSpy";
import ScrollToTop from "react-scroll-up";
import Image from "next/image";
import { H1, H2 } from "../components/Typrography";
import { Suspense } from "react";
import ServiceThreeHome from "../components/ServiceListHome";
import styles from '../components/home.module.css';
import LanguageSelector from "./Customdropdown";
const SlideList = [
  {
    textPosition: "text-center",

    title: "Welcome to Sharplogicians!",
    description:
      "Improve performance through design, development, & digital marketing.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const slickDot = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CreativeLanding = ({ homeDetail }) => {


  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [services, setServices] = useState(homeDetail?.services);
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const frontend = process.env.NEXT_PUBLIC_FRONT_URL;
  const [aboutUsData, setAboutUsData] = useState(homeDetail?.aboutUs);
  const [portfolioData, setPortfolioData] = useState(homeDetail?.portfolio);
  const [teamData, setTeamData] = useState(homeDetail?.team);
  const [testimonials, setTestimonials] = useState(homeDetail?.testimonials);
  const [newsData, setnewsData] = useState(homeDetail?.news);
  const [contactImage, setContactImage] = useState(
    serverurl + homeDetail?.contact?.contact_image
  );
  const [clientImages, setClientImages] = useState(homeDetail?.clients);
  const [title, setnewtitle] = useState(homeDetail?.contact.title);
  const [counts, setcounts] = useState(homeDetail?.counts);
  useEffect(() => {}, [homeDetail]);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu state
  const [isSticky, setIsSticky] = useState(false); // Manage sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu
  const closeMenu = () => setIsMenuOpen(false);
  const metadata = {
    title: homeDetail?.homeDetail.metaname
      ? String(homeDetail.homeDetail.metaname)
      : "SharpLogicians | Creative Digital Agency",
    description: homeDetail?.homeDetail.metadescription
      ? String(homeDetail?.homeDetail.metadescription)
      : "SharpLogicians | Creative Digital Agency",
    keywords: homeDetail?.homeDetail.keywords
      ? String(homeDetail?.homeDetail.keywords)
      : "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
    openGraph: {
      title:
        homeDetail?.homeDetail.metaname ||
        homeDetail?.homeDetail.metaname ||
        "SharpLogicians | Creative Digital Agency",
      description:
        homeDetail?.homeDetail.metadescription ||
        `SharpLogicians | Creative Digital Agency`,
      url: `${frontend} || "default-slug"}`,
      images: ["/logo-light.png"],
    },
    twitter: {
      card: "summary_large_image",
      title:
        homeDetail?.homeDetail.metaname ||
        homeDetail?.homeDetail.metaname ||
        "SharpLogicians | Creative Digital Agency",
      description:
        homeDetail?.homeDetail.metadescription ||
        `SharpLogicians | Creative Digital Agency`,
      url: `${frontend} || "default-slug"}`,
      images: ["/logo-light.png"],
    },
  };

  // Function to handle image load
  const [randomDate, setRandomDate] = useState("");
  

  const changeLanguage = (e) => {
    const selectedLocale = e.target.value;
  
    // Dynamically construct the URL based on the selected language
    const selectedLanguage = selectedLocale === 'en'
      ? 'https://sharplogicians.com'
      : `https://sharplogicians.${selectedLocale}`;
  
    // Open the URL in a new tab for non-English languages, in the same tab for English
    window.open(selectedLanguage, selectedLocale === 'en' ? '_self' : '_blank');
  };
  useEffect(() => {
    function getRandomDate() {
      const startDate = new Date();
      const endDate = new Date(startDate.getFullYear() - 1, startDate.getMonth(), startDate.getDate());
      const randomTimestamp = new Date(startDate - Math.random() * (startDate - endDate)).getTime();
      return new Date(randomTimestamp).toISOString().split('T')[0];
    }

    setRandomDate(getRandomDate()); // Runs only on the client after hydration
  }, []);



  return (
    <>
      <Suspense fallback={<p>Loading posts...</p>}>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sharplogicians",
    "url": "https://sharplogicians.com",
    "logo": "https://sharplogicians.com/logo.png",
    "description": "Sharplogicians is a top-tier software development company specializing in Magento, WordPress, Next.js, Odoo, Python, and cloud hosting solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1309 Coffeen Avenue STE 1200 Sheridan Wyoming",
      "addressLocality": "Sheridan",
      "addressRegion": "Wyoming",
      "postalCode": "82801",
      "addressCountry": "USA"
    },
    "telephone": "+1 307 460 4411",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": testimonials?.length || "85"
    },
    "review": testimonials?.map((job) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": job?.name || "John Doe"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": randomDate || "2024-02-18", // Call the random date function here
      "reviewBody": job?.title || "Sharplogicians provided exceptional service in developing our Magento-based eCommerce platform. Their expertise is unparalleled!"
    }))
  })
}} />


         





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
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images} />

        {/* Header */}
        <header
          className={`header-area formobile-menu header--fixed default-color ${
            isSticky ? "sticky" : ""
          }`}
        >
          <div className={`header-wrapper ${isMenuOpen ? "menu-open" : ""}`}>
            {/* Logo */}
            <div className="header-left">
              <div className="logo">
                <Link href="/">
                  <Image
                    className="logo-1"
                    width={270}
                    height={72}
                    src="/logo-light.png"
                    alt="Logo"
                  />
                  <Image
                    className="logo-2"
                    width={270}
                    height={72}
                    src="/logo-light.png"
                    alt="Logo"
                  />
                  {/* <img className="logo-2" src="/logo-light.png" alt="Logo" /> */}
                </Link>
              </div>
            </div>
            <div className="humberger-menu d-block d-lg-none pl--20">
                <span onClick={toggleMenu} className="menutrigger text-white">
                  {isMenuOpen ? <FiX /> : <FiMenu />}
                </span>
              </div>
            {/* Main Menu */}
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <ul className="mainmenu">
                  <ScrollSpy
                  
                    sectionIds={[
                      "#home",
                      "#service",
                      "#about",
                      "#portfolio",
                      "#team",
                      "#testimonial",
                      "#blog",
                      "#contact",
                    ]}
                    activeClass="is-current" // Add your active class name
                    closeMenu={closeMenu} // Pass the closeMenu function here
                  />
                  
                </ul>
                
              </nav>

              {/* Quote Button */}
              <div className="header-btn">
                <Link className="rn-btn" href="/quote">
                  <span>Get Quote</span>
                </Link>
              </div>
              {/* <div className="pl--20">
              <LanguageSelector />
              </div> */}
              <div className="header-btns p-0">
 <LanguageSelector />
    </div>
              {/* Hamburger Menu */}
              
            </div>
          </div>
        </header>
        {/* End Header Area */}

        {/* Start Slider Area */}
        <div className="slider-activation slider-creative-agency" id="home">
        <div className={`${styles.bg_images} ${styles.bg_images__26}`} data-black-overlay="6">
        {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {homeDetail?.homeDetail.heading ? (
                          <H1 className="title theme-gradient">
                            {homeDetail?.homeDetail.heading}
                          </H1>
                        ) : (
                          ""
                        )}
                        {homeDetail?.homeDetail.detail && (
                          <H2 className="description">
                            {homeDetail?.homeDetail.detail}
                          </H2>
                        )}

                        {value.buttonText && (
                          <div className="slide-btn">
                            <Link
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Slider Area */}

        {/* Start Service Area */}
        <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="service"
        >
          <div className="container">
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceThreeHome
                  item="6"
                  service={services}
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start About Area */}
        <div className="about-area ptb--120 bg_color--5" id="about">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    {/* {aboutUsData &&  <img className="w-100" src={serverurl+aboutUsData?.image} alt="About Images" />} */}
                    {aboutUsData && (
                      <Image
                        src={serverurl + aboutUsData?.image}
                        alt="About Images"
                        width={500}
                        height={665}
                        layout="responsive"
                        loading="lazy"
                        className="w-100"
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{aboutUsData?.heading}</h2>
                      <p className="description">{aboutUsData?.description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">{aboutUsData?.firstTitle}</h3>
                          <p>{aboutUsData?.firstDescription}</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">{aboutUsData?.secondTitle}</h3>
                          <p>{aboutUsData?.secondDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}
        <div
          aria-hidden="true"
          className="portfolio-area pt--120 pb--140 bg_color--1"
          id="portfolio"
        >
          <div  aria-hidden="true" className="rn-slick-dot">
            <div  aria-hidden="true" className="container">
              <div  aria-hidden="true" className="row">
                <div  aria-hidden="true" className="col-lg-6">
                  <div  aria-hidden="true" className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">Our Portfolio</h2>
                    <p>{portfolioData && portfolioData[0]?.description}</p>
                  </div>
                </div>
              </div>
              <div  aria-hidden="true" className="row">
                <div  aria-hidden="true" className="col-lg-12">
                  <div
                    aria-hidden="true"
                    className="slick-space-gutter--15 slickdot--20"
                  >
                    <Slider {...slickDot} aria-hidden="true">
                      {portfolioData?.map((value, index) => (
                        <div
                          aria-hidden="true"
                          className="portfolio"
                          key={index}
                        >
                          <div   aria-hidden="true"className="thumbnail-inner">
                            <div>
                              <div
                                className={`thumbnail ${serverurl}${value.image}`}
                              ></div>
                              {value?.image && (
                                <Image
                                  width={500}
                                  height={665}
                                  className="thumbnail"
                                  src={`${serverurl}${value?.image}`}
                                  alt={value.title ? value.title : "Portfolio"}
                                  layout="responsive"
                                />
                              )}
                            </div>

                            <div
                              className={`bg-blr-image ${
                                serverurl + value.image
                              }`}
                            ></div>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <p>{value.title}</p>
                              <h4>
                                <Link
                                  aria-hidden="true"
                                  href={`/portfolio/${value.slug}`}
                                >
                                  {value.heading}
                                </Link>
                              </h4>
                              <Link
                                aria-hidden="true"
                                className="portfolio-button rn-btn"
                                href={`/portfolio/${value.slug}`}
                              >
                                {value.buttonText}
                              </Link>
                            </div>
                          </div>

                         
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">

                 Our Fun Facts                 </h3>
                </div>
              </div>
            </div>
            <CounterOne count={counts && counts} />
          </div>
        </div>

        {/* Start Team Area */}
        <div className="rn-team-area ptb--120 bg_color--1" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                  <h2 className="title">Skilled Team</h2>
                  <p>{teamData && teamData[0]?.description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <Team
                column="col-lg-4 col-md-6 col-sm-6 col-12"
                team={teamData}
              />
            </div>
          </div>
        </div>
        

        <div
          className="rn-testimonial-area bg_color--5 ptbss--120"
          id="testimonial"
        >
          <div className="container">
            <Testimonial test={testimonials} />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Blog Area */}
        <div
          className="rn-blog-area pt--120 pb--140 bg_color--1"
          id="blog"
          aria-hidden="true"
        >
          <div className="container" aria-hidden="true">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="section-title text-left">
                  <h2>Latest News</h2>
                  <p>{newsData && newsData[0]?.description}</p>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0"
            >
              <div className="col-lg-12">
                <Slider aria-hidden="true" {...slickDot}>
                  {newsData?.map((value, i) => (
                    <div
                      aria-hidden="true"
                      className="blog blog-style--1"
                      key={i}
                    >
                      <div className="thumbnail">
                        <Link aria-hidden="true" href={`/news/${value.slug}`}>
                          {/* <img src={serverurl+value?.image} alt="Blog Images" /> */}
                          {value?.image && (
                            <Image
                              width={390}
                              height={532}
                              src={serverurl + value?.image}
                              alt="News Images"
                              layout="responsive"
                            />
                          )}
                        </Link>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value?.title}</p>
                        <h4 className="title">
                          <Link aria-hidden="true" href={`/news/${value.slug}`}>
                            {value?.content}
                          </Link>
                        </h4>
                        <div className="blog-btn">
                          <Link
                            aria-hidden="true"
                            className="rn-btn text-white"
                            href={`/news/${value?.slug}`}
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Area */}

        {/* Start Contact Area */}
        <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
          <Contact image={contactImage} title={title} />
        </div>
        <div className="rn-brand-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo clientImages={clientImages} />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
      </Suspense>
      
    </>
  );
};

export default CreativeLanding;
