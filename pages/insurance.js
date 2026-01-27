import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ServiceStyle3() {
    return (
        <>
            <Layout breadcrumbTitle="Insurance Contract Negotiations">

                <section className="service-section-one">
                    <div className="pd_top_90" />

                    <div className="container">
                        {/* d-flex row */}
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
                            
                            {/* LEFT CONTENT */}
                            <div className="content-box" style={{ flex: "1 1 48%" }}>
                                <div className="section_title type_one">
                                    <h2 className="title">Insurance Contract Negotiations</h2>

                                    <p>
                                      Many insurance companies attempt to offer the lowest reimbursing rates, which are typically accepted by practices unaware that they can negotiate these rates. This process is often lengthy and can take up to 4-6 months, sometimes over a year. Most practices accept the rates initially offered by insurance providers when starting a new approach. However, during the re-credentialing process, we strongly recommend that you negotiate the rates. We analyze and evaluate your current rates and contracts for a nominal fee, and then we can advise you on whether you can renegotiate your existing rates. Typically, we compare your rates to regional and national market standards. PLEASE NOTE THAT WE CANNOT GUARANTEE HIGHER REIMBURSEMENT RATES. Insurance Contract Rate Negotiation is automatically included for all clients who have purchased a re-credentialing plan with us. We negotiate out-of-network claims directly with insurance companies or third-party pricing teams for all UB04 claims for current medical billing clients.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="image-box" style={{ flex: "1 1 49%" }}>
                                <img
                                    className="img-fluid rounded-3"
                                    src="/assets/images/new-images/24img.webp"
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
