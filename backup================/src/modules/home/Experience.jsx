const ExpData = [
    {
        color:"var(--cb1)",
        ani:"fade-left",
        duration:"0000 - 0000",
        role:"1.1 Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam.",
        about:"1.2 Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam."
    },
    {
        color:"var(--cb2)",
        ani:"fade-right",
        duration:"0000 - 0000",
        role:"2.1 Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam.",
        about:"2.2 Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam."
    },
    {
        color:"var(--cb3)",
        ani:"fade-left",
        duration:"0000 - 0000",
        role:"3.1 Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam.",
        about:"3.2 Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam."
    },
    {
        color:"var(--cb4)",
        ani:"fade-right",
        duration:"0000 - 0000",
        role:"4.1 Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam.",
        about:"4.2 Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam."
    },
];
function ExpTag(props){
    return(
        <li style={{ "--u": props.color }}>
            <i className="circles"></i>
            <article className="headText" data-aos={props.ani}>
                <p className="duration"><i className="icon">&#xa012;</i>{props.duration}</p>
                <p className="head"><i className="icon">&#xa043;</i>Profile</p>
                <p className="subHead1">Roles &amp; Responsibilities</p>
                <p className="text mb">{props.role}</p>
                <p className="subHead"><i className="icon">&#xa071;</i>C Name</p>
                <p className="subHead1">About the Cname</p>
                <p className="text">{props.about}</p>
            </article>
        </li>
    )
}

export default function Experience() {
  return (
    <>
      <section className="section experience back" id="exp">
        <hgroup>
          <h2 data-aos="fade-down">Work <span>Experience</span></h2>
          <p data-aos="fade-up">Lorem ipsum dolor sit ameet</p>
        </hgroup>
        <div className="container">
            <ul className="exp">
                {
                    ExpData.map((val, ind) => (
                        <ExpTag key={ind} {...val} />
                    ))
                }
            </ul>
        </div>
    </section>
    </>
  );
}
