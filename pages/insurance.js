import Layout from "@/components/layout/Layout"
import Link from "next/link"
import SeoHead, { SITE_URL } from "@/components/seo/SeoHead";

const INSURANCE_PAGE_URL = `${SITE_URL}/insurance`;
const INSURANCE_TITLE = "Insurance Contract Negotiations | FourRays";
const INSURANCE_DESCRIPTION =
    "Insurance contract negotiations for providers and practices. We support payer contracting, contract review, and negotiation strategy to improve network outcomes.";
const INSURANCE_KEYWORDS =
    "insurance contract negotiations, payer contract negotiation, reimbursement rate negotiation, insurance contracting services, provider payer contracting, contract review for providers, negotiation support";

const insuranceJsonLd = {
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
            "@id": `${INSURANCE_PAGE_URL}#webpage`,
            url: INSURANCE_PAGE_URL,
            name: INSURANCE_TITLE,
            description: INSURANCE_DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
        },
        {
            "@type": "Service",
            "@id": `${INSURANCE_PAGE_URL}#service`,
            name: "Insurance Contract Negotiations",
            serviceType:
                "Payer contract negotiation, reimbursement rate negotiation, contract review, negotiation strategy and support for providers",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "United States",
        },
    ],
};

export default function ServiceStyle3() {
    return (
        <>
            <SeoHead
                title={INSURANCE_TITLE}
                description={INSURANCE_DESCRIPTION}
                keywords={INSURANCE_KEYWORDS}
                canonicalPath="/insurance"
                ogSiteName="FourRays"
                jsonLdBlocks={[{ id: "schema-insurance", json: insuranceJsonLd }]}
            />
            <Layout breadcrumbTitle="Insurance Contract Negotiations">

                <section className="service-section-one">
                    <div className="pd_top_90" />

                    <div className="container">
                        {/* d-flex row */}
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
                            
                            {/* LEFT CONTENT */}
                            <div className="content-box" style={{ flex: "1 1 48%" }}>
                                <div className="section_title type_one">
                                    <h1 className="title">Insurance Contract Negotiations</h1>

                                    <p>
                                      Many insurance companies attempt to offer the lowest reimbursing rates, which are typically accepted by practices unaware that they can negotiate these rates. This process is often lengthy and can take up to 4-6 months, sometimes over a year. Most practices accept the rates initially offered by insurance providers when starting a new approach. However, during the re-credentialing process, we strongly recommend that you negotiate the rates. We analyze and evaluate your current rates and contracts for a nominal fee, and then we can advise you on whether you can renegotiate your existing rates. Typically, we compare your rates to regional and national market standards. PLEASE NOTE THAT WE CANNOT GUARANTEE HIGHER REIMBURSEMENT RATES. Insurance Contract Rate Negotiation is automatically included for all clients who have purchased a re-credentialing plan with us. We negotiate out-of-network claims directly with insurance companies or third-party pricing teams for all UB04 claims for current medical billing clients.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="image-box" style={{ flex: "1 1 49%" }}>
                                <img
                                    className="img-fluid rounded-3"
                                    src="/assets/images/new-20.jpeg"
                                    alt="Car Insurance"
                                    style={{ width: "100%", objectFit: "cover",     height: "550px",  }}
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
