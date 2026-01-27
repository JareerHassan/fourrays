import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../public/assets/css/plugins/animate.min.css"
import "../public/assets/css/plugins/bootstrap.min.css"
import "../public/assets/css/plugins/jquery.fancybox.min.css"
import "../public/assets/css/plugins/owl.css"
import "../public/assets/css/plugins/rangeslider.css"
import "../public/assets/css/plugins/select.min.css"
import "../public/assets/css/plugins/slick.css"

import "../public/assets/css/global-settings.css"
import "../public/assets/css/theme.css"

import "../public/assets/css/plugins/flaticon_vankine.css"
import "../public/assets/css/plugins/font-awesome.min.css"
import "../public/assets/css/plugins/uicons-regular-rounded.css"
import "../public/assets/css/plugins/uicons-regular-straight.css"

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <Preloader />
        )}
    </>)
}

export default MyApp
