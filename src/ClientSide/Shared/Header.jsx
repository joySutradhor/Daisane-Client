
import logo from "/daisaneLogo.png"
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {

    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };
    return (
        <div>
            <div className="tB lR lefRight hidden md:block">
                <style>
                    {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                </style>
                <div className="flex items-center justify-between  ">
                    <img className="Headerlogo topLogo " src={logo} alt="Daisane Logo" />
                    <div className="flex xl:mx-[140px] 2xl:mx-[250px]  menu menuSize" style={poppinsFontStyle}>
                        <Link to="/" className="2xl:mr-[70px] xl:mr-[40px] font-bold text-[20px] menuGap menuSize">Home</Link>
                        <Link to="/priorities" className="2xl:mr-[70px] xl:mr-[40px] font-bold text-[20px] menuGap menuSize">Prioritites</Link>
                        <Link to="/endorsements" className="2xl:mr-[70px] xl:mr-[40px] font-bold text-[20px] menuGap menuSize">Endorsements</Link>
                        <Link to="/news" className="font-bold text-[20px] menuSize">News & Events</Link>
                    </div>
                    <div>
                        <Link to="https://secure.actblue.com/donate/daisaneformn" target="_blank"><button className="text-[20px] font-medium py-[10px] pl-[31px] pr-[31.49px] bg-[#12225D] text-white rounded-[10px]" style={poppinsFontStyle}>Donate</button></Link>
                    </div>
                </div>
                {/* <div className="sm:block hidden">
                    hello
                </div> */}

            </div>
        </div>
    );
};

export default Header;