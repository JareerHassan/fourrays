import Layout from "@/components/layout/Layout"
import Testimonial4 from "@/components/sections/Testimonial4"
import Link from "next/link"
import { useState } from "react"
export default function Faq() {
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
            <Layout breadcrumbTitle="FAQ's">
                {/*-faq*/}
                {/* <section className="faq-section"> */}
                {/*-============spacing==========-*/}
                {/* <div className="pd_top_90" /> */}
                {/*-============spacing==========-*/}
                {/* <div className="container"> */}
                {/* <div className="row">
                            <div className="col-lg-5">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Faqs</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Frequently Asked
                                            Questions!</h2>
                                    </div>
                                    <p> Sed ut perspiciatis unde natus voluptatem accusantium doloremque laudantium
                                        aperiam
                                        inventore veritatis architecto beatae</p>
                                </div> */}
                {/*-============spacing==========-*/}
                {/* <div className="pd_bottom_40" /> */}
                {/*-============spacing==========-*/}
                {/* <div className="theme_btn_all">
                                    <Link href="#" className="theme_btn big rotate">
                                        Contact Us <span> <i className=" fi-rr-arrow-small-up" /></span>
                                    </Link>
                                </div> */}
                {/*-============spacing==========-*/}
                {/* <div className="pd_bottom_30" /> */}
                {/*-============spacing==========-*/}
                {/* </div>
                            <div className="col-lg-7">
                                <section className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">What Is Insurance Services?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">How Many Service We Provide ?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                Quis autem vel eum iure reprehenderit ea voluptate esse molestiae
                                                consequatur veillum voluptas nullaes
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">How Much Experience Our Team
                                                        Member
                                                        ?</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 4 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(4)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Why We Are The Best Company?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 5 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 5 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(5)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Build your Business ?</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 6 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 6 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(6)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">How Much Experience Our Team
                                                        Member
                                                        ?</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div> */}
                {/*-============spacing==========-*/}
                {/* <div className="pd_bottom_40" /> */}
                {/*-============spacing==========-*/}
                {/* </section> */}
                {/*-faq end*/}
                {/*-faqs*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_60" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">
                                        Faqs</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Frequently Asked Questions!</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10">
                                    For many healthcare practices, credentialing can be both confusing and overwhelming.

                                    At Credentialing, we provide a full-service credentialing solution. Let us handle the complicated processes and the repeated follow up calls with insurance companies for you.

                                    Listed below are answers to some of the most frequently asked questions about the credentialing process. Take some time and review the information below or simply call us at <a className="text-primary">+959 235 0229</a> with your questions, and we’ll be happy to help!
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 7 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 7 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(7)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Why would someone want or need medical credentialing?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                Being credentialed with insurance panels means that you are able to see patients who have specific insurance plans and bill those insurance companies directly for the services you render. This can greatly increase the number of patients who can access your services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 8 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 8 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(8)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Do I get to choose the Insurance panels I want to be on?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                Yes. When you sign up for credentialing with us, you get to choose exactly which panels you want, and don’t want, to be credentialed with. Typically most outpatient physician providers credential with 7-8 payors, where as hospital based physicians (in-patient) usually credential with 10-15 payors (pretty much any patient with any insurance that comes to hospital). Physicians working in tristate area (border of 3 states) like in our physician owner practice credential with 25 payors.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 9 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 9 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(9)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        How can I track my Medical credentialing progress?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                Yes. When you sign up for credentialing with us, you get to choose exactly which panels you want, and don’t want, to be credentialed with. Typically most outpatient physician providers credential with 7-8 payors, where as hospital based physicians (in-patient) usually credential with 10-15 payors (pretty much any patient with any insurance that comes to hospital). Physicians working in tristate area (border of 3 states) like in our physician owner practice credential with 25 payors.

                                                Most behavioural health providers, Therapists (PT, OT, ST, ABA etc) typically select 6-7 panels.
                                            </div>

                                            <div className={isActive.key == 10 ? "accordion  active-block" : "accordion"}>
                                                <div className={isActive.key == 10 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(10)}>
                                                    <div className="question_box ">
                                                        <div className="title_no_a_18 trans">
                                                            What if I don’t know which panels in my area are best for me?
                                                        </div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div className="answer accordion-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                    We can help! One of our credentialing specialists will talk with you by phone and can help you to select the panels in your area that will be the best fit for you and your practice.
                                                </div>
                                            </div>

                                            <div className={isActive.key == 11 ? "accordion  active-block" : "accordion"}>
                                                <div className={isActive.key == 11 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(11)}>
                                                    <div className="question_box ">
                                                        <div className="title_no_a_18 trans">
                                                            What are some of the more popular insurance companies?
                                                        </div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div className="answer accordion-content" style={{ display: `${isActive.key == 11 ? "block" : "none"}` }}>
                                                    The popularity of insurance companies varies depending on location. However, some of the most popular and largest insurance companies are Aetna, Cigna, Magellan, Tricare, United Healthcare, Humana, Value Options/Beacon Health Options, Medicare, and many others.
                                                </div>
                                            </div>

                                            <div className={isActive.key == 12 ? "accordion  active-block" : "accordion"}>
                                                <div className={isActive.key == 12 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(12)}>
                                                    <div className="question_box ">
                                                        <div className="title_no_a_18 trans">
                                                            How many hours of work does insurance credentialing take?
                                                        </div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div className="answer accordion-content" style={{ display: `${isActive.key == 12 ? "block" : "none"}` }}>
                                                    The amount of time that it takes to complete the credentialing process varies by license type. For a standard outpatient practice, the Credentialing Team will put in between 10 and 12 hours of work for each insurance panel. If an appeal has to be filed, that will add a minimum of 5 additional hours of work to that panel.

                                                    Facility-based services, Home Health Care Agencies, and DMEs will all take over 20 hours to complete the credentialing process.
                                                </div>
                                            </div>

                                            <div className={isActive.key == 13 ? "accordion  active-block" : "accordion"}>
                                                <div className={isActive.key == 13 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(13)}>
                                                    <div className="question_box ">
                                                        <div className="title_no_a_18 trans">
                                                            Have you ever credentialed or worked with providers in my area?
                                                        </div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div className="answer accordion-content" style={{ display: `${isActive.key == 13 ? "block" : "none"}` }}>
                                                    You bet! We have credentialed literally thousands of providers across the United States, including providers as far off as Alaska and Hawaii. No matter where your practice is, we have the experience needed to get you credentialed.
                                                </div>
                                            </div>

                                            <div className={isActive.key == 14 ? "accordion  active-block" : "accordion"}>
                                                <div className={isActive.key == 14 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(14)}>
                                                    <div className="question_box ">
                                                        <div className="title_no_a_18 trans">
                                                            Have you ever credentialed or worked with providers with my license type/specialty?
                                                        </div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div className="answer accordion-content" style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                                    We have credentialed healthcare providers of more types than we can list: from chiropractors to behavioral health providers to surgeons. If you are eligible to be credentialed, we can get you credentialed!

                                                    If you are providing a service that is new and innovative, we also offer research with the insurance companies to see if your specialty is eligible for credentialing. This can save you hours of headaches reaching out to the individual insurance panels.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="image_box_only  type_three">
                                    <div className="left">
                                        <div className="image one">
                                            <img src="/assets/images/new-images/27img.webp" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="image two">
                                            <img src="/assets/images/new-images/28img.webp" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="image three">
                                            <img src="/assets/images/new-images/22img.webp" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faqs end*/}
                {/*testimonial*/}
                {/* <Testimonial4 /> */}
                {/*testimonial*/}


            </Layout>
        </>
    )
}