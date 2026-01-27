import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Cart() {

    return (
        <>
            <Layout breadcrumbTitle=" Virtual Appointment ">

                <section className="service-section-one">
                    <div className="pd_top_90" />

                    <div className="container">
                        {/* d-flex row */}
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">

                            {/* LEFT CONTENT */}
                            <div className="content-box" style={{ flex: "1 1 48%" }}>
                                <div className="section_title type_one">
                                    <h2 className="title">Virtual Appointment Management & Optimization</h2>
                                    <p>
                                        Virtual Appointments are now an essential part of modern healthcare, allowing patients to connect with providers quickly and conveniently. Our Virtual Appointment Management service helps practices set up secure, HIPAA-compliant telehealth platforms, manage online scheduling, and ensure smooth communication with patients.
                                        We assist clinics in organizing virtual visit workflows, maintaining proper documentation, and understanding telehealth billing guidelines to help reduce claim issues. This service also includes basic technology setup support and patient communication guidance.
                                        Virtual Appointment support is included for clients using our telehealth management plans or credentialing packages.
                                    </p>

                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="image-box" style={{ flex: "1 1 49%" }}>
                                <img
                                    className="img-fluid rounded-3"
                                    src="/assets/images/new-images/8img.webp"
                                    alt="Car Insurance"
                                    style={{ width: "100%", objectFit: "cover", height: "550px", }}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="pd_bottom_60" />
                </section>

            </Layout>
        </>
    )
}