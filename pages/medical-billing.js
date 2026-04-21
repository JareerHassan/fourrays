import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import SeoHead, { SITE_URL } from "@/components/seo/SeoHead";

const MEDICAL_BILLING_PAGE_URL = `${SITE_URL}/medical-billing`;
const MEDICAL_BILLING_TITLE = "Medical Billing Services | Revenue Cycle Management | FourRays";
const MEDICAL_BILLING_DESCRIPTION =
    "Medical billing services and revenue cycle management to improve collections. Claims, denials, posting and follow-ups—streamline billing for your practice.";
const MEDICAL_BILLING_KEYWORDS =
    "medical billing services, revenue cycle management services, RCM services, medical billing and coding, claims management services, denial management, insurance verification, payment posting";

const medicalBillingJsonLd = {
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
            "@id": `${MEDICAL_BILLING_PAGE_URL}#webpage`,
            url: MEDICAL_BILLING_PAGE_URL,
            name: MEDICAL_BILLING_TITLE,
            description: MEDICAL_BILLING_DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
        },
        {
            "@type": "Service",
            "@id": `${MEDICAL_BILLING_PAGE_URL}#service`,
            name: "Medical Billing & Revenue Cycle Management (RCM)",
            serviceType:
                "Medical billing and coding, claims submission, denial management, insurance verification, payment posting, follow-ups, revenue cycle management",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "United States",
        },
    ],
};

export default function ServiceStyle2() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <SeoHead
                title={MEDICAL_BILLING_TITLE}
                description={MEDICAL_BILLING_DESCRIPTION}
                keywords={MEDICAL_BILLING_KEYWORDS}
                canonicalPath="/medical-billing"
                ogSiteName="FourRays"
                jsonLdBlocks={[{ id: "schema-medical-billing", json: medicalBillingJsonLd }]}
            />
            <Layout breadcrumbTitle="Medical Billing/Revenue Cycle Management">
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
                                        <h1 className="title">Our Comprehensive Medical Billing Services

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
                                            <img className="img-fluid" src="/assets/images/new-images/30img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
                                                    Daily claims entry


                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We offer accurate and timely daily claims entry services to streamline your billing process. Our team ensures that all claims are entered correctly to reduce denials and accelerate reimbursements.                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/19img.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
                                                    Electronic and paper claim submission
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We handle both electronic and paper claim submissions with precision, ensuring compliance with payer requirements. Our streamlined process helps reduce delays and improves the efficiency of your revenue cycle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/contact/">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/25img.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact/">
                                                    Dedicated follow-up


                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We assist healthcare providers in obtaining and maintaining hospital privileges by managing all credentialing documentation, verifications, and compliance requirements.                                             </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/3img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
                                                    Monthly customized reports

                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Receive detailed, easy-to-understand reports tailored to your practice’s needs, offering insights into claim status, revenue trends, and performance metrics to support informed decision-making.                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/4img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
                                                    Patient statements

                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Generate and send clear, accurate patient statements to ensure timely billing and enhance communication regarding balances and payment responsibilities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/contact">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/7img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/contact">
                                                    Tracking / claims management
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Efficiently monitor, track, and manage insurance claims from submission to reimbursement, reducing denials and ensuring timely payment.                                            </p>

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
            </Layout>
        </>
    )
}