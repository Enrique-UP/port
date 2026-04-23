import Ads from "../../assets/images/delete/home1.jpg";
import { Global } from "../common/Global";

export default function Ads4() {
  return (
    <>
      <section className="ads4">
            <div className="container">
                <ul>
                    <li>
                        <p className="subHead" data-aos="fade-down">Lorem, ipsum dolor</p>
                        <p className="head" data-aos="fade-up">Lorem ipsum dolor sit</p>
                        <p className="text" data-aos="fade-down">Lorem ipsum dolor sit amet</p>
                        <div className="btns bsn">
                            <a href={Global.numTel} target="_blank" data-aos="fade-right">View More</a>
                        </div>
                    </li>
                    <li><img src={Ads} data-aos="fade-left" /></li>
                </ul>
            </div>{/* container */}
        </section>
    </>
  );
}
