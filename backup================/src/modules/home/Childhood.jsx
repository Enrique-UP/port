import { useState } from "react";

import img1 from "../../assets/images/childhood/1.jpg";
import img2 from "../../assets/images/childhood/2.jpg";
import img3 from "../../assets/images/childhood/3.jpg";
import img4 from "../../assets/images/childhood/4.jpg";

export default function Childhood() {
  const [active, setActive] = useState(false);

  function readMore(e) {
    e.preventDefault();
    setActive(!active);
  }

  return (
    <>
      <section className="section childhood">
        <div className="childhoodText">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="heading">
                  <h2 className="hd1">Welcome to lorem</h2>
                  <p className="hd2">Lorem ipsum dolor sit amet ipsum!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={`content ${active ? "active" : ""}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit optio dolorem rerum provident similique praesentium labore iure debitis vero asperiores corporis quidem dolorem suscipit laborum perspiciatis harum eum enim quo iusto.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit repellat soluta vero quas ipsam illum temporibus ducimus exercitationem doloremque asperiores modi eos minima voluptas fugiat provident cum aliquam aut suscipit accusantium officia velit perspiciatis totam porro dolorem nobis aut tempore at fugit nam eos quis quae quia ex dolore ad omnis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit repellat soluta vero quas ipsam illum temporibus ducimus exercitationem doloremque asperiores modi eos minima voluptas fugiat provident cum aliquam aut suscipit accusantium officia velit perspiciatis totam porro dolorem nobis aut tempore at fugit nam eos quis quae quia ex dolore ad omnis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit repellat soluta vero quas ipsam illum temporibus ducimus exercitationem doloremque asperiores modi eos minima voluptas fugiat provident cum aliquam aut suscipit accusantium officia velit perspiciatis totam porro dolorem nobis aut tempore at fugit nam eos quis quae quia ex dolore ad omnis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit repellat soluta vero quas ipsam illum temporibus ducimus exercitationem doloremque asperiores modi eos minima voluptas fugiat provident cum aliquam aut suscipit accusantium officia velit perspiciatis totam porro dolorem nobis aut tempore at fugit nam eos quis quae quia ex dolore ad omnis.</p>
                  <p><span onClick={readMore}>{active ? "Read Less" : "Read More"}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="childhoodImg">
        <div className="container">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
        </div>
      </section>
    </>
  );
}
