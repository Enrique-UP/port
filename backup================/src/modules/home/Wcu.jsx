import img1 from "../../assets/images/delete/home1.jpg";
import { Global } from "../common/Global";

const WcuData = [
    {hd: "Heading1", text: "1 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading2", text: "2 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading3", text: "3 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading4", text: "4 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading5", text: "5 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading6", text: "6 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading7", text: "7 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading8", text: "8 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading9", text: "9 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading10", text: "10 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading11", text: "11 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading12", text: "12 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading13", text: "13 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."},
    {hd: "Heading14", text: "14 Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet."}
];

const WcuTag = (props) => {
  return (
    <>
        <aside>
            <b>{props.hd}</b>
            <p>{props.text}</p>
        </aside>
    </>
  )
}

export default function Wcu(){
    return(
        <>
            <section className="sectionT wcu" id="wcu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hgroup>
                                <h4>Why <span>Choose</span> Us?</h4>
                                <p>Your Advantages</p>
                            </hgroup>
                        </div>{/* cols */}
                        <div className="col-lg-4 col-xxl-3">
                            <figure>
                                <img src={img1} />
                                <figcaption>
                                    <p><a href={Global.numTel} target="_blank"><i className="icon">&#xa001;</i>{Global.num}</a></p>
                                    <p><a href={`mailto:${Global.email}`} target="_blank"><i className="icon">&#xa004;</i>{Global.email}</a></p>
                                    <p>
                                        <a href={Global.fb} target="_blank"><i className="icon">&#xa019;</i></a>
                                        <a href={Global.tw} target="_blank"><i className="icon">&#xa020;</i></a>
                                        <a href={Global.lin} target="_blank"><i className="icon">&#xa021;</i></a>
                                        <a href={Global.skp} target="_blank"><i className="icon">&#xa026;</i></a>
                                        <a href={Global.ins} target="_blank"><i className="icon">&#xa023;</i></a>
                                        <a href={Global.pnt} target="_blank"><i className="icon">&#xa024;</i></a>
                                    </p>
                                </figcaption>
                            </figure>
                        </div>{/* cols */}
                        <div className="col-lg-8 col-xxl-9">
                            <div className="row">
                                <div className="col-12">
                                    <div className="outlineBox">
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit vero neque quasi et quos reiciendis earum ratione excepturi ameet nam temporibus deleniti adipisci fuga fugit eos placeat reprehenderit a corporis vel pariatur unde hic eveniet minus necessitatibus qui dolore sapiente in consequuntur sunt magnam ipsum.</span>
                                    </div>{/* outlineBox */}
                                </div>{/* cols */}
                                <div className="col-12">
                                    <div className="wcuArea">
                                        {
                                            // WcuData.slice(0, 4).map((val, ind) => {}
                                            WcuData.map((val, ind) => {
                                                return <WcuTag key={ind} hd={val.hd} text={val.text} />
                                            })
                                        }
                                    </div>{/* wcuArea */}
                                </div>{/* cols */}
                            </div>{/* row */}
                        </div>{/* cols */}
                    </div>{/* row */}
                </div>{/* container */}
            </section>
        </>
    )
}