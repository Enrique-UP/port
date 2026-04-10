import Ads from "../../assets/images/lifeStyle/beach/11.jpg";
import { Global } from "../common/Global";

export default function Ads1() {
  return (
    <>
      <section className="section ads1">
            <div className="container">
                <ul>
                    <li>
                        <p className="subHead">Lorem, ipsum dolor</p>
                        <p className="head">Lorem ipsum dolor sit</p>
                        <p className="text">Lorem ipsum dolor sit amet</p>
                        <div className="btns center bsn">
                            <a href={Global.numTel} target="_blank">View More</a>
                        </div>
                    </li>
                    <li><img src={Ads} /></li>
                </ul>
            </div>{/* container */}
        </section>
    </>
  );
}
