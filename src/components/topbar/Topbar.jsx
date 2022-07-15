import "./topbar.css"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EmailIcon from '@material-ui/icons/Email';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar" + (menuOpen ? " active": "")}>
            <div className="wrapper">
                
                <div className="left">
                    <a href="#intro" className="logo">{`<Nitu Rani />`}</a>
                    <div className="itemcontainer">
                        <PersonAddIcon className="icon"/>
                        <span>+91 8825178985</span>
                    </div>
                    <div className="itemcontainer">
                        <EmailIcon className="icon"/>
                        <span>niturani247@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
