import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#intro" rel="noopener noreferrer">Home</a>
                </li>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#portfolio" rel="noopener noreferrer">Portfoilio</a>
                </li >
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#works" rel="noopener noreferrer">Works</a>
                </li>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#testimonial" rel="noopener noreferrer">Testimonial</a>
                </li>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#contact" rel="noopener noreferrer">Contact</a>
                </li>
            
            </ul>
            
        </div>
    )
}
