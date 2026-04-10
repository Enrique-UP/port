import img1 from "../../assets/images/banners/home.jpg";
import img2 from "../../assets/images/banners/inner.jpg";
import { Global } from "../common/Global";

export default function Ads3() {
    return (
        <>
            <section className="section ads3">
                <div className="container">
                    <div className="fw">
                        <figure className="head">
                            <figcaption>
                                <b>Travel</b>
                                <span>Website</span>
                            </figcaption>
                            <img src={img1} />
                        </figure>
                        <figure className="text">
                            <figcaption>
                                <p>
                                    <span>Up To</span>
                                    <b>Half</b>
                                    <b>Price</b>
                                </p>
                                <a href={Global.numTel} target="_blank">Order Now!</a>
                            </figcaption>
                        </figure>
                    </div>{/* fw */}
                </div>{/* container */}
            </section>
        </>
    );
}