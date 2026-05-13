import img1 from "../../assets/images/lifeStyle/others/1935.jpg";
import img2 from "../../assets/images/lifeStyle/others/1958.jpg";
import img3 from "../../assets/images/lifeStyle/others/grandFather1.jpg";
import img4 from "../../assets/images/lifeStyle/others/grandFather2.jpg";
import img5 from "../../assets/images/lifeStyle/others/2013.jpg";
import img6 from "../../assets/images/lifeStyle/shillong/1.jpg";
import img7 from "../../assets/images/lifeStyle/others/23feb2020.jpg";
import img8 from "../../assets/images/lifeStyle/others/2010.jpg";

const familyData = [
  {
    image: img1,
    title: "Mention of My Great-Grandfather in a 1935 Book",
  },
  {
    image: img2,
    title: "Lorem2",
  },
  {
    image: img3,
    title: "Lorem3",
  },
  {
    image: img4,
    title: "My Grandfather (Late Mr. Qamaruddin)",
  },
  {
    image: img5,
    title: "Lorem5",
  },
  {
    image: img6,
    title: "My Father",
  },
  {
    image: img7,
    title: "With Central Government Minister",
  },
  {
    image: img8,
    title: "Lorem8",
  }
];

export default function FamilyBack() {
  return (
    <section className="section family" id="family">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <hgroup>
              <h2 data-aos="fade-down">My <span>Family</span> Background</h2>
              <p data-aos="fade-up">Honoring the past while building the future</p>
            </hgroup>
          </div>{/* cols */}
          <div className="col-12">
            <div className="imgText">
              <div className="image colors">
                {familyData.map((item, index) => (
                  <article key={index}>
                    <figure>
                      <img data-src={item.image} />
                      <figcaption>{item.title}</figcaption>
                    </figure>
                  </article>
                ))}
              </div>{/* image */}

              <div className="cnt colors">
                <article data-aos="fade-left">
                  <figure>
                    <img data-src={familyData[0].image} />
                    <figcaption>{familyData[0].title}</figcaption>
                    <div className="content">
                      <p className="hd">Ancestral Legacy and Zamindari Heritage</p>
                      <p>I come from an old, reputed, and sports-oriented family based in the Budaun district of Uttar Pradesh, India. My great-great-grandfather, Late Mr. Naimuddin, and my great-grandfather, Late Mr. Shamsuddin, were both prominent zamindars. My great-grandfather, Late Mr. Shamsuddin, owned around 19 brick kilns. His legacy is also recorded in a 1935 publication published in Amritsar, Punjab. They were widely known for resolving community matters and promoting unity among people.</p>
                    </div>{/* content */}
                  </figure>
                </article>
                <article data-aos="fade-left">
                  <figure>
                    <img data-src={familyData[1].image} />
                    <figcaption>{familyData[1].title}</figcaption>
                    <div className="content">
                      <p className="hd">Leadership, Business, and Sports Legacy of My Grandfather</p>
                      <p>My grandfather, Late Mr. Qamaruddin, served in the Indian Army before resigning to manage and expand his family business. He carried forward this legacy with significant landholdings and business ventures, including brick kilns. He also served as the District President of the Brick Kiln Association. He served as Vice Chairman in Ujhani and became a well-recognized and respected personality in the region. He was also known for resolving community matters and helping people reach fair decisions. Alongside his professional achievements, he was a national-level cricketer who represented Uttar Pradesh as a wicketkeeper and batsman. He was also skilled in hockey and chess, reflecting his versatile personality. He was known as an intelligent and capable individual who strongly believed in social harmony, promoting unity among communities and respect for all religions.</p>
                    </div>{/* content */}
                  </figure>
                </article>
                <article data-aos="fade-left">
                  <figure>
                    <img data-src={familyData[2].image} />
                    <figcaption>{familyData[2].title}</figcaption>
                    <div className="content">
                      <p className="hd">Our Connection with Wrestling Legend – The Great Gama</p>
                      <p>Our family is related to the world-famous wrestler The Great Gama (Ghulam Mohammad Baksh Bhatt), who is known as "Rustam-e-Hind" and was my grandfather's cousin. He never lost a match in his wrestling career and is remembered as one of the greatest wrestlers in history.</p>
                    </div>{/* content */}
                  </figure>
                </article>
                <article data-aos="fade-left">
                  <figure>
                    <img data-src={familyData[3].image} />
                    <figcaption>{familyData[3].title}</figcaption>
                    <div className="content">
                      <p className="hd">A Family Deeply Rooted in Sports</p>
                      <p>Continuing this legacy, my father, Mr. Mohammad Arif, has been an excellent volleyball player, while my uncle was a national-level volleyball player and captain of the Uttar Pradesh team.</p>
                    </div>{/* content */}
                  </figure>
                </article>
                <article data-aos="fade-left">
                  <figure>
                    <img data-src={familyData[4].image} />
                    <figcaption>{familyData[4].title}</figcaption>
                    <div className="content">
                      <p className="hd">Musical Talent and Achievements in the Family</p>
                      <p>My aunt, Nusrat Waseem, is a Bollywood playback singer who has performed in films, albums, TV shows, live concerts, and international events. She appeared on Doordarshan’s Meri Awaaz Suno and was a runner-up in the 2016 Sony SAB Antakshari competition. She has also worked with singer <b>Altaf Raja</b>, contributed to the <b>film Tarazu</b>, and continues her active singing career. She has been honored with the <b>Adharshila Best Female Singer Award (presented by the President of India, Mr. Shankar Dayal Sharma)</b> and the Best Singer Award by Venus Records and Tapes Company. She currently runs a Mumbai-based music studio called “Musica”, where she trains aspiring singers.</p>
                      <p>Below are the links to Recorded Songs & Qawwalis:-</p>
                      <ul className="lists songs">
                        <li><a href="https://www.youtube.com/results?search_query=Khwaja+Ki+Hai+Ye+Angnayee+Altaf+Raja" target="_blank">Khwaja Ki Hai Ye Angnayee (With Altaf Raza)</a></li>
                        <li><a href="https://www.youtube.com/results?search_query=Jogan+Aayee+Altaf+Raja" target="_blank">Jogan Aayee (With Altaf Raza)</a></li>
                        <li><a href="https://www.youtube.com/results?search_query=Chali+Chali+Woh+Sharaab+Altaf+Raja" target="_blank">Chali Chali Woh Sharaab (With Altaf Raza)</a></li>
                        <li><a href="https://www.youtube.com/results?search_query=Ya+Habibe+Khuda+Altaf+Raja" target="_blank">Ya Habibe Khuda (With Altaf Raza)</a></li>
                        <li><a href="https://www.youtube.com/results?search_query=Shahe+Sanjar+Ke+Dar+Ki+Altaf+Raja" target="_blank">Shahe Sanjar Ke Dar Ki (With Altaf Raza)</a></li>
                        <li><a href="https://www.youtube.com/results?search_query=Nazar+Na+Hate+Mere+Yaar+Se+Tarazu" target="_blank">Nazar Na Hate Mere Yaar Se (Tarazu movie)</a></li>
                      </ul>
                    </div>{/* content */}
                  </figure>
                </article>
                <article data-aos="fade-left">
                  <figure>
                    <img data-src={familyData[5].image} />
                    <figcaption>{familyData[5].title}</figcaption>
                    <div className="content">
                      <p className="hd">My Cricket Journey and Passion for the Game</p>
                      <p>I am known as a stylish cricketer with natural sporting ability since childhood and active involvement in cricket as an all-rounder. I am recognized for my strong batting technique, preference for long innings, solid straight-bat play, consistent timing, good footwork, body control, classic cricketing shots, and disciplined batting style. As a pace bowler, I once broke a batsman’s helmet with a sharp bouncer and also broke the stumps many times with fast deliveries. In fielding, I was known as a sharp and agile fielder.</p>
                      <p>I participated in state-level open tournaments across multiple states in India, competing with and against players from Uttar Pradesh, Delhi, Haryana, Uttarakhand, Madhya Pradesh, Bihar, Himachal Pradesh, Maharashtra, West Bengal, and Tamil Nadu. I also shared the field with players associated with state-level tournaments, the Ranji Trophy, and the IPL. I am deeply passionate about cricket and played at school, club, and corporate levels.</p>
                    </div>{/* content */}
                  </figure>
                </article>
                <article data-aos="fade-left">
                  <figure>
                    <img data-src={familyData[6].image} />
                    <figcaption>{familyData[6].title}</figcaption>
                    <div className="content">
                      <p className="hd">Interest in Politics and Helping People</p>
                      <p>I have a strong interest in politics and actively participate in election activities, including canvassing, campaigning, and connecting with people. I have a keen interest in understanding people's challenges and contributing to meaningful solutions. People often approach me for guidance, and I support them by offering practical advice and helping them through my network and connections. I believe in helping people selflessly and without any bias, treating everyone with fairness and equal respect. I also enjoy exploring new experiences and embracing life with an adventurous spirit.</p>
                    </div>{/* content */}
                  </figure>
                </article>
                <article data-aos="fade-left">
                  <figure>
                    <img data-src={familyData[7].image} />
                    <figcaption>{familyData[7].title}</figcaption>
                    <div className="content">
                      <p className="hd">Carrying Forward the Family Legacy</p>
                      <p>Although I may never equal the remarkable achievements and legacy of my elders, I sincerely strive to follow their path, uphold their values, and continue the traditions they built with honor and respect.</p>
                      <p>Today, I proudly carry forward this legacy through my journey as a software engineer while continuing to support and help people in need.</p>
                    </div>{/* content */}
                  </figure>
                </article>
              </div>{/* cnt */}
            </div>{/* imgText */}
          </div>{/* cols */}
        </div>{/* row */}
      </div>{/* container */}
    </section>
  );
}