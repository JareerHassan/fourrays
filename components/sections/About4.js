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
                        <div className="col-lg-6 col-md-12 pd_right_30">
                            <div className="image_box_only type_eight">
                                {/* <div className="pattern">
                                    <img src="/assets/images/new-images/7img.webp" className="img-fluid" alt="img" />
                                </div> */}
                                <div className="m_image">
                                    <img src="/assets/images/new-images/7img.webp" className="img-fluid" alt="img" />
                                </div>
                                <div className="fun_facts type_two color_two">
                                    <h4>
                                        <CounterUp count={10} time={1} />
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_26">Years Of
                                        Experience</h6>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-6 col-md-12 pd_left_60">
                            <div className="section_title type_five">
                                <h4 className="sm_title"> About Insurance</h4>
                                <div className="title_whole">
                                    <h2 className="title">Elevate Your Practice With Our Specialized Solutions</h2>
                                </div>
                                <p>
                                 At Med Jaaf we are committed to providing personalized support tailored to each individual’s unique needs. Our individual enrollment process is designed to be simple, confidential, and supportive from start to finish. Whether you’re seeking professional guidance, specialized services, or a customized plan to help you achieve your goals, our team is here to help. Anyone can enroll—there are no prerequisites or referrals required. To get started, simply complete our enrollment form with your basic information. Once submitted, a member of our team will contact you to schedule an initial consultation.
                                </p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_25" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative">
                                <ul className="list_box list color_three">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Best Insurance Agency </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Trusted & Experience Insurance </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Dedicated Support &amp; Security </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_35" />
                            {/*-============spacing==========-*/}
                            <div className="theme_btn_all">
                                <Link href="/about-us" className="theme_btn color_four big rotate">
                                    About Us <span> <i className=" fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
