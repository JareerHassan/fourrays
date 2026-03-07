import dynamic from 'next/dynamic'
import Link from "next/link"

const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function About4() {
    return (
        <>
            <section className="about-section bg_op_4" style={{ backgroundImage: 'url(assets/images/wave-pat-1.png)' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Image & Fun Facts */}
                        <div className="col-lg-6 col-md-12 pd_right_30">
                            <div className="image_box_only type_eight">
                                <div className="m_image">
                                    <img
                                        src="/assets/images/new-4.jpg"
                                        className="img-fluid"
                                        alt="Four Rays RCM"
                                    />
                                </div>
                                <div className="fun_facts type_two color_two">
                                    <h4>
                                        <CounterUp count={10} time={1} />
                                        <small>+</small>
                                    </h4>
                                    <h6 className="title_no_a_26">Years Of Experience</h6>
                                </div>
                            </div>
                            <div className="pd_bottom_40" />
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-6 col-md-12 pd_left_60">
                            <div className="section_title type_five">
                                <h4 className="sm_title">About Four Rays RCM</h4>
                                <div className="title_whole">
                                    <h2 className="title">Simplifying Credentialing & Revenue Cycle Management</h2>
                                </div>
                                <p>
                                    Four Rays RCM is a dedicated healthcare credentialing and revenue cycle management company committed to simplifying administrative and financial operations for healthcare providers.
                                    We ensure smooth payer enrollment, regulatory compliance, and optimized revenue cycle performance so you can focus on exceptional patient care.
                                </p>
                            </div>
                            <div className="pd_bottom_25" />

                            <div className="position-relative">
                                <ul className="list_box list color_three">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                            </div>
                                            <Link className="links" href="#">
                                                Comprehensive Provider Enrollment
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                            </div>
                                            <Link className="links" href="#">
                                                CAQH & Licensing Management
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                            </div>
                                            <Link className="links" href="#">
                                                Pre-Authorization & Revenue Optimization
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="pd_bottom_35" />
                            <div className="theme_btn_all">
                                <Link href="/about-us" className="theme_btn color_four big rotate">
                                    Learn More <span><i className="fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_50" />
            </section>
        </>
    )
}