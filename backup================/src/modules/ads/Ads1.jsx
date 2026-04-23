import Ads from "../../assets/images/delete/home2.jpg";
import { Global } from "../common/Global";

export default function Ads1() {
  return (
    <>
      <section className="section ads1">
            <div className="container">
                <ul>
                    <li>
                        <p className="subHead" data-aos="fade-down">Lorem, ipsum dolor</p>
                        <p className="head" data-aos="fade-up">Lorem ipsum dolor sit</p>
                        <p className="text" data-aos="fade-down">Lorem ipsum dolor sit amet</p>
                        <div className="btns center bsn" data-aos="fade-right">
                            <a href={Global.numTel} target="_blank">View More</a>
                        </div>
                    </li>
                    <li><img src={Ads} data-aos="fade-left" /></li>
                </ul>
            </div>{/* container */}
        </section>
    </>
  );
}
