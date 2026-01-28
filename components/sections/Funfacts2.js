import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function Funfacts2() {
    return (
        <>
            <section className="funfacts-section">
                <div className="container">
                    <div className="row">
                        <h2 className='text-center mt-5 mb-5'>Trusted Over 5000 Client in the US</h2>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 w_50_after_max_768">
                            <div className="fun_facts type_one color_three text-center">
                                <h4>

                                    <CounterUp count={500} time={1} />
                                    <small>
                                        k+ </small></h4>
                                <h6 className="title_no_a_18">Protected Clients</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 w_50_after_max_768">
                            <div className="fun_facts type_one color_three text-center">
                                <h4>

                                    <CounterUp count={100} time={1} />
                                    <small>
                                        % </small></h4>
                                <h6 className="title_no_a_18">Transparency</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 w_50_after_max_768">
                            <div className="fun_facts type_one color_three text-center">
                                <h4>

                                    <CounterUp count={10} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Trusted Since 2014</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 w_50_after_max_768">
                            <div className="fun_facts type_one color_three text-center">
                                <h4>

                                    <CounterUp count={24} time={1} />
                                    <small>
                                        hrs </small></h4>
                                <h6 className="title_no_a_18">Emergency Claim</h6>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_80" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
