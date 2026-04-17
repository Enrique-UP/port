import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Global } from "./Global";
import { HashLink } from "react-router-hash-link";

const PostData = [
  {link:"#", date:"01 Jan", year:"0001", txt:"1 Lorem ipsum dolor sit amit lorem ipsum dolor sit amit"},
  {link:"#", date:"02 Jan", year:"0002", txt:"2 Lorem ipsum dolor sit amit lorem ipsum dolor sit amit"},
  {link:"#", date:"03 Jan", year:"0003", txt:"3 Lorem ipsum dolor sit amit lorem ipsum dolor sit amit"},
  {link:"#", date:"04 Jan", year:"0004", txt:"4 Lorem ipsum dolor sit amit lorem ipsum dolor sit amit"}
];
function PostTag(props){
  return(
    <>
      <li>
        <a href={props.link} target="_blank">
          <span className="date">
            <b>{props.date}</b>
            <i>{props.year}</i>
          </span>
          <span className="abt">{props.txt}</span>
        </a>
      </li>
    </>
  )
}

const ContactData = [
  {link: Global.numTel, icon: "&#xa001;", cnt: Global.num},
  {link: Global.whatsappLink, icon: "&#xa025;", cnt: Global.num},
  {link: `mailto:${Global.email}`, icon: "&#xa004;", cnt: Global.email},
  {icon: "&#xa007;", cnt: Global.address}
];
function ContactTag(props){
  return(
    <>
      <li>
        <a href={props.link} target="_blank">
          <i className="icon" dangerouslySetInnerHTML={{ __html: props.icon }}></i>
          <span className="abt">{props.cnt}</span>
        </a>
      </li>
    </>
  )
}

export default function Footer() {
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 logo">
              <div className="fw">
                <Link to="/"><img src={logo} /></Link>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-md-12 col-xxl-3">
              <div className="fw">
                  <p className="hd">About Us</p>
                  <p className="text">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit facilis dolores voluptatum nostrum ea ex reprehenderit corrupti cupiditate corporis hic inventore non optio porro deserunt molestiae inventore ab veritatis nemo ad dolorem iure rerum adipisci iste reprehenderit.</span>
                    <span><strong>Outside of work,</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit quae neque consequatur temporibus veniam maiores laudantium obcaecati labore.</span>
                  </p>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-lg-4 col-xxl-3">
              <div className="fw">
                  <p className="hd">Main Links</p>
                  <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/lifestyle">Gallery</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/poetry">Poetry</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>                    
                    <li><Link to="/inner">Inner Page</Link></li>
                    <li><Link to="/thankyou">Thank You</Link></li>
                    <li><HashLink to="/#tp">Top Projects</HashLink></li>
                    <li><HashLink to="/#bp">Branding Projects</HashLink></li>
                  </ul>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-sm-6 col-lg-4 col-xxl-3">
              <div className="fw">
                  <p className="hd">Latest Posts</p>
                  <ul className="posts">
                    {
                      PostData.map((val, ind) => {
                        return <PostTag key={ind} {...val} />
                      })
                    }
                  </ul>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-sm-6 col-lg-4 col-xxl-3">
              <div className="fw">
                  <p className="hd">Contact Us</p>
                  <ul className="posts">
                    {
                      ContactData.map((val, ind) => {
                        return <ContactTag key={ind} {...val} />
                      })
                    }
                  </ul>
                  <div className="follow">
                    <a href={Global.fb} target="_blank"><i className="icon">&#xa019;</i></a>
                    <a href={Global.tw} target="_blank"><i className="icon">&#xa020;</i></a>
                    <a href={Global.lin} target="_blank"><i className="icon">&#xa021;</i></a>
                    <a href={Global.ins} target="_blank"><i className="icon">&#xa023;</i></a>
                    <a href={Global.pnt} target="_blank"><i className="icon">&#xa024;</i></a>
                    <a href={Global.skp} target="_blank"><i className="icon">&#xa026;</i></a>
                  </div>{/* follow */}
              </div>{/* fw */}
            </div>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </footer>
      <section className="copy">
        <div className="container">
          <div className="fw">Copyright &copy; <span>{new Date().getFullYear()}</span> with all rights reserved.</div>
        </div>{/* container */}
      </section>
      <a className="fixNum" href={Global.numTel} target="_blank"><i className="icon">&#xa001;</i>Call Us {Global.num}</a>
      <a className="icon callRight" href="tel:<?php echo $numberTel; ?>" target="_blank">&#xa041;</a>
      <i className="icon scrollTop">&#xa022;</i>
    </>
  );
}
