import { useState, useEffect } from "react";
import { TypeWriter } from "../typeWriter/TypeWriter";

import img1 from "../../assets/images/delete/home1.jpg";
import img2 from "../../assets/images/delete/home2.jpg";
import img3 from "../../assets/images/delete/home3.jpg";

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
    const media = window.matchMedia("(min-width: 0)");
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
      <p className="hd">International Projects & Government Collaborations</p>
      <ul className="lists projects">
        {Array.from({ length: 24 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div> // {/* cnt */}
  );

  return (
    <section className="section about" id="about">
      <div className="container">
        <hgroup>
          <h2 data-aos="fade-down">About <span>Me</span></h2>
          <p data-aos="fade-up">Briefly about me and my work</p>
        </hgroup>
        <div className="fw">
          <div className="cols1">
            <ul className="images">
              <li><img className="img1" src={img1} data-aos="flip-right" /></li>
              <li><img className="img1" src={img2} data-aos="flip-left" /></li>
              <li><img className="img2" src={img3} data-aos="flip-up" /></li>
            </ul>
          </div>{/* cols1 */}

          <div className="cols2">
            <div className="cnt">
              <p className="int">Hello!</p>
              <p className="int">I am Loremm Ipum,</p>
              <p className="post"><TypeWriter words={words1} /></p>
              <p>I am Demo, a Software Engineer specializing in UI & UX development. I am passionate about designing and developing user-friendly and visually appealing digital experiences. With over 7 years of professional experience, I focus on creating innovative and efficient solutions.</p>
              <p>Currently, I am based in Delhi, India, and working with a leading IT software company, where I contribute to the development of high-quality digital platforms.</p>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Work Experience</p>
              <p>I have over 7 years of commercial experience in UI & UX development, working with clients globally. I have successfully delivered more than 250 projects using modern technologies and best design practices.</p>
              <p>My expertise includes website design and redesign, software interfaces, e-commerce platforms, landing pages, responsive design, emailers, branding materials, and graphic design. I possess strong problem-solving abilities and planning skills, allowing me to handle complex projects efficiently, both independently and as part of a team.</p>
              <p>I collaborate closely with clients and business teams to understand requirements and deliver solutions that align with their goals and user expectations.</p>
            </div>{/* cnt */}
            {/* ✅ Desktop only */}
            {/* {!isMobile && TextBlock} */}
          </div>{/* cols2 */}
          <div className="cols3">
            {/* ✅ Mobile only */}
            {isMobile && TextBlock}
            <div className="cnt">
              <p className="hd">My Story</p>
              <p>I have a deep passion for design and development. I believe that talent plays a crucial role in building a successful career, and I have dedicated myself to becoming a skilled UI & UX developer. Showcasing creativity through meaningful digital products is essential, and I strive to deliver work that reflects both value and innovation.</p>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Work Debut</p>
              <p>I began my professional journey as a UI & UX Developer at BLS International Services Limited. At the organization, I have worked on designing and developing websites and software solutions for multiple countries and in various languages, including Azeri, Polish, French, Spanish, and Chinese.</p>
              <p>My work involves creating platforms for services such as visa processing, passport services, identity management, verification systems, and other global digital solutions.</p>
            </div>{/* cnt */}
            {/* <div className="cnt">
              <p className="hd">Freelancing Work</p>
              <p>In addition to my professional role, I actively work on freelance projects. I have designed and developed a wide range of websites across industries such as travel, ticket booking, hospitality, education, technical support, media, and e-commerce for clients worldwide.</p>
            </div> */}
            {/* cnt */}
            <div className="cnt">
              <p className="hd">My Mission</p>
              <p className="shd">My mission is to deliver innovative and high-quality web design and development solutions that create real value for clients.</p>
              <ul className="lists projects">
                <li>Building strong relationships with clients and teams</li>
                <li>Maintaining integrity and professionalism</li>
                <li>Optimizing costs without compromising quality</li>
                <li>Bringing innovation into every project</li>
              </ul>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Goal</p>
              <p>My goal is to contribute to making the web a better place by delivering high-quality, user-focused designs that help businesses grow and strengthen their digital presence.</p>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Vision</p>
              <p>My vision is to establish myself as a leading UI & UX Developer by consistently delivering exceptional and impactful design solutions.</p>
            </div>{/* cnt */}            
            <div className="cnt">
                <p className="hd">Frontend Development Skills</p>
                <div className="skillBar colors one">
                  <article data-aos="fade-left">
                    <b>HTML</b>
                    <CounterNum target={70} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <b>CSS</b>
                    <CounterNum target={75} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <b>JAVASCRIP</b>
                    <CounterNum target={65} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <b>JQUERY</b>
                    <CounterNum target={70} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <b>AMP (Accelerate Mobile Pages)</b>
                    <CounterNum target={70} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <b>Responsive</b>
                    <CounterNum target={90} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <b>Adobe Photoshop</b>
                    <CounterNum target={75} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <b>React JS & VITE</b>
                    <CounterNum target={65} suffix="%" />
                    <i></i>
                  </article>
                </div>
              </div>{/* cnt */}
              <div className="cnt">
                <p className="hd">Languages Known</p>
                <div className="skillBar colors two">
                  <article data-aos="fade-left">
                    <b>English</b>
                    <CounterNum target={65} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <b>Hindi</b>
                    <CounterNum target={75} suffix="%" />
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <b>Urdu</b>
                    <CounterNum target={60} suffix="%" />
                    <i></i>
                  </article>
                </div>
              </div>{/* cnt */}
              
              <div className="cnt">
                <p className="hd">My Family Background</p>
                <p>I come from a respected and sports-oriented family based in Ujhani, in the Budaun district of Uttar Pradesh, India. My grandfather, Late Mr. Qamaruddin, and my great-grandfather, Late Mr. Shamsuddin, were prominent landlords and well-known businessmen in the frozen goods sector across Uttar Pradesh.</p>
                <p>My grandfather was also a national-level cricketer, excelling as a wicketkeeper and batsman, and had a keen interest in chess. He was an intelligent and knowledgeable individual with a strong understanding of politics and social matters. He believed in unity, respected all religions, and was highly regarded in the community. He also served in the Indian Army before transitioning into business.</p>
                <p>Following his legacy, my father, Mr. Mohammad Arif, continued the family business and was also an excellent volleyball player. My uncle, Mr. Mohammad Aslam, was a national-level volleyball player and served as the captain of the Uttar Pradesh volleyball team. I have also represented at the state level in cricket. Today, I work as a software engineer.</p>
              </div>{/* cnt */}

              <div className="outlineBox dk" data-aos="fade-up">
                <b>Outside of Work</b>
                <span>Outside of my professional life, I have been actively involved in cricket at school, club, and state levels. I am also interested in political analysis, consulting, social work in rural areas, and exploring new experiences as an adventurer.</span>
              </div>{/* outlineBox */}

              <div className="btns center">
                <a href={Global.numTel} target="_blank" data-aos="fade-right">Hire Us</a>
                <Link to="/contactus" data-aos="fade-left">Contact Us</Link>
              </div>{/* btns */}
            </div>{/* cols3 */}
          </div>{/* fw */}
        </div>{/* container */}
      </section>
  );
}