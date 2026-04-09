import img1 from "../../assets/images/lifeStyle/forest/12.jpg";

export default function Team() {
    return (
        <>
            <section className="section team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hgroup>
                                <h3>Main <span>Heading</span></h3>
                                <p>Lorem ipsum dolor</p>
                            </hgroup>
                        </div>{/* cols */}
                        <div className="col-12">
                            <div className="part">
                                <div className="teamArea">
                                    <img src={img1} />
                                    <i className="leftArrow"></i>
                                    <i className="rightArrow"></i>
                                    <i className="bottomArrow"></i>
                                    <span className="name">
                                        <b>Lorem</b>
                                        <em>Ipsummdlr</em>
                                    </span>
                                    <span className="post">Lorem ipsum dolor</span>
                                </div>{/* teamArea */}
                                <div className="teamArea">
                                    <img src={img1} />
                                    <i className="leftArrow"></i>
                                    <i className="rightArrow"></i>
                                    <i className="bottomArrow"></i>
                                    <span className="name">
                                        <b>Lorem</b>
                                        <em>Ipsummdlr</em>
                                    </span>
                                    <span className="post">Lorem ipsum dolor</span>
                                </div>{/* teamArea */}
                                <div className="teamArea">
                                    <img src={img1} />
                                    <i className="leftArrow"></i>
                                    <i className="rightArrow"></i>
                                    <i className="bottomArrow"></i>
                                    <span className="name">
                                        <b>Lorem</b>
                                        <em>Ipsummdlr</em>
                                    </span>
                                    <span className="post">Lorem ipsum dolor</span>
                                </div>{/* teamArea */}
                                <div className="teamArea">
                                    <img src={img1} />
                                    <i className="leftArrow"></i>
                                    <i className="rightArrow"></i>
                                    <i className="bottomArrow"></i>
                                    <span className="name">
                                        <b>Lorem</b>
                                        <em>Ipsummdlr</em>
                                    </span>
                                    <span className="post">Lorem ipsum dolor</span>
                                </div>{/* teamArea */}
                            </div>{/* gaps */}
                        </div>{/* cols */}
                    </div>{/* row */}
                </div>{/* container */}
            </section>
        </>
    );
}
