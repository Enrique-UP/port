const ExpData = [
  {
    color: "var(--cb1)",
    ani: "fade-left",
    
    companyName: "Akounto Services Private Limited",
    duration: "23-May-2022 to Present",
    about: "Akounto Services Private Limited offers business help especially for someone with no experience in business accounting before. It helps for solving the majority of the accounting problems.",
    post: "Sr. UI/UX Developer",    
    role: [
      "Communicate with the IT Head regarding project approach and daily status updates.",
      "Develop user interfaces using HTML5, CSS3, SASS, Bootstrap, Responsive Web Design, and jQuery.",
      "Maintain and enhance existing websites.",
      "Implement fixes and updates based on changing requirements."
    ],
    
  },
];

function ExpTag(props) {
  return (
    <li style={{ "--u": props.color }}>
      <i className="circles"></i>

      <article className="headText" data-aos={props.ani}>
        <p className="duration"><i className="icon">&#xa012;</i>{props.duration}</p>
        <p className="head"><i className="icon">&#xa043;</i>{props.post}</p>
        <p className="subHead1">Roles &amp; Responsibilities</p>

        <div className="text mb">
          {Array.isArray(props.role) ? (
            <ul>
              {props.role.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{props.role}</p>
          )}
        </div>

        <p className="subHead"><i className="icon">&#xa071;</i>{props.companyName}</p>
        <p className="subHead1">About the Company</p>
        <p className="text">{props.about}</p>
      </article>
    </li>
  );
}

export default function Experience() {
  return (
    <section className="section experience back" id="exp">
      <hgroup>
        <h2 data-aos="fade-down">
          Work <span>Experience</span>
        </h2>
        <p data-aos="fade-up">
          A summary of my professional journey and key contributions.
        </p>
      </hgroup>

      <div className="container">
        <ul className="exp">
          {ExpData.map((val, ind) => (
            <ExpTag key={ind} {...val} />
          ))}
        </ul>
      </div>
    </section>
  );
}