import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect } from "react";
export default function ServiceStyle3() {
    useEffect(() => {
   const baseUrl = "https://fourraysrcm.com"; 
    const pagePath = "/insurance"; // ✅ your route
    const pageUrl = `${baseUrl}${pagePath}`;

    const title = "Insurance Contract Negotiations | FourRays";
    const description =
      "Insurance contract negotiations for providers and practices. We support payer contracting, contract review, and negotiation strategy to improve network outcomes.";
    const keywords =
      "insurance contract negotiations, payer contract negotiation, reimbursement rate negotiation, insurance contracting services, provider payer contracting, contract review for providers, negotiation support";

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

    // Schema
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
          name: "Insurance Contract Negotiations",
          serviceType:
            "Payer contract negotiation, reimbursement rate negotiation, contract review, negotiation strategy and support for providers",
          provider: { "@id": `${baseUrl}/#organization` },
          areaServed: "United States",
        },
      ],
    };

    setJsonLd("schema-insurance", schema);
  }, []);

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
