import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWordpress,
} from "react-icons/fa";


import Link from "next/link";

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

const FooterTwo = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-start text-sm-left mb_sm--20">
                <a href="/">
                  <img src="/logo-light.png" alt="Logo images" />
                  {/* <Image src={logoLight} width={0} height={0} alt='Logo images ' /> */}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <Link aria-label={`Link to ${val.Social}`} href={`${val.link}` }>{val.Social}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="footer-linkss">
              <ul className="footer-navs">
                <li>
                  <Link href="/portfolio">Work     |</Link>
                </li>
             
                <li>
                  <Link href="/career">Career     |</Link>
                </li>
            
                <li>
                  <Link href="/#about">About   |</Link>
                </li>
                <li>
                  
                  <Link href="/contact">Let's Talk</Link>
                </li>
              </ul>
              </div>
              <div className="text">
              <p>Copyright © {currentYear} Sharpologicans. All Rights Reserved.</p>

                {/* <p>Copyright © 2024 Sharpologicans. All Rights Reserved.</p> */}
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
