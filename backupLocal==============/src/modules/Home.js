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
              <hgroup> 
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis totam</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam.</p>
                <div className="btns">
                  <a href="#" target="_blank">
                    <i className="icon">&#xa041;</i>
                    <span>0000000000</span>
                  </a>
                </div>
              </hgroup>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
