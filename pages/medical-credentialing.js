import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ServiceStyle1() {

    return (
        <>
            <Layout breadcrumbTitle="Medical Credentialing">
                {/*-service*/}
                <section className="service-section-one">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title">Our Comprehensive Medical Credentialing Services
                                        </h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>

                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_20" />
                        {/*-============spacing==========-*/}
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/21img.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Provider Enrollment

                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We assist healthcare providers in enrolling with insurance networks, Medicare, Medicaid, and other payer organizations by completing and submitting enrollment applications.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/18img.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Primary Source Verification
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We ensure accuracy and compliance with regulatory standards, as we authenticate education, training, licensure, certifications, and other relevant information directly from the issuing institution or authority.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service/">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/23img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service/">
                                                    Hospital Privilege Credentialing

                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We assist healthcare providers in obtaining and maintaining hospital privileges by managing all credentialing documentation, verifications, and compliance requirements.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/24img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Ongoing Monitoring and Re-credentialing
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                By proactively managing credentialing requirements and monitoring changes, we help healthcare organizations maintain regulatory compliance and streamline administrative processes.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/26img.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Payor Contract Negotiation
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We help healthcare providers negotiate favorable payor contracts to maximize reimbursement rates and streamline revenue cycles. Our experts ensure fair terms while maintaining compliance with regulatory requirements.                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/28img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    License Verification
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We provide thorough license verification services to ensure all healthcare professionals meet regulatory and credentialing requirements. Our process helps maintain compliance and supports patient safety.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-service end*/}


            </Layout>
        </>
    )
}