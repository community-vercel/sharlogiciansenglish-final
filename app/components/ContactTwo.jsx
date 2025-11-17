import React, { Component, useEffect } from "react";
import ContactForm from "./ContactForm";

import Image from "next/image";

  const ContactTwo  = ({image,title}) => {

  useEffect(() => {

    },[])
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact Us.</h2>
                <p className="description">
                {title && title?title:''}
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
             {/* {image && <img src={image?image:''} alt="trydo" /> } */}
{image &&
  <Image width={550} height={665} src={image?image:''} alt="Contact Us"  layout="responsive" 
                />
}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ContactTwo;
