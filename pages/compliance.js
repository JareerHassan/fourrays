import Layout from "@/components/layout/Layout";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Compliance() {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <>
            <Layout breadcrumbTitle="Compliance">
                {/* TOP SECTION */}
                <div
                    className="px-3"
                    style={{ maxWidth: "970px", margin: "0 auto", textAlign: "start", marginTop: "40px" }}
                >
                    <h3>Ensuring Data Security and Compliance in Healthcare</h3>
                    <p>
                        Med Jaaf takes data security and privacy seriously. We adhere to all industry compliance regulations to protect your practice's and your patients' data. Our proactive measures include regular monitoring of employees to prevent data breaches and ensure privacy. Rest assured, we prioritize your data security and privacy to maintain the highest standards of compliance in healthcare administration.
                    </p>
                </div>

                {/* CONTENT + IMAGE SIDE BY SIDE */}
                <div
                    className="d-flex justify-content-center px-3"
                    style={{
                        alignItems: "center",
                        gap: "40px",
                        marginTop: "50px",
                        flexWrap: "wrap",
                        textAlign: "start",
                    }}
                >
                    {/* LEFT CONTENT */}
                    <div style={{ maxWidth: "500px", flex: "1 1 500px" }}>
                        <p>
                            <strong>HIPAA Compliance</strong>
                        </p>
                        <h3>Adherence to HIPAA Regulations for Data Security and Privacy of PHI</h3>
                        <p>
                            Med Jaaf understands the critical importance of complying with the Health Insurance Portability and Accountability Act (HIPAA) regulations to ensure the security and privacy of protected health information (PHI). HIPAA regulations are designed to protect sensitive patient information from being disclosed without the patient's consent or knowledge. We adhere to HIPAA regulations by implementing strict policies and procedures to safeguard patient data. This includes ensuring that only authorized personnel have access to patient information, using secure methods for transmitting data, and regularly auditing our systems for compliance. Additionally, we provide ongoing training to our staff to ensure they understand the importance of HIPAA compliance and how to properly handle patient information. By following HIPAA regulations, we are able to protect patient privacy and maintain the integrity of their health information.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div style={{ maxWidth: "400px", flex: "1 1 400px", textAlign: "center" }}>
                        <img
                            src="/assets/images/new-images/20img.webp"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                            }}
                            alt="HIPAA Compliance"
                        />
                    </div>
                </div>

                {/* OUR COMMITMENT SLIDER SECTION - ONE BIG SLIDE AT A TIME */}
                <section className="py-5 mt-3 ">
                    <div className="container">
                        <h3 className="text-center ">OUR COMMITMENT</h3>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={50}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,

                            }}
                            navigation={true}
                            pagination={{ clickable: true }}
                            grabCursor={true}
                            className="pb-5"
                        >
                            {/* Protection */}
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <div className="card border-0 shadow-lg text-center p-5" style={{ maxWidth: "900px" }}>
                                        <img
                                            src="/assets/images/new-images/21img.jpg"
                                            className="rounded-circle mx-auto mb-4 border border-5 border-light shadow"
                                            alt="Protection"
                                            style={{ width: "220px", height: "220px", objectFit: "cover" }}
                                        />
                                        <h3 className=" mb-3">Protection</h3>
                                        <p className=" mb-4">
                                            Protecting Your Information
                                        </p>
                                        <p>
                                            We implement stringent measures to protect your data, including secure access controls and encryption protocols.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Assurance */}
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <div className="card border-0 shadow-lg text-center p-5" style={{ maxWidth: "900px" }}>
                                        <img
                                            src="/assets/images/new-images/22img.webp"
                                            className="rounded-circle mx-auto mb-4 border border-5 border-light shadow"
                                            alt="Assurance"
                                            style={{ width: "220px", height: "220px", objectFit: "cover" }}
                                        />
                                        <h3 className=" mb-3">Assurance</h3>
                                        <p className=" mb-4">
                                            Ensuring Compliance Continuously
                                        </p>
                                        <p >
                                            We conduct regular audits and reviews of our processes to ensure they meet regulatory standards and identify areas for improvement.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Education */}
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <div className="card border-0 shadow-lg text-center p-5" style={{ maxWidth: "900px" }}>
                                        <img
                                            src="/assets/images/new-images/23img.webp"
                                            className="rounded-circle mx-auto mb-4 border border-5 border-light shadow"
                                            alt="Education"
                                            style={{ width: "220px", height: "220px", objectFit: "cover" }}
                                        />
                                        <h3 className=" mb-3">Education</h3>
                                        <p className=" mb-4">
                                            Empowering Our Team
                                        </p>
                                        <p>
                                            We provide ongoing training to our employees to ensure they are aware of compliance requirements and best practices.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Communication */}
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <div className="card border-0 shadow-lg text-center p-5" style={{ maxWidth: "900px" }}>
                                        <img
                                            src="/assets/images/new-images/24img.webp"
                                            className="rounded-circle mx-auto mb-4 border border-5 border-light shadow"
                                            alt="Communication"
                                            style={{ width: "220px", height: "220px", objectFit: "cover" }}
                                        />
                                        <h3 className=" mb-3">Communication</h3>
                                        <p className=" mb-4">
                                            Safeguarding Communication
                                        </p>
                                        <p>
                                            We use secure communication channels to protect sensitive information from unauthorized access.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Recovery */}
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <div className="card border-0 shadow-lg text-center p-5" style={{ maxWidth: "900px" }}>
                                        <img
                                            src="/assets/images/new-images/25img.jpg"
                                            className="rounded-circle mx-auto mb-4 border border-5 border-light shadow"
                                            alt="Recovery"
                                            style={{ width: "220px", height: "220px", objectFit: "cover" }}
                                        />
                                        <h3 className=" mb-3">Recovery</h3>
                                        <p className=" mb-4">
                                            Prepared for the Unexpected
                                        </p>
                                        <p>
                                            We have robust disaster recovery and business continuity plans in place to ensure uninterrupted operations and data protection in case of emergencies.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Partners */}
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <div className="card border-0 shadow-lg text-center p-5" style={{ maxWidth: "900px" }}>
                                        <img
                                            src="/assets/images/new-images/26img.jpg"
                                            className="rounded-circle mx-auto mb-4 border border-5 border-light shadow"
                                            alt="Partners"
                                            style={{ width: "220px", height: "220px", objectFit: "cover" }}
                                        />
                                        <h3 className=" mb-3">Partners</h3>
                                        <p className=" mb-4">
                                            Partnering for Compliance
                                        </p>
                                        <p>
                                            We ensure that our vendors and partners comply with relevant regulations and standards to protect your information.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </Layout>
        </>
    );
}