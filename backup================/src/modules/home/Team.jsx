import img1 from "../../assets/images/team/t1.jpg";
import img2 from "../../assets/images/team/t2.jpg";
import img3 from "../../assets/images/team/t3.jpg";
import img4 from "../../assets/images/team/t4.jpg";

const TeamData = [
  { fName: "Lorem1", lName: "Ipsum1", post: "Lorem ipsum dolor1", img: img1, ani:"fade-left" },
  { fName: "Lorem2", lName: "Ipsum2", post: "Lorem ipsum dolor2", img: img2, ani:"fade-right" },
  { fName: "Lorem3", lName: "Ipsum3", post: "Lorem ipsum dolor3", img: img3, ani:"fade-left" },
  { fName: "Lorem4", lName: "Ipsum4", post: "Lorem ipsum dolor4", img: img4, ani:"fade-right" },
];
function TeamTag(props){
    return(
        <div className="teamArea" data-aos={props.ani}>
            <img src={props.img} />
            <i className="leftArrow"></i>
            <i className="rightArrow"></i>
            <i className="bottomArrow"></i>
            <span className="name">
                <b>{props.fName}</b>
                <em>{props.lName}</em>
            </span>
            <span className="post">{props.post}</span>
        </div>// teamArea
    )
}
export default function Team() {
    return (
        <>
            <section className="section team" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hgroup>
                                <h3 data-aos="fade-down">Fantastic <span>Team</span></h3>
                                <p data-aos="fade-up">Hark worker & talented</p>
                            </hgroup>
                        </div>{/* cols */}
                        <div className="col-12">
                            <div className="part">
                                {TeamData.map((val, ind) => (
                                    <TeamTag key={ind} {...val} />
                                ))}
                            </div>{/* part */}
                        </div>{/* cols */}
                    </div>{/* row */}
                </div>{/* container */}
            </section>
        </>
    );
}
