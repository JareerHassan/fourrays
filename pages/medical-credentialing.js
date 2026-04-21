import Layout from "@/components/layout/Layout"
import Link from "next/link"
import SeoHead, { SITE_URL } from "@/components/seo/SeoHead";

const MEDICAL_CRED_PAGE_URL = `${SITE_URL}/medical-credentialing`;
const MEDICAL_CRED_TITLE = "Credentialing Services | FourRays";
const MEDICAL_CRED_DESCRIPTION =
    "End-to-end Credentialing services including verification, CAQH management, payer applications, follow-ups and ongoing maintenance for providers.";
const MEDICAL_CRED_KEYWORDS =
    "Credentialing services, provider credentialing, insurance credentialing, primary source verification, credentialing verification, physician credentialing services, credentialing for clinics, credentialing specialists";

const medicalCredentialingJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "FourRays",
            url: SITE_URL,
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "FourRays",
            publisher: { "@id": `${SITE_URL}/#organization` },
        },
        {
            "@type": "WebPage",
            "@id": `${MEDICAL_CRED_PAGE_URL}#webpage`,
            url: MEDICAL_CRED_PAGE_URL,
            name: MEDICAL_CRED_TITLE,
            description: MEDICAL_CRED_DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
        },
        {
            "@type": "Service",
            "@id": `${MEDICAL_CRED_PAGE_URL}#service`,
            name: "Credentialing Services",
            serviceType:
                "Primary source verification, CAQH management, payer applications, follow-ups, ongoing credentialing maintenance",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "United States",
        },
    ],
};

export default function ServiceStyle1() {
    return (
        <>
            <SeoHead
                title={MEDICAL_CRED_TITLE}
                description={MEDICAL_CRED_DESCRIPTION}
                keywords={MEDICAL_CRED_KEYWORDS}
                canonicalPath="/medical-credentialing"
                ogSiteName="FourRays"
                jsonLdBlocks={[{ id: "schema-medical-credentialing", json: medicalCredentialingJsonLd }]}
            />
            <Layout breadcrumbTitle="Credentialing">
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
                                        <h1 className="title">Our Comprehensive Credentialing Services
                                        </h1>
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
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-8.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
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
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-9.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
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
                                    <Link href="/contact/">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-10.jpeg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact/">
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
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-11.jpeg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
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
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-12.jpeg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
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
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-13.jpeg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
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