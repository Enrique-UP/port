import { Link } from 'react-router-dom';
import defaultBannerImg from "../../images/banners/inner.jpg";

function Banner(props) {
  return (
    <>
      <section className="section banner">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6">
              <h1 className="hd">{props.pageName}</h1>
              <p className="txt">{props.pageText}</p>

              <div className="btns">
                {
                  props.pageName === "Thank You!" ? (
                  // props.pageName !== "" ? (
                    <Link to="/">
                      <i className="icon">&#xa074;</i>
                      <span>Go to Home</span>
                    </Link>
                  ) : (
                    <a href="#" target="_blank" rel="noreferrer">
                      <i className="icon">&#xa001;</i>
                      <span>0000000000</span>
                    </a>
                  )
                }
              </div>

            </div>

            <div className="col-lg-6">
              <img src={props.otherImg || defaultBannerImg} className="banner img" />
            </div>
          </div>
        </div>
      </section>

      <ul className="colorsLine">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {props.showBreadcrumbs !== false && (
        <section className="breadcrumbs">
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>{props.pageName}</li>
            </ul>
          </div>
        </section>
      )}

      
    </>
  );
}

export default Banner;