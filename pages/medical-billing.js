import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
export default function ServiceStyle2() {

    useEffect(() => {
    const baseUrl = "https://medjaafsolutions.com";
    const pagePath = "/medical-billing"; // ✅ your route
    const pageUrl = `${baseUrl}${pagePath}`;

    const title = "Medical Billing Services | Revenue Cycle Management | Med Jaaf";
    const description =
      "Medical billing services and revenue cycle management to improve collections. Claims, denials, posting and follow-ups—streamline billing for your practice.";
    const keywords =
      "medical billing services, revenue cycle management services, RCM services, medical billing and coding, claims management services, denial management, insurance verification, payment posting";

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

    // Apply SEO
    document.title = title;
    upsertMeta("description", description);
    upsertMeta("keywords", keywords);
    setCanonical(pageUrl);

    // Open Graph
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:url", pageUrl, "property");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:site_name", "Med Jaaf Solutions", "property");

    // Twitter
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);

    // Schema
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: "Med Jaaf Solutions",
          url: baseUrl,
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          url: baseUrl,
          name: "Med Jaaf Solutions",
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
          inLanguage: "en",
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          name: "Medical Billing & Revenue Cycle Management (RCM)",
          serviceType:
            "Medical billing and coding, claims submission, denial management, insurance verification, payment posting, follow-ups, revenue cycle management",
          provider: { "@id": `${baseUrl}/#organization` },
          areaServed: "United States",
        },
      ],
    };

    setJsonLd("schema-medical-billing", schema);
  }, []);

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