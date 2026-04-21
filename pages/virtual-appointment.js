import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import SeoHead, { SITE_URL } from "@/components/seo/SeoHead";

const VIRTUAL_APPT_PAGE_URL = `${SITE_URL}/virtual-appointment`;
const VIRTUAL_APPT_TITLE = "Book Credentialing Consultation | Virtual Appointment | FourRays";
const VIRTUAL_APPT_DESCRIPTION =
    "Book a Credentialing Consultation with FourRays to discuss credentialing, payer enrollment, timelines and requirements. Get clear next steps fast.";
const VIRTUAL_APPT_KEYWORDS =
    "credentialing consultation, schedule credentialing consultation, book credentialing call, provider enrollment consultation, credentialing services meeting, virtual consultation for providers";

const virtualAppointmentJsonLd = {
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
            "@id": `${VIRTUAL_APPT_PAGE_URL}#webpage`,
            url: VIRTUAL_APPT_PAGE_URL,
            name: VIRTUAL_APPT_TITLE,
            description: VIRTUAL_APPT_DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
        },
        {
            "@type": "Service",
            "@id": `${VIRTUAL_APPT_PAGE_URL}#service`,
            name: "Credentialing Consultation (Virtual Appointment)",
            serviceType:
                "Virtual consultation for Credentialing, payer enrollment, CAQH management, timelines and requirements",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "United States",
        },
    ],
};

export default function Cart() {
    return (
        <>
            <SeoHead
                title={VIRTUAL_APPT_TITLE}
                description={VIRTUAL_APPT_DESCRIPTION}
                keywords={VIRTUAL_APPT_KEYWORDS}
                canonicalPath="/virtual-appointment"
                ogSiteName="FourRays"
                jsonLdBlocks={[{ id: "schema-virtual-appointment", json: virtualAppointmentJsonLd }]}
            />
            <Layout breadcrumbTitle=" Virtual Appointment ">

                <section className="service-section-one">
                    <div className="pd_top_90" />

                    <div className="container">
                        {/* d-flex row */}
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">

                            {/* LEFT CONTENT */}
                            <div className="content-box" style={{ flex: "1 1 48%" }}>
                                <div className="section_title type_one">
                                    <h1 className="title">Book a Credentialing Consultation with FourRays</h1>
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
                                    src="/assets/images/new-21.jpeg"
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