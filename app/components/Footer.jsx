"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWordpress,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/SharpLogicians/" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/sharplogicians/",
  },
  {
    Social: <FaWordpress />,
    link: "https://www.upwork.com/agencies/425295923279892480/",
  },
  { Social: <FaTwitter />, link: "https://x.com/sharplogicians" },
];

const Footer = ({ heading3 }) => {
  const [heading, setheading] = useState(heading3 || "");
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const [homeDetail, setHomeDetail] = useState({
    metaname: "",
    metadescription: "",
    keywords: "",
    metanamecontact: "",
    metadescriptioncontact: "",
    keywordscontact: "",
    metanamequote: "",
    metadescriptionquote: "",
    keywordsquote: "",
    heading: "",
    detail: "",
    footeremail: "",
    footeremail2: "",
  });
  useEffect(() => {
    const getDetails = async () => {
      const response2 = await fetch(`${serverurls}contact/`);
      const response33 = await fetch(`${serverurls}get-home-detail/`);
      const data33 = await response33.json();
      setHomeDetail(data33);

      if (response2.ok) {
        const data7 = await response2.json();
        setheading(data7.data.heading3);
      }
    };
    getDetails();
  }, []);
  return (
    <React.Fragment>
      <footer className="footer-area">
        <div className="footer-wrapper">
          <div className="row align-items-end row--0">
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="inner">
                  <span>Ready To Do This</span>

                  {heading3 && heading3 ? (
                    heading3 && <h2>{heading3 ? heading : ""}</h2>
                  ) : (
                    <h2>{heading && heading ? heading : ""}</h2>
                  )}
                  <a className="rn-button-style--2" href="/contact">
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="footer-right bg_image bg_image--8"
                data-black-overlay="6"
              >
                <div className="row">
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>Quick Link</h4>
                      <ul className="ft-link">
                        <li>
                          <Link href="/portfolio">Work</Link>
                        </li>
                        {/* <li>
                          <a href="/#about">About</a>
                        </li> */}
                        <li>
                          <Link href="/career">Career</Link>
                        </li>
                        <li>
                          <Link href="/contact">Let's Talk</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="footer-link">
                      <h4>Say Hello</h4>
                      <ul className="ft-link">
                        <li>
                          <a href={`mailto:${homeDetail?.footeremail}`}>
                            {homeDetail && homeDetail
                              ? homeDetail?.footeremail
                              : " support@sharplogician.com"}
                          </a>
                        </li>
                        <li>
                          <a href={`mailto:${homeDetail?.footeremail2}`}>
                            {homeDetail && homeDetail
                              ? homeDetail?.footeremail2
                              : " support@sharplogician.com"}
                          </a>
                        </li>
                      </ul>

                      <div className="social-share-inner">
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                          {SocialShare.map((val, i) => (
                            <li key={i}>
                              <Link href={`${val.link}`}>{val.Social}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Widget  */}

                  <div className="col-lg-12">
                    <div className="copyright-text">
                    <p>Copyright © {currentYear} All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
