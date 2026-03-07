import { useEffect, useState } from "react";

import Layout from "@/components/layout/Layout"
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
export default function Home4() {
    useEffect(() => {
        const baseUrl = "https://FourRayssolutions.com";
        const pageUrl = `${baseUrl}/`;

        const title = "Medical Credentialing Services | FourRays";
        const description =
            "Medical credentialing services for providers & clinics. We handle payer enrollment, CAQH, re-credentialing and compliance—reduce delays and get in-network faster.";
        const keywords =
            "medical credentialing services, provider credentialing services, insurance credentialing services, payer enrollment services, CAQH profile management, recredentialing services, healthcare credentialing company, credentialing support for providers, medical credentialing agency";

        // ---- helpers (inline) ----
        const upsertMeta = (key, content, attr = "name") => {
            if (!content) return;
            const selector =
                attr === "property"
                    ? `meta[property="${key}"]`
                    : `meta[name="${key}"]`;
            let tag = document.head.querySelector(selector);
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute(attr, key);
                document.head.appendChild(tag);
            }
            tag.setAttribute("content", content);
        };

        const setCanonical = (url) => {
            if (!url) return;
            let link = document.head.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "canonical");
                document.head.appendChild(link);
            }
            link.setAttribute("href", url);
        };

        const setJsonLd = (id, json) => {
            if (!json) return;
            let script = document.getElementById(id);
            if (!script) {
                script = document.createElement("script");
                script.type = "application/ld+json";
                script.id = id;
                document.head.appendChild(script);
            }
            script.text = JSON.stringify(json);
        };

        // ---- apply SEO ----
        document.title = title;
        upsertMeta("description", description);
        upsertMeta("keywords", keywords);

        setCanonical(pageUrl);

        // Open Graph
        upsertMeta("og:title", title, "property");
        upsertMeta("og:description", description, "property");
        upsertMeta("og:url", pageUrl, "property");
        upsertMeta("og:type", "website", "property");
        upsertMeta("og:site_name", "FourRays", "property");

        // Twitter
        upsertMeta("twitter:card", "summary_large_image");
        upsertMeta("twitter:title", title);
        upsertMeta("twitter:description", description);

        // ---- Schema Markup ----
        const schema = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": `${baseUrl}/#organization`,
                    name: "FourRays",
                    url: baseUrl,
                },
                {
                    "@type": "WebSite",
                    "@id": `${baseUrl}/#website`,
                    url: baseUrl,
                    name: "FourRays",
                    publisher: { "@id": `${baseUrl}/#organization` },
                },
                {
                    "@type": "WebPage",
                    "@id": `${pageUrl}#webpage`,
                    url: pageUrl,
                    name: title,
                    description,
                    isPartOf: { "@id": `${baseUrl}/#website` },
                    about: { "@id": `${baseUrl}/#organization` },
                },
                {
                    "@type": "Service",
                    name: "Medical Credentialing Services",
                    provider: { "@id": `${baseUrl}/#organization` },
                    areaServed: "United States",
                    serviceType:
                        "Medical credentialing services, payer enrollment services, CAQH profile management, re-credentialing services, compliance support",
                },
            ],
        };

        setJsonLd("schema-home", schema);
    }, []);

    return (
        <>
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