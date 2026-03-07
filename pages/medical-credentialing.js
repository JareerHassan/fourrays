import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect } from "react";
export default function ServiceStyle1() {
useEffect(() => {
    const baseUrl = "https://FourRayssolutions.com";
    const pagePath = "/medical-credentialing";
    const pageUrl = `${baseUrl}${pagePath}`;

    const title = "Medical Credentialing Services | FourRays";
    const description =
      "End-to-end medical credentialing services including verification, CAQH management, payer applications, follow-ups and ongoing maintenance for providers.";
    const keywords =
      "medical credentialing services, provider credentialing, insurance credentialing, primary source verification, credentialing verification, physician credentialing services, credentialing for clinics, credentialing specialists";

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
          inLanguage: "en",
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          name: "Medical Credentialing Services",
          serviceType:
            "Primary source verification, CAQH management, payer applications, follow-ups, ongoing credentialing maintenance",
          provider: { "@id": `${baseUrl}/#organization` },
          areaServed: "United States",
        },
      ],
    };

    setJsonLd("schema-medical-credentialing", schema);
  }, []);
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
                                        <h1 className="title">Our Comprehensive Medical Credentialing Services
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