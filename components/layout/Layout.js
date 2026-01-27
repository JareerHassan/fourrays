import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from "./MobileMenu"
import OptionalPanel from "./OptionalPanel"
import SearchPopup from "./SearchPopup"
import StickyHeader from "./StickyHeader"
import Footer4 from "./footer/Footer4"
import Header4 from "./header/Header4"
export default function Layout({ headerStyle, footerStyle, pageCls, breadcrumbTitle, children }) {
    // Search
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    // Optional Panel
    const [isOptionalPanel, setOptionalPanel] = useState(false)
    const handleOptionalPanel = () => setOptionalPanel(!isOptionalPanel)

    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)



    // Scroll Header
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <div id="page" className={`page_wapper hfeed site ${pageCls ? pageCls : ""}`}>

                {!headerStyle && <Header4 handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} />}
                {headerStyle == 1 ? <Header1 handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} /> : null}
                {headerStyle == 2 ? <Header2 handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} /> : null}
                {headerStyle == 3 ? <Header3 handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} /> : null}
                {headerStyle == 4 ? <Header4 handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} /> : null}
                {headerStyle == 5 ? <Header5 handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} /> : null}
                {headerStyle == 6 ? <Header6 handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} /> : null}

                <StickyHeader scroll={scroll} handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} />

                <div id="wrapper_full" className="content_all_warpper">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    <div id="content" className="site-content">
                        {children}
                    </div>
                    {!footerStyle && < Footer4 />}
                    {footerStyle == 1 ? < Footer1 /> : null}
                    {footerStyle == 2 ? < Footer2 /> : null}
                    {footerStyle == 3 ? < Footer3 /> : null}
                    {footerStyle == 4 ? < Footer4 /> : null}
                    {footerStyle == 5 ? < Footer5 /> : null}
                    {footerStyle == 6 ? < Footer6 /> : null}
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
                <OptionalPanel isOptionalPanel={isOptionalPanel} handleOptionalPanel={handleOptionalPanel} />
                <BackToTop />
            </div>
        </>
    )
}
