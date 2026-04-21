import Layout from "@/components/layout/Layout"
import SeoHead, { SITE_URL } from "@/components/seo/SeoHead"
import About4 from "@/components/sections/About4"
import Banner1 from "@/components/sections/Banner1"
import Blog4 from "@/components/sections/Blog4"
import Client3 from "@/components/sections/Client3"
import Content5 from "@/components/sections/Content5"
import Form3 from "@/components/sections/Form3"
import Funfacts2 from "@/components/sections/Funfacts2"
import Process3 from "@/components/sections/Process3"
import Service6 from "@/components/sections/Service6"
import Service7 from "@/components/sections/Service7"
import Testimonial3 from "@/components/sections/Testimonial3"
import dynamic from 'next/dynamic'

const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

const HOME_TITLE = "FourRays RCM | Medical Billing & Credentialing Services"
const HOME_DESCRIPTION =
    "FourRays RCM provides professional medical billing, credentialing, and revenue cycle management services for healthcare providers across the USA. Simplify your billing and maximize revenue with our expert team."
const HOME_KEYWORDS =
    "medical billing services, revenue cycle management, RCM services, Credentialing services, insurance credentialing, healthcare billing company, provider enrollment services, FourRays RCM"

const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "FourRays RCM",
            url: SITE_URL,
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "FourRays RCM",
            publisher: { "@id": `${SITE_URL}/#organization` },
        },
        {
            "@type": "WebPage",
            "@id": `${SITE_URL}/#webpage`,
            url: `${SITE_URL}/`,
            name: HOME_TITLE,
            description: HOME_DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
        },
        {
            "@type": "Service",
            name: "Medical Billing & Credentialing Services",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "United States",
            serviceType:
                "Medical billing services, revenue cycle management, insurance credentialing, provider enrollment, RCM solutions",
        },
    ],
}

export default function Home4() {
    return (
        <>
            <SeoHead
                title={HOME_TITLE}
                description={HOME_DESCRIPTION}
                keywords={HOME_KEYWORDS}
                canonicalPath="/"
                ogSiteName="FourRays RCM"
                jsonLdBlocks={[{ id: "schema-home", json: homeJsonLd }]}
            />
            <Layout headerStyle={4} footerStyle={4}>
                <Banner1 />
                <About4 />
                <Service7 />
                {/* <Content5 /> */}
                {/* <Process3 /> */}
                {/* <Service6 /> */}
                <section className="analysis-section position-relative bg_1 overflow-hidden">
                    <div className="pd_top_170" />
                    <div className="ab_img_left_top z_0 mr_top_minus_150">
                        <img src="/assets/images/shape/wave-pattern-2.png" className="img-fluid" alt="img" />
                    </div>

                    <div className="medium-container-two">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center color_white type_one">
                                    <h4 className="sm_title">Coverage Area</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Find the Best Insurance Plans Nearby</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pd_bottom_30" />

                        <div className="row justify-content-center">
                            <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12" />

                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className="flaticon-satisfaction" />
                                        </div>
                                    </div>
                                    <h4>
                                        <CounterUp count={500} time={1} /><small>K</small>
                                    </h4>
                                    <h6 className="title_no_a_18">Protected Clients</h6>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className="flaticon-business-people" />
                                        </div>
                                    </div>
                                    <h4>
                                        <CounterUp count={12} time={1} /><small>Yrs</small>
                                    </h4>
                                    <h6 className="title_no_a_18">Trusted Since 2014</h6>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className="flaticon-reviews" />
                                        </div>
                                    </div>
                                    <h4>
                                        <CounterUp count={100} time={1} /><small>%</small>
                                    </h4>
                                    <h6 className="title_no_a_18">Full Transparency</h6>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className="flaticon-presenter" />
                                        </div>
                                    </div>
                                    <h4>
                                        <CounterUp count={24} time={1} /><small>hrs</small>
                                    </h4>
                                    <h6 className="title_no_a_18">Emergency Support</h6>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>

                            <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12" />
                        </div>
                    </div>

                    <div className="pd_bottom_50" />
                    <div className="ab_img_right_bottom z_0 mr_bottom_minus_250">
                        <img src="/assets/images/shape/wave-pattern-1.png" className="img-fluid" alt="img" />
                    </div>
                </section>
                {/* <Funfacts2 /> */}
                {/* <Form3 /> */}
                <Testimonial3 />
                <Client3 />
                <div className="divider" />
                <Blog4 />
            </Layout>
        </>
    )
}