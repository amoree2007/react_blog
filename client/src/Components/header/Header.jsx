import "./header.css"
import one from "../../imgs/pexels-njeromin-19161533.jpg"
function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={one} alt="" />
    </div>
  )
}

export default Header