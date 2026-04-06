import { TypeWriter } from "../typeWriter/TypeWriter";

import img1 from "../../assets/images/lifeStyle/forest/2.jpg";
import img2 from "../../assets/images/lifeStyle/forest/3.jpg";
import img3 from "../../assets/images/lifeStyle/forest/52.jpg";
import img4 from "../../assets/images/lifeStyle/forest/2.jpg";
import { Global } from "../common/Global";
import { Link } from "react-router-dom";

const words1 = [
  { text: "(India)", className: "one" },
  { text: "(New Delhi)", className: "two" }
];

const ListContent = () => {
  return (
    <>
      <li>01 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>02 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>03 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>04 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>05 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>06 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>07 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>08 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>09 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>10 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>11 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>12 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>13 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>14 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>15 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>16 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>17 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>18 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>19 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>20 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>21 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>22 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>23 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>24 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>25 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>26 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>27 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>28 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>29 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>30 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>31 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>32 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>33 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>34 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>35 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </>
  );
};

export default function AboutHome() {
  return (
    <>
      <section className="section about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minus unde</p>
              </hgroup>
            </div>
            <div className="col-md-6 mobSpace">
              <div className="row">
                <div className="col-12">
                  <img className="one1" src={img1} alt="" />
                </div>
                <div className="col-6">
                  <img className="img2" src={img2} alt="" />
                </div>
                <div className="col-6">
                  <img className="one2" src={img3} alt="" />
                </div>
                <div className="col-12">
                  <img className="one1" src={img4} alt="" />
                </div>
              </div>
            </div>{/* cols */}
            <div className="col-md-6">
              <div className="fw">
                <p className="int">Hello!</p>
                <p className="int">P Lm Loremm Ipum,</p>
                <p className="post"><TypeWriter words={words1} /></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia necessitatibus esse! Asperiores dolorum veritatis quam, praesentium incidunt excepturi neque perferendis totam, natus libero corporis sed aut temporibus, harum explicabo unde minus doloribus. Maxime totam distinctio aspernatur recusandae dolor fugit excepturi at, esse tenetur magni eos consequuntur ad iure optio.</p>
                <div className="cnt">
                  <p className="hd">Heading</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  <ul className="lists one">
                    <ListContent />
                  </ul>
                </div>
              </div>
            </div>{/* cols */}
            <div className="col-12">
              <ul className="lists two">
                <ListContent />
              </ul>
            </div>{/* cols */}
            <div className="col-12">
              <div className="cnt">
                <p className="hd">Heading</p>
                <div className="skillBar colors one">
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                </div>
              </div>
            </div>{/* cols */}
            <div className="col-12">
              <div className="cnt">
                <p className="hd">Heading</p>
                <div className="skillBar colors two">
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                  <article>
                    <b>Lorem</b>
                    <i>00</i>
                    <span></span>
                  </article>
                </div>
              </div>
            </div>{/* cols */}
            <div className="col-12">
              <div className="cnt">
                <p className="hd">Heading</p>
                <p>Lorem ipsum dolor sit <b>amet consectetur adipisicing</b> elit. Recusandae non quibusdam aliquid! Officia dolorem dolorum nesciunt illo voluptates itaque, iure, ipsam explicabo blanditiis eum maiores eos aut. Deserunt fuga, minima fugiat voluptatum ullam esse repellendus architecto repudiandae. Ratione neque impedit eaque ipsum consequatur, enim in corporis dolore veritatis atque, voluptatem recusandae et? Id illo doloribus, ullam aliquid quis placeat rerum hic voluptates et assumenda explicabo recusandae cupiditate repellendus numquam sed enim. Amet delectus cum nostrum sunt dolores distinctio similique commodi sequi suscipit ut. Exercitationem similique maxime, dicta obcaecati impedit eaque sed dignissimos rerum maiores numquam beatae quam libero tempore ipsam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non quibusdam aliquid! Officia dolorem dolorum nesciunt illo voluptates itaque, iure, ipsam explicabo blanditiis eum maiores eos aut. Deserunt fuga, minima fugiat voluptatum ullam esse repellendus architecto repudiandae. Ratione neque impedit eaque ipsum consequatur, enim in corporis dolore veritatis atque, voluptatem recusandae et? Id illo doloribus, ullam aliquid quis placeat rerum hic voluptates et assumenda explicabo recusandae cupiditate repellendus numquam sed enim. Amet delectus cum nostrum sunt dolores distinctio similique commodi sequi suscipit ut. Exercitationem similique maxime, dicta obcaecati impedit eaque sed dignissimos rerum maiores numquam beatae quam libero tempore ipsam?</p>
              </div>
            </div>{/* cols */}
            <div className="col-12">
              <div className="cnt">
                <p className="hd">Heading</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non quibusdam aliquid! Officia dolorem dolorum nesciunt illo voluptates itaque, iure, ipsam explicabo blanditiis eum maiores eos aut. Deserunt fuga, minima fugiat voluptatum ullam esse repellendus architecto repudiandae. Ratione neque impedit eaque ipsum consequatur, enim in corporis dolore veritatis atque, voluptatem recusandae et? Id illo doloribus, ullam aliquid quis placeat rerum hic voluptates et assumenda explicabo recusandae cupiditate repellendus numquam sed enim. Amet delectus cum nostrum sunt dolores distinctio similique commodi sequi suscipit ut. Exercitationem similique maxime, dicta obcaecati impedit eaque sed dignissimos rerum maiores numquam beatae quam libero tempore ipsam?</p>
              </div>
            </div>{/* cols */}
            <div className="col-12">
              <ul className="counterBox">
                <li>
                  <i className="icon">&#xa001;</i>
                  <b>Lorem</b>
                  <span>0000</span>
                </li>
                <li>
                  <i className="icon">&#xa001;</i>
                  <b>Lorem</b>
                  <span>0000</span>
                </li>
                <li>
                  <i className="icon">&#xa001;</i>
                  <b>Lorem</b>
                  <span>0000</span>
                </li>
                <li>
                  <i className="icon">&#xa001;</i>
                  <b>Lorem</b>
                  <span>0000</span>
                </li>
              </ul>
            </div>{/* cols */}
            <div className="col-12">
              <div className="outlineBox">
                <b>Lorem</b>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quasi et quos reiciendis earum ratione excepturi. Amet nam temporibus deleniti adipisci, fuga fugit eos placeat reprehenderit a corporis vel pariatur unde hic eveniet minus, necessitatibus, qui dolore sapiente in consequuntur sunt magnam ipsum? Eaque aut animi suscipit a, ducimus ab perferendis harum error sit illo iusto tempora perspiciatis quos at quas quis consequuntur dolorum impedit quibusdam corporis totam. Ducimus quam officiis commodi placeat voluptate ab cumque maxime tempore, adipisci sint quia, omnis animi non facilis enim ipsa deleniti ea doloremque nisi vero ullam repellat alias odit iste? Eveniet, totam.</span>
              </div>
            </div>{/* cols */}
            <div className="col-12">
              <div className="btns center">
                <a href={Global.numTel} target="_blank">Hire Us</a>
                <Link href="/contactus">Contact Us</Link>
              </div>
            </div>{/* cols */}
          </div>
        </div>{/* container */}
      </section>
    </>
  );
}