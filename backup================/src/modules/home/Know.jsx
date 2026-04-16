import { useState } from "react";

const WcuData = [
  {
    year: 2014,
    hd1: "Heading1 ipsum sit ameet lorem ipsum",
    hd2: "Lorem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  },
  {
    year: 2014,
    hd1: "Heading2",
    hd2: "Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam."
  },
  {
    year: 2015,
    hd2: "Dolor",
    hd1: "Heading3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  },
  {
    year: 2015,
    hd2: "Sit",
    hd1: "Heading4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  },
  {
    year: 2015,
    hd2: "Ameet",
    hd1: "Heading5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquidsss."
  },
  {
    year: 2020,
    hd1: "Heading6",
    hd2: "Lorem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  },
  {
    year: 2021,
    hd2: "Ipsums",
    hd1: "Heading7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  },
  {
    year: 2014,
    hd1: "Heading8",
    hd2: "Dolors",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam."
  },
  {
    year: 2014,
    hd1: "Heading9",
    hd2: "Sits",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  },
  {
    year: 2025,
    hd1: "Heading10",
    hd2: "Ameets",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  },
  {
    year: 2026,
    hd1: "Heading11",
    hd2: "Dolorss",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  },
  {
    year: 2020,
    hd1: "Heading12",
    hd2: "Lormss",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit amet consectetur adipisicing elit molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore aliquid ullam lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."
  }
];

export default function Know() {
  const [activeIndex, setActiveIndex] = useState(null);
  const currentYear = new Date().getFullYear();
  // limit to 20 words
  const limitText = (text, limit = 20) => {
    const words = text.split(" ");
    return {
      short: words.slice(0, limit).join(" "),
      isLong: words.length > limit
    };
  };
  // calculate experience
  const getExperience = (year) => {
    const exp = currentYear - year;
    return exp > 0 ? exp : 0;
  };
  // format label (Year / Years)
  const formatExperience = (exp) => {
    if (exp <= 1) {
      return `${exp} + Year`;
    } else {
      return `${exp} + Years`;
    }
  };
  return (
    <section className="section skills back">
      <div className="container">
        <hgroup>
          <h2>Technical <span>Skills</span></h2>
          <p>Lorem ipsum dolor sit ameet</p>
        </hgroup>
        <div className="row colors">
          <div className="col-12">
            <div className="outlineBox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident saepe
              laudantium deleniti alias cum quisquam velit perferendis sed facere rem facilis voluptas atque,
              magni cumque. Ratione, aliquam! Natus, iusto voluptatem architecto eaque, repellendus libero et
              perspiciatis quasi facilis ab commodi dolores hic sint rerum enim deserunt dicta similique delectus
              deleniti!</div>{/* outlineBox */}
          </div>{/* cols */}
          {WcuData.map((item, index) => {
            const { short, isLong } = limitText(item.text);
            const isActive = activeIndex === index;
            const exp = getExperience(item.year);
            return (
              <div className="col-xs-12 col-lg-6" key={index}>
                <article className={`skill ${isActive ? "active" : ""}`}>                  
                  <div className="back">
                    <span>{formatExperience(exp)} Exp</span>
                  </div>
                  <div className="cnts">
                    <p className="head">
                      {item.hd1 && <i>{item.hd1}</i>} {item.hd2 && <span>{item.hd2}</span>}
                    </p>
                    <p className="text">
                      {isActive || !isLong ? item.text : short}
                      {!isActive && isLong && "... "}
                      {isLong && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveIndex(isActive ? null : index);
                          }}
                        >
                          {isActive ? " View Less" : " View More"}
                        </button>
                      )}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}