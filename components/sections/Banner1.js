import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Banner1() {

    const [showPopup, setShowPopup] = useState(false);

    const slides = [
        {
            title: "Streamline Your Credentialing Process with Speed, Accuracy, and Confidence",
            description: "At Med Jaaf, we specialize exclusively in delivering fast, reliable, and customized medical credentialing services to healthcare providers across the United States.",
            image: "/assets/images/new-images/3img.webp"
        },
        {
            title: "Struggling with Medical Credentialing?",
            description: "Let us handle the hassle — streamline your healthcare services with our expert credentialing solutions across the USA.",
            image: "/assets/images/new-images/4img.webp" // Replace with your 2nd image
        },
        {
            title: "Credentialing Solutions That Grow With You",
            description: "Whether you're an independent provider launching your first practice or a growing healthcare group expanding into new states, Med Jaaf adapts to your evolving needs. We manage everything from initial enrollment and multi-state licensing to payer re- credentialing and ongoing compliance — so you can scale with confidence.",
            image: "/assets/images/new-images/5img.webp" // Replace with your 3rd image
        }
    ];
    const togglePopup = () => setShowPopup(!showPopup);
    return (
        <section className="single_banner style_one">
            <style>{`
                /* Allow pagination to be seen outside the swiper box */
                .mySwiper {
                    overflow: visible !important; 
                    position: relative;
                }
                .mySwiper .swiper-pagination {
                    bottom: -60px !important;
                    z-index: 100;
                    
                }
                .mySwiper .swiper-pagination-bullet {
                   background: #ccc;
                    width: 12px;
                    height: 12px;
                    opacity: 0.5;
                    margin: 0 6px !important;
                }
                .mySwiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    transform: scale(1.2);
                    background: #00868c !important; 
                    
                }
                /* Customizing Navigation Arrows */
                .mySwiper .swiper-button-prev {
                    color: #00868c;
                    z-index: 101;
                }
                .mySwiper .swiper-button-next:after, 
                .mySwiper .swiper-button-prev:after {
                    font-size: 20px;
                    font-weight: bold;
                }
                   /* Overlay: Full Screen, Dark Background, Top Layer */
.custom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Pure black background with high opacity */
    background: rgba(0, 0, 0, 0.6); 
    display: flex;
    justify-content: center;
    align-items: center;
    /* Sabse upar dikhane ke liye */
    z-index: 999999 !important; 
    transition: all 0.3s ease-in-out;
    backdrop-filter: blur(5px); /* Optional: background thora blur karne ke liye */
}

/* Modal Box */
.custom-popup {
    background: white;
    padding: 40px;
    border-radius: 20px;
    max-width: 500px;
    width: 90%;
    position: relative;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    z-index: 1000000; /* Overlay se bhi upar */
}

/* Close Button */
.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 28px;
    cursor: pointer;
    color: #333;
    font-weight: bold;
    line-height: 1;
}



/* Contact Options */
.contact-option {
    display: flex;
    align-items: center;
    padding: 18px;
    margin: 12px 0;
    border: 1px solid #eee;
    border-radius: 12px;
    text-decoration: none;
    color: #333;
    transition: 0.3s;
}

.contact-option:hover {
    background: #f0fafa;
    border-color: #00868c;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.contact-option i {
    font-size: 22px;
    color: #00868c;
    margin-right: 15px;
    width: 35px;
    text-align: center;
}

.contact-option div {
    text-align: left;
}

.contact-option strong {
    display: block;
    font-size: 17px;
    margin-bottom: 2px;
}

.contact-option span {
    font-size: 14px;
    color: #666;
}
            `}</style>
            {/* Background remains static as per your design */}
            <div className="image_bg">
                <img src="/assets/images/slider/banner-single-4-bg.png" className="img-fluid" alt="img" />
            </div>

          <Swiper
    spaceBetween={0}
    centeredSlides={true}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop={false} // make sure loop is false
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    onSwiper={(swiper) => {
        // reset pagination on init
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
                                            <div className="title_whole">
                                                <h4 className="title">{slide.title}</h4>
                                            </div>
                                            <p>{slide.description}</p>
                                        </div>
                                        <div className="newsteller_simple mt-4">
                                            <div className="d-flex align-items-center">
                                                <button
                                                    onClick={togglePopup}
                                                    type="button"
                                                    className="btn  btn-sm rounded-pill shadow-sm px-5 py-3 text-uppercase fw-bold d-inline-flex align-items-center justify-content-center"
                                                    style={{
                                                        backgroundColor: '#00868c',
                                                        color: '#fff',
                                                        border: 'none',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#055f61';
                                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                                        e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#00868c';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    Start the Conversation
                                                    <i className="fa fa-chevron-right ms-3" style={{ fontSize: '14px' }}></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="review_box d-flex gap-3  align-items-center mb-5">
                                            {[
                                                "https://speedycredentialing.com/wp-content/uploads/2025/05/Asset-7_.webp",
                                                "https://vagabondtoursofireland.com/images-adventures/reviews/google-reviews.png",
                                                "https://speedycredentialing.com/wp-content/uploads/2025/05/Asset-28home.svg"
                                            ].map((src, i) => (
                                                <div key={i} style={{ width: '80px', height: '80px', marginRight: '10px' }}>
                                                    <img src={src} alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                    <div className="col-lg-1" />
                                    <div className="col-lg-6">
                                        <div className="image d-none d-md-block">
                                            <img src={slide.image} className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Absolute Title remains static as per your design */}

            <div className="section_title abso type_one">
                <div className="title_whole">
                    <h2 className="title"> INSURANCE</h2>
                </div>
            </div>
            {/* --- THE POPUP MODAL --- */}
            {showPopup && (
                <div className="custom-overlay" onClick={togglePopup}>
                    <div className="custom-popup" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={togglePopup}>&times;</span>
                        <h3 className="mb-4" style={{ color: '#00868c' }}>What is the best way to connect?</h3>

                        <a href="mailto:Info@speedycredentialing.com" className="contact-option">
                            <i className="fa fa-envelope"></i>
                            <div>
                                <strong>Email Us</strong>
                                <span>Medjaafsolutions@gmail.com</span>
                            </div>
                        </a>

                        <a href="tel:5712818988" className="contact-option">
                            <i className="fa fa-phone"></i>
                            <div>
                                <strong>Call Us</strong>
                                <span>+959 235 0229</span>
                            </div>
                        </a>

                        <a href="/contact" className="contact-option">
                            <i className="fa fa-file-text"></i>
                            <div>
                                <strong>Contact Us</strong>
                                <span>Complete a detailed Form</span>
                            </div>
                        </a>

                        <a href="sms:+15712818988" className="contact-option">
                            <i className="fa fa-comment"></i>
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