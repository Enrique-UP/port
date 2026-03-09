import { Link } from 'react-router-dom';
function Banner(props) {
  return (
    <>
      <section className="section banner">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6 col-xl-5">
              <h1 className="hd">{props.pageName}</h1>
              <p className="txt">{props.pageText}</p>
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
      {props.showBreadcrumbs && (
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
