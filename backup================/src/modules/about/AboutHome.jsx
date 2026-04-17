import { useState, useEffect } from "react";
import { TypeWriter } from "../typeWriter/TypeWriter";

import img1 from "../../assets/images/lifeStyle/forest/12.jpg";
import img2 from "../../assets/images/lifeStyle/forest/3.jpg";
import img3 from "../../assets/images/lifeStyle/forest/39.jpg";

import { Global } from "../common/Global";
import { Link } from "react-router-dom";
import CounterNum from "./CounterNum";

const words1 = [
  { text: "(India)", className: "one" },
  { text: "(New Delhi)", className: "two" }
];

export default function AboutHome() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1199px)");
    const handleChange = (e) => setIsMobile(e.matches);
    setIsMobile(media.matches);
    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, []);

  const TextBlock = (
    <div className="cnt">
      <p className="hd">Heading</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non quibusdam aliquid! Officia dolorem dolorum nesciunt illo voluptates itaque, iure, ipsam explicabo blanditiis eum maiores eos aut. Deserunt fuga, minima fugiat voluptatum ullam esse repellendus architecto repudiandae. Ratione neque impedit eaque ipsum consequatur, enim in corporis dolore veritatis atque, voluptatem recusandae et? Id illo doloribus, ullam aliquid quis placeat rerum hic voluptates et assumenda explicabo recusandae cupiditate repellendus numquam sed enim. Amet delectus cum nostrum sunt dolores distinctio similique commodi sequi suscipit utnew.</p>
    </div>// {/* cnt */}
  );

  return (
    <section className="section about">
      <div className="container">
        <hgroup>
          <h2>About <span>Us</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minus unde</p>
        </hgroup>
        <div className="fw">
          <div className="cols1">
            <ul className="images">
              <li><img className="img1" src={img1} /></li>
              <li><img className="img1" src={img2} /></li>
              <li><img className="img2" src={img3} /></li>
            </ul>
          </div>{/* cols1 */}

          <div className="cols2">
            <div className="cnt">
              <p className="int">Hello!</p>
              <p className="int">P Lm Loremm Ipum,</p>
              <p className="post"><TypeWriter words={words1} /></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia necessitatibus esse! Asperiores dolorum veritatis quam, praesentium incidunt excepturi neque perferendis totam, natus libero corporis sed aut temporibus, harum explicabo unde minus doloribus. Maxime totam distinctio aspernatur recusandae dolor fugit excepturi at, esse tenetur magni eos consequuntur ad iure optio.</p>
            </div>
            <div className="cnt">
              <p className="hd">Heading</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non quibusdam aliquid! Officia dolorem dolorum nesciunt illo voluptates itaque, iure, ipsam explicabo blanditiis eum maiores eos aut. Deserunt fuga, minima fugiat voluptatum ullam esse repellendus architecto repudiandae. Ratione neque impedit eaque ipsum consequatur, enim in corporis dolore veritatis atque, voluptatem recusandae et? Id illo doloribus, ullam aliquid quis placeat rerum hic voluptates et assumenda explicabo recusandae cupiditate repellendus numquam sed enim.</p>
            </div>
            {/* ✅ Desktop only */}
            {!isMobile && TextBlock}
          </div>{/* cols2 */}
          <div className="cols3">
            {/* ✅ Mobile only */}
            {isMobile && TextBlock}
            <div className="cnt">
              <p className="hd">Heading</p>
              <p className="shd">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <ul className="lists one">
                  <li>01 Lorem ipsum dolor sit amet consectetur</li>
                  <li>02 Lorem ipsum dolor sit amet consectetur</li>
                  <li>03 Lorem ipsum dolor sit amet consectetur</li>
                  <li>04 Lorem ipsum dolor sit amet consectetur</li>
                  <li>05 Lorem ipsum dolor sit amet consectetur</li>
                  <li>06 Lorem ipsum dolor sit amet consectetur</li>
                  <li>07 Lorem ipsum dolor sit amet consectetur</li>
                  <li>08 Lorem ipsum dolor sit amet consectetur</li>
                  <li>09 Lorem ipsum dolor sit amet consectetur</li>
                  <li>10 Lorem ipsum dolor sit amet consectetur</li>
                  <li>11 Lorem ipsum dolor sit amet consectetur</li>
                  <li>12 Lorem ipsum dolor sit amet consectetur</li>
                  <li>13 Lorem ipsum dolor sit amet consectetur</li>
                  <li>14 Lorem ipsum dolor sit amet consectetur</li>
                  <li>15 Lorem ipsum dolor sit amet consectetur</li>
                  <li>16 Lorem ipsum dolor sit amet consectetur</li>
                  <li>17 Lorem ipsum dolor sit amet consectetur</li>
                  <li>18 Lorem ipsum dolor sit amet consectetur</li>
                  <li>19 Lorem ipsum dolor sit amet consectetur</li>
                  <li>20 Lorem ipsum dolor sit amet consectetur</li>
                  <li>21 Lorem ipsum dolor sit amet consectetur</li>
                  <li>22 Lorem ipsum dolor sit amet consectetur</li>
                  <li>23 Lorem ipsum dolor sit amet consectetur</li>
                  <li>24 Lorem ipsum dolor sit amet consectetur</li>
                  <li>25 Lorem ipsum dolor sit amet consectetur</li>
                  <li>26 Lorem ipsum dolor sit amet consectetur</li>
                  <li>27 Lorem ipsum dolor sit amet consectetur</li>
                  <li>28 Lorem ipsum dolor sit amet consectetur</li>
                  <li>29 Lorem ipsum dolor sit amet consectetur</li>
                  <li>30 Lorem ipsum dolor sit amet consectetur</li>
                  <li>31 Lorem ipsum dolor sit amet consectetur</li>
                  <li>32 Lorem ipsum dolor sit amet consectetur</li>
                  <li>33 Lorem ipsum dolor sit amet consectetur</li>
                  <li>34 Lorem ipsum dolor sit amet consectetur</li>
                  <li>35 Lorem ipsum dolor sit amet consectetur</li>
                </ul>
            </div>{/* cnt */}
            <div className="cnt">
                <p className="hd">Heading</p>
                <div className="skillBar colors one">
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={80} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={85} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={60} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={65} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={70} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={75} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={76} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={80} suffix="%" />
                    <i></i>
                  </article>
                </div>
              </div>{/* cnt */}
              <div className="cnt">
                <p className="hd">Heading</p>
                <div className="skillBar colors two">
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={70} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={65} suffix="%" />
                    <i></i>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <CounterNum target={50} suffix="%" />
                    <i></i>
                  </article>
                </div>
              </div>{/* cnt */}
              <div className="cnt">
                <p className="hd">Heading</p>
                <p>Lorem ipsum dolor sit <strong>amet consectetur adipisicing</strong> elit. Recusandae non quibusdam aliquid! Officia dolorem dolorum nesciunt illo voluptates itaque, iure, ipsam explicabo blanditiis eum maiores eos aut. Deserunt fuga, minima fugiat voluptatum ullam esse repellendus architecto repudiandae. Ratione neque impedit eaque ipsum consequatur, enim in corporis dolore veritatis atque, voluptatem recusandae et? Id illo doloribus, ullam aliquid quis placeat rerum hic voluptates et assumenda explicabo recusandae cupiditate repellendus numquam sed enim. Amet delectus cum nostrum sunt dolores distinctio similique commodi sequi suscipit ut. Exercitationem similique maxime, dicta obcaecati impedit eaque sed dignissimos rerum maiores numquam beatae quam libero tempore ipsam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non quibusdam aliquid! Officia dolorem dolorum nesciunt illo voluptates itaque, iure, ipsam explicabo blanditiis eum maiores eos aut. Deserunt fuga, minima fugiat voluptatum ullam esse repellendus architecto repudiandae. Ratione neque impedit eaque ipsum consequatur, enim in corporis dolore veritatis atque, voluptatem recusandae et? Id illo doloribus, ullam aliquid quis placeat rerum hic voluptates et assumenda explicabo recusandae cupiditate repellendus numquam sed enim. Amet delectus cum nostrum sunt dolores distinctio similique commodi sequi suscipit ut. Exercitationem similique maxime, dicta obcaecati impedit eaque sed dignissimos rerum maiores numquam beatae quam libero tempore ipsam?</p>
              </div>{/* cnt */}
              <div className="cnt">
                <p className="hd">Heading</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non quibusdam aliquid! Officia dolorem dolorum nesciunt illo voluptates itaque, iure, ipsam explicabo blanditiis eum maiores eos aut. Deserunt fuga, minima fugiat voluptatum ullam esse repellendus architecto repudiandae. Ratione neque impedit eaque ipsum consequatur, enim in corporis dolore veritatis atque, voluptatem recusandae et? Id illo doloribus, ullam aliquid quis placeat rerum hic voluptates et assumenda explicabo recusandae cupiditate repellendus numquam sed enim. Amet delectus cum nostrum sunt dolores distinctio similique commodi sequi suscipit ut. Exercitationem similique maxime, dicta obcaecati impedit eaque sed dignissimos rerum maiores numquam beatae quam libero tempore ipsam?</p>
              </div>{/* cnt */}

              <ul className="counterBox">
                <li>
                  <i className="icon">&#xa001;</i>
                  <b>Lorem</b>
                  <CounterNum target={1000} suffix="+" />
                </li>
                <li>
                  <i className="icon">&#xa001;</i>
                  <b>Lorem</b>
                  <CounterNum target={500} suffix="+" />
                </li>
                <li>
                  <i className="icon">&#xa001;</i>
                  <b>Lorem</b>
                  <CounterNum target={10000} suffix="+" />
                </li>
                <li>
                  <i className="icon">&#xa001;</i>
                  <b>Lorem</b>
                  <CounterNum target={20} suffix="+" />
                </li>
              </ul>

              <div className="outlineBox">
                <b>Lorem</b>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quasi et quos reiciendis earum ratione excepturi. Amet nam temporibus deleniti adipisci, fuga fugit eos placeat reprehenderit a corporis vel pariatur unde hic eveniet minus, necessitatibus, qui dolore sapiente in consequuntur sunt magnam ipsum? Eaque aut animi suscipit a, ducimus ab perferendis harum error sit illo iusto tempora perspiciatis quos at quas quis consequuntur dolorum impedit quibusdam corporis totam. Ducimus quam officiis commodi placeat voluptate ab cumque maxime tempore, adipisci sint quia, omnis animi non facilis enim ipsa deleniti ea doloremque nisi vero ullam repellat alias odit iste? Eveniet, totam.</span>
              </div>{/* outlineBox */}

              <div className="btns center">
                <a href={Global.numTel} target="_blank">Hire Us</a>
                <Link to="/contactus">Contact Us</Link>
              </div>{/* btns */}
            </div>{/* cols3 */}
          </div>{/* fw */}
        </div>{/* container */}
      </section>
  );
}