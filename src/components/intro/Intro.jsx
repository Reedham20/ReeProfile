import "./intro.scss"
import { init } from 'ityped'
import { useEffect , useRef } from "react"

export default function Intro() {

    const refText = useRef()

    useEffect(() => {
        init(refText.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:60,
          cursorChar: "|",
          strings: ["Web Developer", "Graphic Designer", "Engineer"],
        });
      }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imagecontainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Reedham Pujara</h1>
                    <h3>Emerging <span ref={refText}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" class= "down" alt="" />
                </a>
            </div>
            
        </div>
    )
}
