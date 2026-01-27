import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import Testimonial4 from "@/components/sections/Testimonial4"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function AboutUs() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout breadcrumbTitle="About Us">
                {/*-about*/}
                <section className="about-section position-relative">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="auto-container">
                        <div className="row align-items-start">
                            <div className="col-lg-6 col-md-12">
                                <div className="image_box_only type_seven">
                                    <div className="icon_box_only type_four inline_box trans">
                                        <div className="icon">
                                            <img src="/assets/images/icon-image-1.png" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="content">
                                            <div className="title_18">
                                                <Link href="#">
                                                    Life Insurance
                                                </Link>
                                            </div>
                                        </div>
                                        <Link className="link" href="#">
                                            <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                                </circle>
                                                <g clipPath="url(#clip0_117_28461)">
                                                    <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_117_28461">
                                                        <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className="fun_facts type_two">
                                        <h4>

                                            <CounterUp count={10} time={1} />
                                            <small>
                                                + </small></h4>
                                        <h6 className="title_no_a_26">Years Of
                                            Experience</h6>
                                    </div>
                                    <div className="icon_box_only type_four position_two trans">
                                        <div className="icon">
                                            <img src="/assets/images/icon-image-2.png" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="content">
                                            <div className="title_18">
                                                <Link href="#">
                                                    Health Insurance
                                                </Link>
                                            </div>
                                        </div>
                                        <Link className="link" href="#">
                                            <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                                </circle>
                                                <g clipPath="url(#clip0_117_2846)">
                                                    <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_117_2846">
                                                        <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="m_image">
                                        <img src="/assets/images/new-images/19img.jpg" alt="img" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> About Company</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Invaluable Resources for Every Step of Your Practice’s Lifecycle</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="mr_bottom_20" />
                                {/*-============spacing==========-*/}
                                <div className="fom_tab_box custom_tabs only_tab_content">
                                    <ul className="nav nav-tabs links trans" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>
                                                About Us <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>
                                                Mission <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>
                                                Vision <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="s_tabs_content tab-content">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="tab_content_box">
                                                <div className="content">
                                                    Reap the benefits of a practice-partner with expertise in generating long-term sucess.</div>
                                                <div className="d-flex">
                                                    <ul>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Best Insurance Agency
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Trusted &amp; Experience
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Dedicated Support &amp; Security</span>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Board Composition</span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Key Managerial Persons</span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Board Committees</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                            <div className="tab_content_box">
                                                <div className="content">
                                                    To help our clients improve efficiency by reducing redundancy and variation, we develop innovative and automated healthcare and insurance-related documentation and practice management processes.</div>
                                                <div className="d-flex">
                                                    <ul>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Best Insurance Agency
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Trusted &amp; Experience Insurance
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Dedicated Support &amp; Security</span>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Best Insurance Agency
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Trusted &amp; Experience Insurance
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Dedicated Support &amp; Security</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane active" : "tab-pane"}>
                                            <div className="tab_content_box">
                                                <div className="content">
                                                    The credentialing vision is to become an integral part of our client’s business by providing all healthcare-related innovative business solutions ranging from credentialing with insurance payors and hospital revenue cycle management.</div>
                                                <div className="d-flex">
                                                    <ul>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Best Insurance Agency
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Trusted &amp; Experience Insurance
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Dedicated Support &amp; Security</span>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Best Insurance Agency
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Trusted &amp; Experience Insurance
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                                                                </circle>
                                                                <g>
                                                                    <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span> Dedicated Support &amp; Security</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}

                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_70" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    <div className="ab_img_right_bottom z_minus_1">
                        <img src="/assets/images/bg-2.png" className="img-fluid" alt="img" />
                    </div>
                </section>
                {/*-about end*/}
                {/*service*/}
                <section className="service-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_60" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center type_one">
                                    <div className="title_whole">
                                        <h2 className="title">The Protection You Deserve.</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_top_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only  border_color_1 bg_light_1  type_seven">
                                    <div className="icon">
                                        <i className=" flaticon-insurance-2" /></div>
                                    <div className="title_24">
                                        <Link href="#">
                                            Health Plans </Link></div>
                                    <p>Stay healthy and worry-free with our
                                        tailored health coverage.</p>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only  border_color_1 bg_light_1 type_seven">
                                    <div className="icon">
                                        <i className=" flaticon-insurance-2" /></div>
                                    <div className="title_24">
                                        <Link href="#">
                                            Life insurance</Link></div>
                                    <p>Ensure your family's security with the right
                                        life coverage.</p>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only  border_color_1 bg_light_1 type_seven">
                                    <div className="icon">
                                        <i className=" flaticon-iteration" /></div>
                                    <div className="title_24">
                                        <Link href="#">
                                            Mobile Protection </Link></div>
                                    <p>Stay connected worry-free with our mobile
                                        protection.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </section>
                {/*service*/}
                {/*content*/}
                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title">Why collaborate with Med Jaaf?</h2>
                                    </div>
                                    <p> At Med Jaaf, we specialize in delivering top-tier medical billing and insurance credentialing services tailored to the unique needs of healthcare providers across the USA. With a focus on accuracy, speed, and reliability, we help practices thrive by simplifying complex processes and boosting operational efficiency.

                                        Our expert team understands the challenges of today’s healthcare landscape. That’s why we offer customized solutions that ensure smooth provider enrollments, fast-track credentialing, and maximize revenue potential. From solo practitioners to large healthcare networks, we’re here to support your success every step of the way.

                                        Backed by years of experience and a commitment to excellence, Med Jaaf is more than a service provider — we’re a strategic partner dedicated to helping you grow with confidence.</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}

                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6">
                                <div className="image_video_box_only  type_one mr_bottom_minus_90 z_1">
                                    <div className="image one height_530px">
                                        <img src="/assets/images/new-images/17img.webp" alt="img" className="img-fluid height_530px" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*content*/}
                {/*funfacts*/}
                <section className="analysis-section position-relative bg_1 overflow-hidden">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_170" />
                    {/*-============spacing==========-*/}
                    <div className="ab_img_left_top z_0 mr_top_minus_150">
                        <img src="/assets/images/shape/wave-pattern-2.png" className="img-fluid" alt="img" />
                    </div>
                    <div className="medium-container-two">
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="section_title text-center color_white type_one">
                                    <h4 className="sm_title">Coverage Area</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Discover the Best Insurance Plans Near You</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_30" />
                        {/*-============spacing==========-*/}
                        <div className="row  justify-content-center">
                            <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12" />
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-satisfaction" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={500} time={1} />
                                        <small>
                                            K </small></h4>
                                    <h6 className="title_no_a_18">Protected Clients</h6>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-business-people" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={10} time={1} />
                                        <small>
                                            Yrs </small></h4>
                                    <h6 className="title_no_a_18">Trusted Since 2014</h6>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-reviews" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={100} time={1} />
                                        <small>
                                            % </small></h4>
                                    <h6 className="title_no_a_18">Transparency</h6>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_one color_white">
                                    <div className="icon trans">
                                        <div className="icon_in trans">
                                            <i className=" flaticon-presenter" /></div>
                                    </div>
                                    <h4>

                                        <CounterUp count={24} time={1} />
                                        <small>
                                            hrs </small></h4>
                                    <h6 className="title_no_a_18">Emergency Claim</h6>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>

                            <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12" />
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                    <div className="ab_img_right_bottom z_0 mr_bottom_minus_250">
                        <img src="/assets/images/shape/wave-pattern-1.png" className="img-fluid" alt="img" />
                    </div>
                </section>
                {/*funfacts*/}
                {/*team*/}

                {/*team*/}
                {/*client*/}
                <section className="client-section ">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_40" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 pd_right_60">
                                <div className="section_title type_one small">
                                    {/* <h4 className="sm_title"> Popular Clients</h4> */}
                                    <div className="title_whole">
                                        <h2 className="title"> Over Trusted Companies
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="row" style={{ margin: "-5px" }}>

                                    <div className="col-6" style={{ padding: "5px" }}>
                                        <div style={{ textAlign: "center" }}>
                                            <img
                                                src="/assets/images/new-images/img1.webp"
                                                alt="client"
                                                style={{ width: "220px", height: "auto" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6" style={{ padding: "5px" }}>
                                        <div style={{ textAlign: "center" }}>
                                            <img
                                                src="/assets/images/new-images/img4.webp"
                                                alt="client"
                                                style={{ width: "220px", height: "auto" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6" style={{ padding: "5px" }}>
                                        <div style={{ textAlign: "center" }}>
                                            <img
                                                src="/assets/images/new-images/img4.webp"
                                                alt="client"
                                                style={{ width: "220px", height: "auto" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6" style={{ padding: "5px" }}>
                                        <div style={{ textAlign: "center" }}>
                                            <img
                                                src="/assets/images/new-images/img2.webp"
                                                alt="client"
                                                style={{ width: "220px", height: "auto" }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_30" />
                    {/*-============spacing==========-*/}
                </section>
                {/*client*/}
                {/*testimonial*/}
                {/* <Testimonial4 /> */}
                {/*testimonial*/}


            </Layout>
        </>
    )
}