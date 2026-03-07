import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner1() {
  const [showPopup, setShowPopup] = useState(false);

  const slides = useMemo(
    () => [
      {
        title: "Our Services – Four Rays RCM",
        description: "At Four Rays RCM, we provide comprehensive credentialing, enrollment, and revenue cycle support solutions designed to streamline your practice operations and accelerate your reimbursements. Our expert team ensures accuracy, compliance, and timely processing so you can focus on patient care.",
        image: "/assets/images/new-1.jpg",
      },
      {
        title: "Individual & Facility Enrollment",
        description: "We assist healthcare providers with enrollment in Medicare, Medicaid, and commercial insurance networks. We also support facilities including laboratories, home health agencies, and other healthcare organizations with payer enrollments. Our team handles documentation, compliance, and follow-ups for timely approvals.",
        image: "/assets/images/new-2.jpg",
      },
      {
        title: "Licensing, NPI & Pre-Authorization Support",
        description: "Four Rays RCM helps providers with state licensing, multi-state compact licensing, and NPI registration. We also provide pre-authorization services to secure timely approvals for procedures and treatments, minimizing claim denials and ensuring smooth billing operations.",
        image: "/assets/images/new-3.jpg",
      },

    ],
    []
  );

  const togglePopup = () => setShowPopup((s) => !s);

  // Optional: prevent body scroll when modal open
  useEffect(() => {
    if (!showPopup) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showPopup]);

  return (
    <section className="single_banner style_one hero_v2">
      <style>{`
        /* =========================
           HERO V2 (Premium look)
           ========================= */
        .hero_v2 {
          position: relative;
          padding: 0;
          overflow: hidden;
        }

        /* Static background */
        .hero_v2 .image_bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .hero_v2 .image_bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transform: scale(1.83);
          filter: saturate(1.05);
        }

        /* Soft gradient overlay + vignette */
        .hero_v2::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(1200px 600px at 15% 40%, rgba(21,62,125,0.25), transparent 60%),
            radial-gradient(900px 500px at 80% 25%, rgba(9,192,180,0.16), transparent 60%),
            linear-gradient(90deg, rgba(10,18,33,0.72) 0%, rgba(10,18,33,0.35) 55%, rgba(10,18,33,0.18) 100%);
        }

        /* Swiper base */
        .mySwiper {
          position: relative;
          z-index: 2;
          overflow: visible !important;
        }

        /* Slide container sizing */
        .hero_v2 .content_box {
          position: relative;
          padding: 110px 0 70px;
          min-height: 640px;
          display: flex;
          align-items: center;
        }

        /* Left content card feel (without breaking layout) */
        .hero_v2 .section_title.type_one {
          color: #fff;
          max-width: 560px;
        }

        /* Badge */
        .hero_v2 .hero_badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(10px);
          font-size: 13px;
          letter-spacing: 0.2px;
          margin-bottom: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
        }
        .hero_v2 .hero_badge .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #09c0b4;
          box-shadow: 0 0 0 6px rgba(9,192,180,0.18);
        }

        /* Title typography */
        .hero_v2 .section_title.type_one h1.title {
          color: #fff;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.6px;
          font-size: clamp(30px, 3.2vw, 52px);
          margin: 0 0 12px;
          text-shadow: 0 14px 40px rgba(0,0,0,0.35);
        }

        /* Description */
        .hero_v2 .section_title.type_one p {
          color: rgba(255,255,255,0.85);
          font-size: 16px;
          line-height: 1.65;
          margin: 0;
          max-width: 560px;
        }

        /* CTA row */
        .hero_v2 .cta_row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 22px;
          flex-wrap: wrap;
        }

        /* Primary button */
        .hero_v2 .btn_hero {
          border: none;
          border-radius: 999px;
          padding: 14px 26px;
          font-weight: 800;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #153e7d 0%, #0F3567 55%, #0b2a52 100%);
          box-shadow: 0 18px 40px rgba(21,62,125,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .hero_v2 .btn_hero:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 55px rgba(21,62,125,0.45);
          filter: brightness(1.02);
        }
        .hero_v2 .btn_hero:active {
          transform: translateY(-1px);
        }

        /* Secondary small info chips */
        .hero_v2 .chip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.88);
          backdrop-filter: blur(10px);
          font-size: 13px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.16);
        }
        .hero_v2 .chip i {
          color: #09c0b4;
        }

        /* Right image - premium card */
        .hero_v2 .hero_image_wrap {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin-left: auto;
        }
        .hero_v2 .hero_image_card {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          box-shadow: 0 28px 80px rgba(0,0,0,0.40);
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.06);
          transform: translateY(4px);
        }
        .hero_v2 .hero_image_card::after {
          content:"";
          position:absolute;
          inset:0;
          background: linear-gradient(180deg, rgba(10,18,33,0.08) 0%, rgba(10,18,33,0.20) 75%, rgba(10,18,33,0.32) 100%);
          pointer-events:none;
        }
        .hero_v2 .hero_image_card img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          display:block;
          transform: scale(1.01);
        }

        /* Floating accent blob */
        .hero_v2 .accent_blob {
          position: absolute;
          width: 210px;
          height: 210px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 30%, rgba(9,192,180,0.55), rgba(21,62,125,0.12));
          filter: blur(0.3px);
          right: -40px;
          top: -45px;
          z-index: -1;
          box-shadow: 0 30px 80px rgba(9,192,180,0.15);
        }

        /* Pagination positioned nicely */
        .mySwiper .swiper-pagination {
          bottom: -46px !important;
          z-index: 50;
        }
        .mySwiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.45);
          width: 10px;
          height: 10px;
          opacity: 0.55;
          margin: 0 6px !important;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .mySwiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.25);
          background: #09c0b4 !important;
        }

        /* Arrows: glass buttons */
        .mySwiper .swiper-button-prev,
        .mySwiper .swiper-button-next {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(10px);
          color: #fff;
          box-shadow: 0 18px 50px rgba(0,0,0,0.25);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .mySwiper .swiper-button-prev:hover,
        .mySwiper .swiper-button-next:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.18);
        }
        .mySwiper .swiper-button-next:after,
        .mySwiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: 800;
        }

        /* Absolute title (kept, but nicer) */
        .hero_v2 .section_title.abso.type_one {
          position: absolute;
          z-index: 3;
          left: 26px;
          bottom: 22px;
          opacity: 0.85;
          pointer-events: none;
        }
        .hero_v2 .section_title.abso.type_one h2.title {
          color: rgba(255,255,255,0.65);
          letter-spacing: 3px;
          font-weight: 800;
          font-size: 18px;
          margin: 0;
          text-transform: uppercase;
        }

        /* Responsive tweaks */
        @media (max-width: 991px) {
          .hero_v2 .content_box {
            padding: 92px 0 55px;
            min-height: 760px;
          }
          .hero_v2 .hero_image_card img {
            height: 420px;
          }
        }
        @media (max-width: 767px) {
          .hero_v2 .content_box {
            padding: 82px 0 50px;
            min-height: 720px;
          }
          .mySwiper .swiper-button-prev,
          .mySwiper .swiper-button-next {
            display: none;
          }
          .hero_v2 .section_title.abso.type_one {
            display: none;
          }
            
        }

        /* =========================
           POPUP (same, slightly refined)
           ========================= */
        .custom-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.65);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999999 !important;
          transition: all 0.3s ease-in-out;
          backdrop-filter: blur(8px);
        }

        .custom-popup {
          background: rgba(255,255,255,0.98);
          padding: 36px;
          border-radius: 22px;
          max-width: 520px;
          width: 92%;
          position: relative;
          text-align: center;
          box-shadow: 0 16px 60px rgba(0,0,0,0.45);
          z-index: 1000000;
          border: 1px solid rgba(0,0,0,0.06);
        }

        .close-btn {
          position: absolute;
          top: 14px;
          right: 18px;
          font-size: 28px;
          cursor: pointer;
          color: #333;
          font-weight: 900;
          line-height: 1;
        }

        .contact-option {
          display: flex;
          align-items: center;
          padding: 16px;
          margin: 12px 0;
          border: 1px solid #eee;
          border-radius: 14px;
          text-decoration: none;
          color: #333;
          transition: 0.25s;
          background: #fff;
        }

        .contact-option:hover {
          background: #f3fbfb;
          border-color: rgba(21,62,125,0.35);
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(0,0,0,0.10);
        }

        .contact-option i {
          font-size: 20px;
          color: #153e7d;
          margin-right: 14px;
          width: 34px;
          text-align: center;
        }

        .contact-option div {
          text-align: left;
        }

        .contact-option strong {
          display: block;
          font-size: 16px;
          margin-bottom: 2px;
        }

        .contact-option span {
          font-size: 13px;
          color: #666;
        }
      `}</style>

      {/* Background remains static */}
      <div className="image_bg">
        <img src="/assets/images/slider/banner-single-4-bg.png" className="img-fluid" alt="img" />
      </div>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={false}
        modules={[Autoplay, Pagination, Navigation, A11y]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiper.pagination.destroy();
          swiper.pagination.init();
          swiper.pagination.update();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="content_box">
              <div className="large-container">
                <div className="row align-items-center mx-3">
                  <div className="col-lg-5">
                    <div className="section_title type_one">
                      <div className="hero_badge">
                        <span className="dot" />
                        <span>Fast • Reliable • HIPAA-aware Process</span>
                      </div>

                      <div className="title_whole">
                        <h1 className="title">{slide.title}</h1>
                      </div>

                      <p>{slide.description}</p>

                      <div className="cta_row">
                        <button type="button" className="btn_hero" onClick={togglePopup}>
                          Start Now
                          <i className="fa fa-chevron-right" style={{ fontSize: "14px" }} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1" />

                  <div className="col-lg-6">
                    <div className="hero_image_wrap d-none d-md-block">
                      <div className="accent_blob" />
                      <div className="hero_image_card">
                        <img src={slide.image} alt="img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Absolute Title remains static */}
      <div className="section_title abso type_one">
        <div className="title_whole">
          <h2 className="title">INSURANCE</h2>
        </div>
      </div>

      {/* Popup modal */}
      {showPopup && (
        <div className="custom-overlay" onClick={togglePopup}>
          <div className="custom-popup" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={togglePopup}>
              &times;
            </span>
            <h3 className="mb-4" style={{ color: "#153e7d", fontWeight: 800 }}>
              What is the best way to connect?
            </h3>
            <a href="mailto:info@fourraysrcm.com" className="contact-option">
              <i className="fa fa-envelope" />
              <div>
                <strong>Email Us</strong>
                <span>info@fourraysrcm.com</span>
              </div>
            </a>

            <a href="tel:+18552478482" className="contact-option">
              <i className="fa fa-phone" />
              <div>
                <strong>Call Us</strong>
                <span>+1-855-247-8482</span>
              </div>
            </a>

            <a href="/contact" className="contact-option">
              <i className="fa fa-file-text" />
              <div>
                <strong>Contact Us</strong>
                <span>Complete a detailed Form</span>
              </div>
            </a>

            <a href="sms:+18552478482" className="contact-option">
              <i className="fa fa-comment" />
              <div>
                <strong>Text Message</strong>
                <span>Chat with us over Phone Text</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}