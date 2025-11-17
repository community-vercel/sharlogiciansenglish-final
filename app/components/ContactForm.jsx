'use client';

import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaRef.current) {
      toast.error('Recaptcha not ready!');
      return;
    }

    try {
      setIsSubmitting(true);

      const token = await recaptchaRef.current.executeAsync(); // ✅ Execute invisible captcha
      recaptchaRef.current.reset(); // ✅ Always reset after execution

      if (!token) {
        toast.error('Please complete the CAPTCHA verification!');
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData(formRef.current);

    
      const data = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        from_phone: formData.get("phone"),
        from_subject: formData.get("subject"),
        message: formData.get("message"),
      };


      const response = await fetch(`${serverurls}add-contactss/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Thank you for contacting us!');
        formRef.current.reset();
      } else {
        toast.error('Form submission failed.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div >

          
    <input type="text" name="phone" placeholder="Your Phone" required />
  </div>

        <div>
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
        <div>
          <textarea name="message" placeholder="Your Message" required />
        </div>

        {/* Invisible CAPTCHA */}
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible" // ✅ important for invisible mode
          badge="bottomright" // can also be 'inline' or 'bottomleft'
        />

<div className="rn-form-group">
        
          <button disabled={isSubmitting} className="rn-button-style--2 btn-solid"
            type="submit"
            value="submit"
            name="submit"
            id="mc-embedded-subscribe">
            {isSubmitting ? (
              <div className="spinner" />
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />

      {/* Spinner Styles */}
     
    </div>
  );
}