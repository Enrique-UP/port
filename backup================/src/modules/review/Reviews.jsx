import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import { Global } from "../common/Global";

import ReviewData from "./ReviewData";

const ReviewTag =(props) => {
  return ( <>
    <div className="reviewsArea">
      <div className="iconArea">
        <i className="icon">&#xa043;</i>
      </div>
      <div className="outlineBox">
        <ul>
          <li>
            <b>{props.name}</b>
            <i>{props.place}</i>
          </li>
          <li><i className="icon" dangerouslySetInnerHTML={{ __html: props.icons }}></i></li>
        </ul>
        <span>{props.text}</span>
      </div>{/* outlineBox */}
    </div>{/* reviewsArea */}
  </>)
}

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Reviews</title>
      </Helmet>
      <Banner
        pageName="Reviews" 
        pageText="Lorem ipsum dolor sit ameet."
      />
      <section className="section">
        <div className="container">
          <hgroup>
            <h2>Customer's <span>Reviews</span></h2>
            <p>Lorem ipsum dolor sit ameet</p>
          </hgroup>
          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="fw">
                <div className="box1">
                  <p className="texts">Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur officiis eaque quod earum et ex quasi doloribus.</p>
                </div>{/* fw */}
                <div className="reviews">
                  {
                    ReviewData.map((val, ind) => {
                      return <ReviewTag key={ind} name={val.name} place={val.place} text={val.text} icons={val.icons} />
                    })
                  }
                </div>{/* reviews */}
                <div className="btns center">
                  <a href={Global.numTel} target="_blank">Hire Us</a>
                </div>
              </div>
            </div>{/* area-2 */}

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
