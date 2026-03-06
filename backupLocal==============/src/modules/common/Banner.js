import { Link } from 'react-router-dom';
function Banner(props) {
  return (
    <>
      <section className="section banner">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6 col-xl-5">
              <h1 className="hd">{props.PageName}</h1>
              <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam.</p>
              <div className="btns">
                <a href="#" target="_blank">
                  <i className="icon">&#xa001;</i>
                  <span>0000000000</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>{props.PageName}</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Banner;
