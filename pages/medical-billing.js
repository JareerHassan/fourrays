import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
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
                                        <h2 className="title">Our Comprehensive Medical Billing Services

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
                                            <img className="img-fluid" src="/assets/images/new-images/30img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
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
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/19img.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
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
                                    <Link href="/service/">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/25img.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service/">
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
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/3img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
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
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/4img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
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
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/new-images/7img.webp" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">

                                            <h4 className="title_24 trans">
                                                <Link href="/service">
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