import "./Footer.css";
import footerLogo from "/footerLogo.png"
// import abdiDaisane2 from '../../assets/images/footer/abdiDaisane.png';
import phone from '../../assets/images/footer/phone.png';
import emailIcon from '../../assets/images/footer/email.png';
import arrow from "/arrow.png"
import x from '../../assets/images/footer/x.png';
import facebook from '../../assets/images/footer/facebook.png';
import linkedin from '../../assets/images/footer/linkedin.png';


import { Link } from "react-router-dom";



const Footer = () => {
    const email = 'daisaneformn@gmail.com';

    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };
    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };
    return (
        <div className="">
            {/* make a donation */}
            
            {/* footer bottom */}
            <div className="bg-[#12225D] ">
                <style> {`
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap') `}
                </style>
                <div className="lR 2xl:py-[100px] xl:py-[50px]">
                    <div className="">
                        <img className="2xl:w-[275px] 2xl:h-[101px] xl:w-[225px] xl:h-[83.27px]  object-cover xl:mb-[50px]" src={footerLogo} alt="footerLogo" />
                    </div>
                    <div className="flex">
                        <div className="2xl:mr-[343px] xl:mr-[237px] leftSpace leftSideSpace">
                            <h4 className="mainFooterSubHeading" style={customFontStyle}>Our Office</h4>
                            <h6 className="footerLinkText  xl:mb-[50px]" style={poppinsFontStyle}>PO BOX 2354, Saint Cloud, MN 56302</h6>
                            <h6 className="flex  items-center footerLinkText xl:mb-[20px] " style={poppinsFontStyle}><span><img className="2xl:h-[27px] 2xl:w-[27px] xl:mr-[15px]" src={phone} alt="phoneIcon" /></span>320-223-4902</h6>
                            <h6 className="flex  items-center footerLinkText " style={poppinsFontStyle}><span><img className="2xl:h-[25px] 2xl:w-[30px] xl:mr-[15px]" src={emailIcon} alt="phoneIcon" /></span>daisaneformn@gmail.com</h6>
                        </div>
                        <div className="2xl:mr-[300px] xl:mr-[59px]  " >
                            <h4 className="mainFooterSubHeading" style={customFontStyle}>Links</h4>
                            <p className="flex items-center footerLinkText xl:mb-[12px]" style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px]" src={arrow} alt="arrow sign" /></span>Home</p>
                            <p className="flex items-center footerLinkText xl:mb-[12px] " style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px]" src={arrow} alt="arrow sign" /></span>Prioritites</p>
                            <p className="flex items-center footerLinkText xl:mb-[12px]" style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px]" src={arrow} alt="arrow sign" /></span>Endorsements</p>
                            <p className="flex items-center footerLinkText xl:mb-[12px] " style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px]" src={arrow} alt="arrow sign" /></span>Events</p>
                            <Link to="/privacy-policy">
                                <p className="flex items-center footerLinkText xl:mb-[12px]" style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px]" src={arrow} alt="arrow sign" /></span>Privacy & Policy</p>
                            </Link>
                            <Link to="/terms-of-service">
                                <p className="flex items-center footerLinkText " style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px]" src={arrow} alt="arrow sign" /></span>Terms and Conditions</p>
                            </Link>
                        </div>
                        <div>
                            <h4 className="xl:text-[40px] xl:leading-[50px] text-white border-b-[4px] border-white text-right xl:pb-[25px] " style={customFontStyle}>Paid for by Daisane for MN</h4>
                            <h3 className="xl:mt-[60px] xl:text-[25px] 2xl:tracking-[0.69px] text-right text-white xl:leading-[37.5px] xl:pb-[25px] " style={customFontStyle}>Our Social Media</h3>
                            <div className="flex justify-end ">
                                <img className="2xl:h-[41.18px] 2xl:w-[41.18px] xl:mr-[37px]" src={facebook} alt="fbsocail" />
                                <img className="2xl:h-[41.18px] 2xl:w-[41.18px] xl:mr-[37px]" src={x} alt="x icon" />
                                <img className="2xl:h-[41.18px] 2xl:w-[41.18px]" src={linkedin} alt="linkedin icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="text-center xl:text-[20px] 2xl:leading-[30px] xl:pb-[50px] 2xl:pb-[100px] text-[#F5F5F5]">Designed and Developed by <span className="border-b-[1px] "><Link to="https://www.fowzimedia.com/" target="_blank">Fowzi Media.</Link></span> Copyright © Daisane For State Representative. All rights reserved.</h4>
            </div>

        </div>
    );
}

export default Footer;