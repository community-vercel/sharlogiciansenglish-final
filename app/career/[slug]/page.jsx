'use client';
import Header from "@/app/components/Header";
import ScrollToTop from "react-scroll-up";
import Footer from "@/app/components/Footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from '../Careers.module.css';
import NotFound from "@/app/components/Notfound";
import { toast, ToastContainer } from 'react-toastify';  // Import toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toastify

const CareerPage = () => {
  const [data, setData] = useState();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cv: null,
  });

  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${serverurls}get-job/`, {
        method: 'POST',
        body: JSON.stringify({ slug: params.slug }),
      });
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const [id, setid] = useState(0);

  const handleChanges = (dataid) => {
    setid(dataid);
    toggleModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      cv: e.target.files[0],
    }));
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('id', id);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('cv', formData.cv);
    setIsSubmitting(true); // Disable inputs and show loading indicator

    try {
      const response = await fetch(`${serverurls}submit-application/`, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
                toast.success("Thank you for applying ")
                setIsSubmitting(false); // Re-enable inputs

        setFormData({
          name: '',
          email: '',
          cv: null,
        });
        toggleModal();
      } else {
        setIsSubmitting(false); // Re-enable inputs

        // Handle error
      }
    } catch (error) {
      // Handle error
      setIsSubmitting(false); // Re-enable inputs

    }
  };
  const metadata = {
    title:  data?.title
      ? String(data.title)
      : "SharpLogicians | Creative Digital Agency",
    description:  data?.description
      ? String( data.description)
      : "SharpLogicians | Creative Digital Agency",
    keywords:  data?.title
      ? String( data.title)
      : "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
    openGraph: {
      title:
         data?.title ||
         data?.title ||
        "SharpLogicians | Creative Digital Agency",
      description:
         data?.description ||
        `SharpLogicians | Creative Digital Agency`,
      url: `sharplogicians.com/career || "default-slug"}`,
      images: ["/logo-light.png"],
    },
    twitter: {
      card: "summary_large_image",
      title:
         data?.title ||
         data?.title ||
        "SharpLogicians | Creative Digital Agency",
      description:
         data?.description ||
        `SharpLogicians | Creative Digital Agency`,
        url: `sharplogicians.com/career || "default-slug"}`,
        images: ["/logo-light.png"],
    },
  };
  
 

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
  
      <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

      <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="5">
        <h1 className="career-title-header">Career Opportunities</h1>
        <p className="career-description">Explore our exciting career opportunities and join our team of passionate professionals.</p>
      </div>

      <div className={styles.careerlist}>
        <div className={styles.careercard}>
          <h3 className={styles.careertitle}>{data?.title}</h3>
          <div className={styles.careerdetails}>
            <p><strong>Category:</strong> {data?.category}</p>
            <p><strong>Location:</strong> {data?.location}</p>
            <p><strong>Deadline:</strong> {new Date(data?.deadline).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {data?.description}</p>
          </div>
          <button className={styles.submitBtn} onClick={() => handleChanges(data.id)}>
            Apply Now
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className={`${styles.modal} ${isModalOpen ? styles.open : ''}`}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={toggleModal}>&times;</span>
              <h2>Apply Now</h2>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="cv">Upload Your CV</label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <div className="backto-top mt-20">
        <ScrollToTop showUnder={160}>
        </ScrollToTop>
      </div>

      <Footer />
         <ToastContainer 
              position="top-right"
              autoClose={3000} // Auto-close after 5 seconds
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
             
            />
    </>
  );
};

export default CareerPage;
