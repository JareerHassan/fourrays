import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect } from "react";
export default function Cart() {
useEffect(() => {
    const baseUrl = "https://FourRayssolutions.com";
    const pagePath = "/virtual-appointment";
    const pageUrl = `${baseUrl}${pagePath}`;

    const title = "Book Credentialing Consultation | Virtual Appointment | FourRays";
    const description =
      "Book a Credentialing Consultation with FourRays to discuss credentialing, payer enrollment, timelines and requirements. Get clear next steps fast.";
    const keywords =
      "credentialing consultation, schedule credentialing consultation, book credentialing call, provider enrollment consultation, credentialing services meeting, virtual consultation for providers";

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
    upsertMeta("og:site_name", "FourRays", "property");

    // Twitter
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);

    // Schema: Appointment / Contact-style page
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
          name: "Credentialing Consultation (Virtual Appointment)",
          serviceType:
            "Virtual consultation for medical credentialing, payer enrollment, CAQH management, timelines and requirements",
          provider: { "@id": `${baseUrl}/#organization` },
          areaServed: "United States",
        },
      ],
    };

    setJsonLd("schema-virtual-appointment", schema);
  }, []);
    return (
        <>
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