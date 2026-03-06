import {Helmet} from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
          <title>Home</title>
      </Helmet>
      <section className="section banner">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6 col-xl-5">
              <h1 className="hd">Lorem ipsum dolor sit amet consectetur adipisicing</h1>
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
      <section className="section lifeStyle">
        <div className="container">
          <div className="row"> 
            <div className="col-12">
              <hgroup> 
                <h2>Lorem <span>ipsum</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error</p>
              </hgroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
