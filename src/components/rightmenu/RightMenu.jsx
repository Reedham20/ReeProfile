import React from 'react'
import "./rightmenu.scss"
import useWindowDimensions from '../../hooks/useWindowDimensions'

const RightMenu = ({x,y,showMenu}) => {

    
    const { height, width } = useWindowDimensions();
    while( x > width-170) {
        x-= 170
    }
    while( y > height-320) {
        y-= 170
    }
    const style = () => {
        return{
            height: 300,
            width : 190,
            backgroundColor : "#d8323c",
            color : "#eaebea",
            flexDirection: "column",
            padding: 10,
            top: y,
            left: x,
            position: "absolute",
            display: showMenu ? "flex": "none",
            zIndex : 5,
            borderRadius : 10 
        }
    }

    return (
        <div className="rightmenu" style={style()}>
            <div className="option" style={{...style1.div,...style1.margin}}><a href="#intro">Home [H]</a></div>
            <div className="option" style={{...style1.div,...style1.margin}}><a href="#portfolio">Portfolio [P]</a></div>
            <div className="option" style={{...style1.div,...style1.margin}}><a href="#works">Works [W]</a></div>
            <div className="option" style={{...style1.div,...style1.margin}}><a href="#testimonial">Testimonial [T]</a></div>
            <div className="option" style={{...style1.div,...style1.margin}}><a href="#contact">Contact [C]</a></div>
        </div>
    )
}

const style1 = {
    div: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor:"pointer",
    },
    margin: {
        // margin: "0px 0px 10px 0px"
    }
}
export default RightMenu