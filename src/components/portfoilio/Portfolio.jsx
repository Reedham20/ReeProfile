import { useState, useEffect } from "react";
import "./portfolio.scss";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayDesc, setDisplayDesc] = useState("block");
  const [pDisplay, setpDisplay] = useState("none");
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "ReeChess",
      desc:
        "An online, multiplayer chess platform built with the help of Chess.js and react-d-n-d.",
      img:
        "assets/chess.jpg",
      note: "github repo",
      link: "https://github.com/Reedham20/ReeChess"
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Q.W.A.C.K.",
      desc:
        "Q.W.A.C.K. stands for Quizes worksheets and competition kit. which like its name is a complete kit for all purposes",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        note: "Coming Soon",
      link: ""
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "ReeDesign",
      desc:
        "An web-development company focused to bring most affordable web-solutions in the market ",
      img:
        "./assets/reeDesign.jpg",
        note: "Contact now",
      link: "https://api.whatsapp.com/send?phone=917016664182"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  const showDesc = () => {
    if(window.innerWidth <= 768) {
    if(displayDesc === "block") {
      setDisplayDesc("none")
      setpDisplay("block")
    } else {
      setDisplayDesc("block")
      setpDisplay("none")
    }
  }
  }


  useEffect(() => {
    const timer = setInterval(() => {
      if(window.innerWidth >= 768) {
        setCurrentSlide(currentSlide >= 2 ? 0 : currentSlide+1)
      }
    }, 5000);
    return () => clearTimeout(timer);
  });
  
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="heading">Showcase</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left" style={{backgroundImage: `url(${d.icon})`}}>
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.link} target= "_blank" rel="noreferrer">{d.note}</a></span>
                </div>
              </div>
              <div className="right" onClick={() => showDesc()}>
                <p style={{display : `${pDisplay}`}}>{d.desc}</p>
                <img
                  src={d.img}
                  alt=""
                  style={{display : `${displayDesc}`}}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}