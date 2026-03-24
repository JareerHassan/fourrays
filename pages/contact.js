import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { sendForm2 } from "@/http/form2Api";

export default function Contact() {
    useEffect(() => {
        const baseUrl = "https://fourraysrcm.com";
        const pagePath = "/contact";
        const pageUrl = `${baseUrl}${pagePath}`;

        const title = "Contact Credentialing Team | FourRays";
        const description =
            "Contact Credentialing Team for Credentialing and payer enrollment support. Share your details and we’ll guide you with the next steps to start.";
        const keywords =
            "Contact Credentialing Team, credentialing consultation, provider enrollment help, talk to credentialing specialist, credentialing services quote, payer enrollment support contact";

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

        document.title = title;
        upsertMeta("description", description);
        upsertMeta("keywords", keywords);

        setCanonical(pageUrl);

        upsertMeta("og:title", title, "property");
        upsertMeta("og:description", description, "property");
        upsertMeta("og:url", pageUrl, "property");
        upsertMeta("og:type", "website", "property");
        upsertMeta("og:site_name", "FourRays", "property");

        upsertMeta("twitter:card", "summary_large_image");
        upsertMeta("twitter:title", title);
        upsertMeta("twitter:description", description);

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
                    "@type": "ContactPage",
                    "@id": `${pageUrl}#contactpage`,
                    url: pageUrl,
                    name: title,
                    description,
                    isPartOf: { "@id": `${baseUrl}/#website` },
                    about: { "@id": `${baseUrl}/#organization` },
                },
            ],
        };

        setJsonLd("schema-contact", schema);
    }, []);

    const [formData, setFormData] = useState({
        organization_name: "",
        organization_location: "",
        states: "",
        organization_website: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        preferred_communication: "",
        user_specialty: "",
        user_message: "",
        sms_consent: false,
    });

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.first_name || !formData.email) {
            alert("First name & Email required");
            return;
        }

        if (
            formData.preferred_communication === "Text Message" &&
            !formData.sms_consent
        ) {
            alert("Please agree to receive text messages before submitting.");
            return;
        }

        setLoading(true);

        try {
            await sendForm2(formData);
            setShowSuccess(true);

            setFormData({
                organization_name: "",
                organization_location: "",
                states: "",
                organization_website: "",
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                preferred_communication: "",
                user_specialty: "",
                user_message: "",
                sms_consent: false,
            });

            setTimeout(() => setShowSuccess(false), 6000);
        } catch (err) {
            alert(err.error || "Email sending failed");
        }

        setLoading(false);
    };

    return (
        <>
            <Layout breadcrumbTitle="Contact">
                <section className="form-section bg_light_1 position-relative">
                    <div className="pd_top_90" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Contact Us</h4>
                                    <div className="title_whole">
                                        <h1 className="title" style={{ fontSize: "30px" }}>
                                            Contact Credentialing Team for Credentialing and payer
                                            enrollment support.
                                        </h1>
                                    </div>
                                    <p>Epictetus, Greek Philosopher</p>
                                </div>

                                <div className="pd_bottom_40" />

                                <div className="social-icons">
                                    <ul>
                                        <li>
                                            <Link href="#" className="m_icon">
                                                <i className="fab fa-instagram" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pd_bottom_20" />
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <section className="contact_form_box_all">
                                    <div className="contact_form_shortcode">
                                        <form onSubmit={handleSubmit}>
                                            <div className="messages" />
                                            <div className="controls">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="organization_name"
                                                                placeholder="Organization Name *"
                                                                value={formData.organization_name}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="organization_location"
                                                                placeholder="Organization Location *"
                                                                value={formData.organization_location}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="col-md-6 col-sm-12"
                                                    >
                                                        <div
                                                            className="form-group"
                                                            style={{ backgroundColor: "white" }}
                                                        >
                                                            <select
                                                                name="states"
                                                                value={formData.states}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option value="" disabled>
                                                                    Select State *
                                                                </option>
                                                                <option value="AL">Alabama</option>
                                                                <option value="AK">Alaska</option>
                                                                <option value="AZ">Arizona</option>
                                                                <option value="AR">Arkansas</option>
                                                                <option value="CA">California</option>
                                                                <option value="CO">Colorado</option>
                                                                <option value="CT">Connecticut</option>
                                                                <option value="DE">Delaware</option>
                                                                <option value="DC">District of Columbia</option>
                                                                <option value="FL">Florida</option>
                                                                <option value="GA">Georgia</option>
                                                                <option value="HI">Hawaii</option>
                                                                <option value="ID">Idaho</option>
                                                                <option value="IL">Illinois</option>
                                                                <option value="IN">Indiana</option>
                                                                <option value="IA">Iowa</option>
                                                                <option value="KS">Kansas</option>
                                                                <option value="KY">Kentucky</option>
                                                                <option value="LA">Louisiana</option>
                                                                <option value="ME">Maine</option>
                                                                <option value="MD">Maryland</option>
                                                                <option value="MA">Massachusetts</option>
                                                                <option value="MI">Michigan</option>
                                                                <option value="MN">Minnesota</option>
                                                                <option value="MS">Mississippi</option>
                                                                <option value="MO">Missouri</option>
                                                                <option value="MT">Montana</option>
                                                                <option value="NE">Nebraska</option>
                                                                <option value="NV">Nevada</option>
                                                                <option value="NH">New Hampshire</option>
                                                                <option value="NJ">New Jersey</option>
                                                                <option value="NM">New Mexico</option>
                                                                <option value="NY">New York</option>
                                                                <option value="NC">North Carolina</option>
                                                                <option value="ND">North Dakota</option>
                                                                <option value="OH">Ohio</option>
                                                                <option value="OK">Oklahoma</option>
                                                                <option value="OR">Oregon</option>
                                                                <option value="PA">Pennsylvania</option>
                                                                <option value="RI">Rhode Island</option>
                                                                <option value="SC">South Carolina</option>
                                                                <option value="SD">South Dakota</option>
                                                                <option value="TN">Tennessee</option>
                                                                <option value="TX">Texas</option>
                                                                <option value="UT">Utah</option>
                                                                <option value="VT">Vermont</option>
                                                                <option value="VA">Virginia</option>
                                                                <option value="WA">Washington</option>
                                                                <option value="WV">West Virginia</option>
                                                                <option value="WI">Wisconsin</option>
                                                                <option value="WY">Wyoming</option>
                                                            </select>
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="url"
                                                                name="organization_website"
                                                                placeholder="Organization Website (If available)"
                                                                value={formData.organization_website}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="first_name"
                                                                placeholder="First Name *"
                                                                value={formData.first_name}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="last_name"
                                                                placeholder="Last Name *"
                                                                value={formData.last_name}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email *"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                placeholder="Phone *"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <p className="mb-2 pt-3">
                                                            Preferred Form of Communication *
                                                        </p>

                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="preferred_communication"
                                                                id="comm_email"
                                                                value="Email"
                                                                checked={
                                                                    formData.preferred_communication === "Email"
                                                                }
                                                                onChange={handleChange}
                                                                required
                                                                style={{ padding: "10px" }}
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="comm_email"
                                                            >
                                                                Email
                                                            </label>
                                                        </div>

                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="preferred_communication"
                                                                id="comm_call"
                                                                value="Call Me"
                                                                checked={
                                                                    formData.preferred_communication === "Call Me"
                                                                }
                                                                onChange={handleChange}
                                                                required
                                                                style={{ padding: "10px" }}
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="comm_call"
                                                            >
                                                                Call Me
                                                            </label>
                                                        </div>

                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="preferred_communication"
                                                                id="comm_text"
                                                                value="Text Message"
                                                                checked={
                                                                    formData.preferred_communication === "Text Message"
                                                                }
                                                                onChange={handleChange}
                                                                required
                                                                style={{ padding: "10px" }}
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="comm_text"
                                                            >
                                                                Text Message
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="user_specialty"
                                                                placeholder="Specialty *"
                                                                value={formData.user_specialty}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                name="user_message"
                                                                placeholder="How can we help you? *"
                                                                rows={4}
                                                                required
                                                                value={formData.user_message}
                                                                onChange={handleChange}
                                                            ></textarea>
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
<div className="col-sm-12">
    <div className="pt-3 sms-consent-row">
        <input
            type="checkbox"
            id="sms_consent"
            name="sms_consent"
            checked={formData.sms_consent}
            onChange={handleChange}
            required={formData.preferred_communication === "Text Message"}
            className="sms-consent-checkbox"
        />

        <label htmlFor="sms_consent" className="sms-consent-text">
            I agree to receive marketing text messages from Speedy Credentialing at{" "}
            <a href="tel:+18552478482">+1-346-228-4848</a>. Consent is not a
            condition of purchase. Message and data rates may apply. Message
            frequency varies. Reply STOP to unsubscribe and HELP for help.{" "}
            <a href="/privacy">Privacy Policy</a> |{" "}
            <a href="/terms">Terms & Conditions</a>
        </label>
    </div>
</div>

                                                    <div className="col-sm-12">
                                                        <div className="form-group mg_top apbtn">
                                                            <button
                                                                className="theme_btn"
                                                                type="submit"
                                                                disabled={loading}
                                                                style={{
                                                                    position: "relative",
                                                                    zIndex: 9999,
                                                                    opacity: loading ? 0.8 : 1,
                                                                }}
                                                            >
                                                                {loading ? (
                                                                    <>
                                                                        <span
                                                                            className="spinner-border spinner-border-sm me-2"
                                                                            role="status"
                                                                            aria-hidden="true"
                                                                        ></span>
                                                                        Sending...
                                                                    </>
                                                                ) : (
                                                                    "Get a Complementary Analysis"
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    {showSuccess && (
                        <div
                            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{
                                backgroundColor: "rgba(0,0,0,0.5)",
                                zIndex: 9999,
                            }}
                        >
                            <div
                                className="bg-white rounded shadow p-5 text-center"
                                style={{ maxWidth: "500px", animation: "fadeIn 0.5s" }}
                            >
                                <div className="mb-4">
                                    <i
                                        className="fas fa-check-circle text-[#4ea1d4]"
                                        style={{ fontSize: "60px" }}
                                    ></i>
                                </div>
                                <h4 className="text-[#4ea1d4] mb-3">
                                    Message Sent Successfully!
                                </h4>
                                <p>
                                    Thank you for contacting us. We will get back to you shortly.
                                </p>
                                <button
                                    className="theme_btn mt-3"
                                    onClick={() => setShowSuccess(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                  <div
    className="ab_img_left_bottom mr_top_minus_150"
    style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 1,
    }}
>
    <img
        src="/assets/images/bg-1.png"
        className="img-fluid"
        alt="img"
        style={{
            display: "block",
            maxWidth: "100%",
        }}
    />
</div>

                    <div className="pd_bottom_90" />
                </section>

                <section className="contact-map-section">
                    <div className="container-no">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="map-section">
                                    <div className="map-outer">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.173352742698!2d-95.7124035!3d29.627708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e036ef0f2089%3A0x15920714c55e146d!2s442%20Papershell%20Path%2C%20Richmond%2C%20TX%2077406%2C%20USA!5e0!3m2!1sen!2s!4v1772867011056!5m2!1sen!2s"
                                            height={570}
                                            style={{ border: 0, width: "100%" }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-section pd_top_90 pd_bottom_70">
                    <div className="px-3">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="contact_box_content bg_white shadow_sm rounded p-5 text-center h-100">
                                    <div className="icon trans mb-4">
                                        <img
                                            src="/assets/images/cont-1.png"
                                            alt="Location icon"
                                            className="img-fluid"
                                            width={60}
                                        />
                                    </div>
                                    <h6 className="title_no_a_24 mb-3">Location</h6>
                                    <p className="mb-0">
                                        442 Papershell Path, Richmond, TX 77406
                                        <br />
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="contact_box_content bg_white shadow_sm rounded p-5 text-center h-100">
                                    <div className="icon trans mb-4">
                                        <img
                                            src="/assets/images/cont-2.png"
                                            alt="Email icon"
                                            className="img-fluid"
                                            width={60}
                                        />
                                    </div>
                                    <h6 className="title_no_a_24 mb-3">Email</h6>
                                    <Link
                                        href="mailto:info@fourraysrcm.com"
                                        className="text_primary hover_underline"
                                    >
                                        info@fourraysrcm.com
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="contact_box_content bg_white shadow_sm rounded p-5 text-center h-100">
                                    <div className="icon trans mb-4">
                                        <img
                                            src="/assets/images/cont-3.png"
                                            alt="Phone icon"
                                            className="img-fluid"
                                            width={60}
                                        />
                                    </div>
                                    <h6 className="title_no_a_24 mb-3">Call Us</h6>
                                    <Link
                                        href="tel:+18552478482"
                                        className="text_primary hover_underline"
                                    >
                                        +1-346-228-4848
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

      <style jsx global>{`
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .sms-consent-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.sms-consent-checkbox {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
    width: 18px !important;
    height: 18px !important;
    min-width: 18px !important;
    max-width: 18px !important;
    margin: 8px 0 0 0 !important;
    padding: 0 !important;
    border: 2px solid #4ea1d4 !important;
    border-radius: 3px !important;
    background: #fff !important;
    display: inline-grid !important;
    place-content: center !important;
    cursor: pointer !important;
    box-shadow: none !important;
    flex: 0 0 18px !important;
    position: relative !important;
    outline: none !important;
}

.sms-consent-checkbox::before {
    content: "";
    width: 5px;
    height: 10px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg) scale(0);
    transition: transform 0.12s ease-in-out;
    margin-top: -1px;
}

.sms-consent-checkbox:checked {
    background: #4ea1d4 !important;
    border-color: #4ea1d4 !important;
}

.sms-consent-checkbox:checked::before {
    transform: rotate(45deg) scale(1);
}

.sms-consent-checkbox:focus {
    box-shadow: 0 0 0 2px rgba(78, 161, 212, 0.2) !important;
}

.sms-consent-text {
    margin: 0 !important;
    line-height: 1.6 !important;
    font-size: 13px !important;
    color: #6c757d !important;
    cursor: pointer !important;
}

.sms-consent-text a {
    position: relative;
    z-index: 5;
}
`}</style>
        </>
    );
}