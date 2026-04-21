import Ads from "../../assets/images/delete/home1.jpg";
import { Global } from "../common/Global";

export default function Ads4() {
  return (
    <>
      <section className="ads4">
            <div className="container">
                <ul>
                    <li>
                        <p className="subHead">Lorem, ipsum dolor</p>
                        <p className="head">Lorem ipsum dolor sit</p>
                        <p className="text">Lorem ipsum dolor sit amet</p>
                        <div className="btns bsn">
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
