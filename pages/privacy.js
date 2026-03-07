import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect } from "react";
export default function PrivacyPolicy() {
useEffect(() => {
    const baseUrl = "https://FourRayssolutions.com";
    const pagePath = "/privacy";
    const pageUrl = `${baseUrl}${pagePath}`;

    const title = "Privacy Policy | FourRays";
    const description =
      "Read FourRays Privacy Policy explaining how we collect, use, and protect information when you visit our website or contact our team.";
    const keywords =
      "privacy policy, data privacy policy, information collection policy, website privacy policy, data protection policy";

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
      ],
    };

    setJsonLd("schema-privacy", schema);
  }, []);
    return (
        <>
            <Layout breadcrumbTitle="Privacy Policy">
                {/* Privacy Policy Section */}
                <div className="privacy-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                         <div className="section_title type_one my-5 text-center">
                                    <div className="title_whole">
                                        <h1 className="title">FourRays Privacy Policy explaining how we collect, use, and protect</h1>
                                    </div>
                                </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="privacy-content">
                                    <p><strong>Effective Date:</strong> January 01, 2025</p>
                                    <p><strong>Last Updated:</strong> March 07, 2025</p>
                                    <p><strong>Contact:</strong> <a href="mailto:info@fourraysrcm.com">info@fourraysrcm.com</a></p>

                                    <p>
                                        FourRays(“we,” “our,” or “us”) is dedicated to safeguarding your privacy and protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to ensure its security. By using our services, you agree to the terms of this Privacy Policy.
                                    </p>

                                    <h6>1. Information Collection and Use</h6>
                                    <p>
                                        While using our site, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. This information may include, but is not limited to, your name, email address, and phone number (“Personal Information”).
                                    </p>
                                    <p>
                                        Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                                    </p>

                                    <h6>2. Log Data</h6>
                                    <p>
                                        We collect information that your browser sends whenever you visit our site (“Log Data”). This Log Data may include details such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, and the pages of our site that you visit.
                                    </p>

                                    <h6>3. Cookies</h6>
                                    <p>
                                        Cookies are small files with data, including an anonymous unique identifier, sent to your browser from a website and stored on your computer’s hard drive. For more details, please refer to our Cookie Policy below.
                                    </p>

                                    <h6>4. Security</h6>
                                    <p>
                                        The security of your Personal Information is important to us. We employ commercially acceptable means to protect your Personal Information.
                                    </p>

                                    <h6>5. Opt-Out</h6>
                                    <p>
                                        If you wish to be removed from receiving future communications, you can opt-out by texting STOP.
                                    </p>

                                    <h6>6. Changes to This Privacy Policy</h6>
                                    <p>
                                        This Privacy Policy is effective as of January 01, 2025, and will remain in effect except for any changes in its provisions in the future, which will take effect immediately upon being posted on this page.
                                    </p>

                                    <h6>7. Contact Us</h6>
                                    <p>
                                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@fourraysrcm.com">info@fourraysrcm.com</a>.
                                    </p>

                                    <h4>Cookie Policy</h4>

                                    <h6>1. Introduction</h6>
                                    <p>
                                        This Cookie Policy explains how we use cookies and similar tracking technologies when you visit our website. It informs you about the types of cookies we use, the purposes for which we use them, and your choices regarding their use.
                                    </p>

                                    <h6>2. What Are Cookies</h6>
                                    <p>
                                        Cookies are small text files stored on your computer or mobile device when you visit a website. They help the website recognize your device and remember information about your visit, such as your preferences and settings.
                                    </p>

                                    <h6>3. Types of Cookies We Use</h6>
                                    <p><strong>Essential Cookies:</strong> Necessary for the proper functioning of our website. They enable you to navigate the site and use its features.</p>
                                    <p><strong>Analytical/Performance Cookies:</strong> Help us analyze how visitors use our website, allowing us to improve its performance.</p>
                                    <p><strong>Functionality Cookies:</strong> Enable our website to remember choices you make, such as language preferences, and provide enhanced features.</p>
                                    <p><strong>Targeting/Advertising Cookies:</strong> Used to deliver content that is more relevant to you and your interests.</p>

                                    <h6>4. Your Choices</h6>
                                    <p>
                                        By using our website, you consent to the use of cookies as described in this policy. You can control and manage cookies in various ways. Please refer to your browser settings for more information on how to block or delete cookies.
                                    </p>

                                    <h6>5. Changes to This Cookie Policy</h6>
                                    <p>
                                        By using our website, you consent to the use of cookies as described in this policy. You can control and manage cookies in various ways. Please refer to your browser settings for more information on how to block or delete cookies.
                                    </p>

                                    <h6>6. Contact Us</h6>
                                    <p>
                                        If you have any questions about our Cookie Policy, please contact us at <a href="mailto:info@fourraysrcm.com">info@fourraysrcm.com</a>.
                                    </p>

                                    <p>
                                        By using our services, you acknowledge that you have read and understood this Privacy Policy and Cookie Policy, and agree to their terms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_80" />
                        {/*-============spacing==========-*/}
                    </div>
                </div>
                {/* Privacy Policy end */}
            </Layout>
        </>
    )
}