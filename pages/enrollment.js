'use client';

import Layout from "@/components/layout/Layout";
import { useState, useRef, useEffect } from 'react';
import {
    User,
    Building2,
    FileUp,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';
import { sendForm3 } from "@/http/form3Api";

export default function Team() {
     useEffect(() => {
   const baseUrl = "https://fourraysrcm.com"; 
    const pagePath = "/enrollment";
    const pageUrl = `${baseUrl}${pagePath}`;

    const title = "Provider Enrollment Services | FourRays";
    const description =
      "Provider enrollment services to get you in-network faster. We submit, track, and follow up on payer applications while keeping profiles accurate and complete.";
    const keywords =
      "provider enrollment services, payer enrollment services, insurance enrollment for providers, Medicare provider enrollment, Medicaid enrollment services, commercial payer enrollment, credentialing and enrollment services";

    const upsertMeta = (key, content, attr = "name") => {
      if (!content) return;
      const selector =
        attr === "property" ? `meta[property="${key}"]` : `meta[name="${key}"]`;
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
          name: "Provider Enrollment Services",
          serviceType:
            "Payer enrollment services, Medicare/Medicaid enrollment, commercial payer enrollment, application submission, tracking and follow-ups, provider profile accuracy",
          provider: { "@id": `${baseUrl}/#organization` },
          areaServed: "United States",
        },
      ],
    };

    setJsonLd("schema-enrollment", schema);
  }, []);

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const form = useRef();

    const insuranceList = [
        "ACI Specialty Benefits", "Aetna", "Amerigroup", "AmeriHealth", "Anthem", "Banner Health",
        "Beacon Health Options", "Blue Cross Blue Shield", "CareConnect Health Plan", "Centene Corporation",
        "CHAMPVA", "Choice Health-Care Network", "Cigna and Ever-north", "ComPsych", "EmblemHealth",
        "GHI", "Great-West Life", "Health Net", "Health Net I MHN", "Health Plus", "Horizon Blue Cross",
        "Horizon Blue Cross and Blue", "Horizon Healthcare", "Humana", "Kaiser Permanente", "Magellan",
        "MagnaCare", "Medicaid", "Medicare", "Mercy Care", "Meridian", "Molina Healthcare", "MultiPlan",
        "Optum", "Oscar Health", "Oxford", "Phoenix Health Plan", "Sharp Health plan", "TRICARE",
        "UMR", "UnitedHealthcare IJHC I UBH", "VA Community Care Network", "Other"
    ];

    const documentList = [
        { label: "State License", name: "state_license", required: false },
        { label: "IRS Letter", name: "irs_letter", required: true, note: "Compulsory" },
        { label: "Accreditation Letter", name: "accreditation_letter", required: false },
        { label: "Malpractice/PLI/COI", name: "malpractice_pli_coi", required: false }, // ✅ name fixed
        { label: "W9 Form", name: "w9_form", required: false },
        { label: "Voided Check/Bank Letter", name: "void_check", required: false },
        { label: "Owner Driving License", name: "owner_driving_license", required: false },
        { label: "Resume / CV", name: "resume_cv", required: false },
        { label: "Bank Statement", name: "bank_statement", required: false } // ✅ optional field added
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // 🔹 First set hidden insurances value
        const insInput = document.getElementById('selected_insurances');
        if (insInput) {
            const selectedInsurances = Array.from(new Set(insInput.value.split(' | ').filter(i => i))).join(', ');
            insInput.value = selectedInsurances; // ✅ set input value before creating FormData
        }

        const formData = new FormData(form.current);

        // 🔹 Ensure other_insurances exists in FormData
        const otherIns = form.current.querySelector('textarea[name="other_insurances"]');
        if (otherIns) formData.set('other_insurances', otherIns.value);

        // 🔹 Check total attachments size
        let totalSize = 0;
        for (let [key, value] of formData.entries()) {
            if (value instanceof File) {
                totalSize += value.size;
            }
        }

        const MAX_SIZE_MB = 15; // Max 15 MB total attachments
        if (totalSize > MAX_SIZE_MB * 1024 * 1024) {
            alert(`Total attachments size exceeds ${MAX_SIZE_MB} MB. Please reduce file sizes.`);
            setLoading(false);
            return;
        }

        try {
            const response = await sendForm3(formData);
            setLoading(false);
            setShowSuccess(true);
            form.current.reset();
            if (insInput) insInput.value = '';
        } catch (err) {
            setLoading(false);
            alert(err.message || "Submission failed");
        }
    };



    return (
        <Layout breadcrumbTitle="Enrollment">
            <section className="enrollment-form-area py-5 bg-light min-vh-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="form-header mb-5">
                                <h1 className="display-6 fw-bold text-dark">Provider/Facility Details</h1>
                            </div>

                            <form ref={form} onSubmit={handleSubmit} className="enrollment-form bg-white p-4 p-md-5 rounded-4 shadow-sm border">

                                {/* --- Section 1: Provider Info --- */}
                                <div className="form-section mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-box bg-primary-light text-primary me-3">
                                            <User size={24} />
                                        </div>
                                        <h4 className="mb-0 fw-bold">1. Provider Information</h4>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Full Name *</label>
                                            <input type="text" name="full_name" className="form-control custom-input" placeholder="Legal Name" required />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label small fw-bold text-uppercase text-muted">SSN (Last 4)</label>
                                            <input type="text" name="ssn_last_4" className="form-control custom-input" placeholder="0000" maxLength={4} required />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Date of Birth</label>
                                            <input type="date" name="date_of_birth" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Percentage of Ownership</label>
                                            <input type="text" name="percentage_of_ownership" className="form-control custom-input" placeholder="%" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPPES username</label>
                                            <input type="text" name="nppes_username" className="form-control custom-input" placeholder="NPPES username" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPPES password</label>
                                            <input type="text" name="nppes_password" className="form-control custom-input" placeholder="NPPES password" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Speciality</label>
                                            <input type="text" name="speciality" className="form-control custom-input" placeholder="e.g. Cardiology" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Email Address *</label>
                                            <input type="email" name="email_address" className="form-control custom-input" placeholder="you@gmail.com" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Cell No.</label>
                                            <input type="tel" name="cell_no" className="form-control custom-input" placeholder="+1..." required />
                                        </div>
                                    </div>
                                </div>

                                {/* --- Section 2: Facility Details --- */}
                                <div className="form-section mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-box bg-success-light text-success me-3">
                                            <Building2 size={24} />
                                        </div>
                                        <h4 className="mb-0 fw-bold">2. Facility Details</h4>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Facility/Agency Name</label>
                                            <input type="text" name="facility_agency_name" placeholder="Facility/Agency Name" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Tax ID</label>
                                            <input type="text" name="tax_id" placeholder="Tax ID" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPI Type 1 (Individual)</label>
                                            <input type="text" name="npi_type_1_individual" placeholder="NPI Type 1 (Individual)" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPI Type 2 (Group)</label>
                                            <input type="text" name="npi_type_2_group" placeholder="NPI Type 2 (Group)" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Primary Service Address</label>
                                            <input type="text" name="primary_service_address" placeholder="Primary Service Address" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Pay to Address</label>
                                            <input type="text" name="pay_to_address" placeholder="Pay to Address" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Mailing Address</label>
                                            <input type="text" name="mailing_address" placeholder="Mailing Address" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Hours</label>
                                            <input type="text" name="office_hours_at_location" placeholder="Office Hours" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Appointment Phone No.</label>
                                            <input type="text" name="appointment_phone_no" placeholder="Appointment Phone No." className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Fax No.</label>
                                            <input type="text" name="fax_no" placeholder="Fax No." className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Email</label>
                                            <input type="text" name="office_email" placeholder="Office Email" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Manager/Contact</label>
                                            <input type="text" name="office_manager_contact" placeholder="Office Manager/Contact" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">CAQH logins</label>
                                            <input type="text" name="caqh_logins" placeholder="CAQH logins" className="form-control custom-input" required />
                                        </div>
                                    </div>
                                </div>

                                {/* --- Section 3: Document Uploads --- */}
                                <div className="form-section mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-box bg-warning-light text-warning me-3">
                                            <FileUp size={24} />
                                        </div>
                                        <h4 className="mb-0 fw-bold">3. Compliance Documents</h4>
                                    </div>
                                    <div className="row g-3">
                                        {documentList.map((doc, index) => (
                                            <div key={index} className="col-md-6">
                                                <div className="upload-card">
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span className="fw-semibold small">
                                                            {doc.label} {doc.required && <span className="text-danger">*</span>}
                                                        </span>
                                                        {doc.note && <span className="badge bg-soft-danger text-danger">{doc.note}</span>}
                                                    </div>
                                                    <input
                                                        type="file"
                                                        name={doc.name}
                                                        className="form-control form-control-sm"
                                                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                                                    // required
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* --- Section 4: Insurance Selection --- */}
                                <div className="form-section mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-box bg-info-light text-info me-3">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <h4 className="mb-0 fw-bold">4. Insurance Selection</h4>
                                    </div>
                                    <input type="hidden" name="insurances" id="selected_insurances" />
                                    <div className="insurance-grid-container p-3 border rounded-3 bg-light-subtle">
                                        <div className="row g-2 overflow-auto" style={{ maxHeight: '350px' }}>
                                            {insuranceList.map((item, index) => (
                                                <div key={index} className="col-md-4 col-sm-6">
                                                    <div className="insurance-check-card position-relative">
                                                        <input
                                                            type="checkbox"
                                                            className="btn-check" // name removed
                                                            id={`ins-${index}`}
                                                            value={item}
                                                            onChange={(e) => {
                                                                const hiddenInput = document.getElementById('selected_insurances');
                                                                let values = hiddenInput.value ? hiddenInput.value.split(' | ') : [];
                                                                if (e.target.checked) values.push(item);
                                                                else values = values.filter(v => v !== item);
                                                                hiddenInput.value = values.join(' | ');
                                                            }}
                                                            style={{ display: 'none' }}
                                                        />
                                                        <label
                                                            className="btn btn-outline-primary btn-sm w-100 text-start d-flex align-items-center"
                                                            htmlFor={`ins-${index}`}
                                                        >
                                                            <CheckCircle2 size={14} className="me-2 icon-check" />
                                                            <span className="text-truncate">{item}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>

                                {/* --- Submit Section --- */}
                                <div className="submit-area border-top pt-5">
                                    <div className="col-md-12 mb-3">
                                        <p>Write Other Insurance Companies not mentioned in our list</p>
                                        <textarea name="other_insurances" rows="4" className="form-control custom-input" placeholder="Enter any other insurance companies..." required ></textarea>
                                    </div>

                                    <button
                                        className="theme_btn"
                                        type="submit"
                                        disabled={loading}
                                        style={{ position: "relative", zIndex: 9999, opacity: loading ? 0.8 : 1 }}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Sending...
                                            </>
                                        ) : "Send"}
                                    </button>
                                </div>
                            </form>

                            {showSuccess && (
                                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999 }}>
                                    <div className="bg-white rounded shadow p-5 text-center" style={{ maxWidth: "500px", animation: "fadeIn 0.5s" }}>
                                        <div className="mb-4">
                                            <i className="fas fa-check-circle text-[#4ea1d4]" style={{ fontSize: "60px" }}></i>
                                        </div>
                                        <h4 className="text-[#4ea1d4] mb-3">Message Sent Successfully!</h4>
                                        <p>Thank you for contacting us. We will get back to you shortly.</p>
                                        <button className="theme_btn mt-3" onClick={() => setShowSuccess(false)}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .bg-primary-light { background: #e7f1ff; }
                .bg-success-light { background: #e6fcf5; }
                .bg-warning-light { background: #fff9db; }
                .bg-info-light { background: #e3fafc; }
                .icon-box { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 12px; }
                .custom-input { padding: 0.75rem 1rem; border: 1px solid #dee2e6; border-radius: 10px; transition: all 0.2s ease; }
                .custom-input:focus { border-color: #4ea1d4; box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1); background-color: #fff; }
                .upload-card { background: #f8f9fa; border: 2px dashed #dee2e6; padding: 15px; border-radius: 12px; transition: all 0.2s ease; }
                .upload-card:hover { border-color: #4ea1d4; background: #fff; }
                .insurance-check-card .btn-outline-primary { border-color: #eee; color: #444; background: white; padding: 10px; border-radius: 8px; font-size: 0.85rem; }
                .insurance-check-card .icon-check { opacity: 0; transition: 0.2s; }
                .btn-check:checked + .btn { background-color: #4ea1d4 !important; color: white !important; border-color: #4ea1d4; }
                .btn-check:checked + .btn .icon-check { opacity: 1; }
                .bg-soft-danger { background-color: #fee2e2; }
            `}</style>
        </Layout>
    );
}
