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
                <div className="lR LeftRightSpcaing 2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[50px] xl:pb-[50px]  pt-[60px] pb-[25px]">
                    <div className="">
                        <Link to="/"><img className="2xl:w-[275px] 2xl:h-[101px] xl:w-[225px] xl:h-[83.27px] w-[71px] h-[25.82px]  object-cover xl:mb-[50px]" src={footerLogo} alt="footerLogo" /></Link>
                    </div>
                    <div className="grid sm:grid-cols-3 justify-between ">
                        <div className="2xl:mr-[343px] xl:mr-[237px] leftSpace leftSideSpace leftSideSpacing mediumLeftSpace">
                            <h4 className="mainFooterSubHeading xl:mt-0 mt-[25px]" style={customFontStyle}>Our Office</h4>
                            <h6 className="footerLinkText mb-[18px]  xl:mb-[50px]" style={poppinsFontStyle}>PO Box 2354 St. Cloud, MN 56302.</h6>
                            <h6 className="flex  items-center footerLinkText xl:mb-[20px] mb-[10px] " style={poppinsFontStyle}><span><img className="xl:h-[27px] xl:w-[27px] xl:mr-[15px] mr-[10px] w-[13.77px] h-[14.48px]" src={phone} alt="phoneIcon" /></span>320-223-4902</h6>
                            <h6 className="flex  items-center footerLinkText " style={poppinsFontStyle}><span><img className="xl:h-[25px] xl:w-[30px] w-[14.83px] h-[12.99px] xl:mr-[15px] mr-[10px]" src={emailIcon} alt="phoneIcon" /></span>daisaneformn@gmail.com</h6>
                        </div>
                        <div className="2xl:mr-[300px] xl:mr-[59px]   " >
                            <div className="sm:flex sm:justify-center">
                                <div>
                                    <h4 className="mainFooterSubHeading xl:mt-0 mt-[25px]" style={customFontStyle}>Links</h4>
                                    <Link to="/"><p className="flex items-center footerLinkText xl:mb-[12px] mb-[10px]" style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px] mr-[10px]" src={arrow} alt="arrow sign" /></span>Home</p></Link>

                                    <Link to="/priorities"><p className="flex items-center footerLinkText xl:mb-[12px] mb-[10px] " style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px] mr-[10px]" src={arrow} alt="arrow sign" /></span>Prioritites</p></Link>

                                    <Link to="/endorsements"><p className="flex items-center footerLinkText xl:mb-[12px] mb-[10px]" style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px] mr-[10px]" src={arrow} alt="arrow sign" /></span>Endorsements</p></Link>

                                    <Link to="/news"><p className="flex items-center footerLinkText xl:mb-[12px] mb-[10px] " style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px] mr-[10px]" src={arrow} alt="arrow sign" /></span>Events</p></Link>

                                    <Link to="/privacy-policy">
                                        <p className="flex items-center footerLinkText xl:mb-[12px] mb-[10px]" style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px] mr-[10px]" src={arrow} alt="arrow sign" /></span>Privacy & Policy</p>
                                    </Link>

                                    <Link to="/terms-of-service">
                                        <p className="flex items-center footerLinkText " style={poppinsFontStyle}> <span><img className=" 2xl:h-[10px] 2xl:w-[4px] xl:mr-[15px] mr-[10px]" src={arrow} alt="arrow sign" /></span>Terms and Conditions</p>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="xl:mt-0 mt-[25px] ">
                            <div className="flex sm:justify-end">
                                <h4 className="xl:text-[40px] text-[12px] leading-[18px] xl:leading-[50px] text-white xl:border-b-[4px] border-b-[1px] xl:w-auto w-[75%] border-white xl:text-right xl:pb-[25px] pb-[10px] sm:text-right" style={customFontStyle}>Prepared and paid for by the Daisane (Abdi) for Minnesota committee</h4>
                            </div>

                            <h3 className="xl:mt-[60px] mt-[15px] xl:text-[25px] 2xl:tracking-[0.69px] xl:text-right text-white xl:leading-[37.5px] xl:pb-[25px] pb-[10px] sm:text-right" style={customFontStyle}>Our Social Media</h3>

                            <div className="flex sm:justify-end ">

                                <Link to="https://www.facebook.com/ahdaisane/?_rdc=2&_rdr" target="_blank"> <img className="xl:h-[41.18px] xl:w-[41.18px] w-[17px] h-[17px] xl:mr-[37px] mr-[10px]" src={facebook} alt="fbsocail" /></Link>

                                <Link to="https://twitter.com/AbdiFor14A" target="_blank"><img className="xl:h-[41.18px] xl:w-[41.18px] w-[17px] h-[17px] xl:mr-[37px] mr-[10px]" src={x} alt="x icon" /></Link>

                                <Link to="https://www.linkedin.com/in/abdidaisane/" target="_blank"><img className="xl:h-[41.18px] xl:w-[41.18px] w-[17px] h-[17px] " src={linkedin} alt="linkedin icon" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="md:text-center copyrightText px-[25px] xl:text-[17px] text-[9px] leading-[15px] 2xl:leading-[30px] xl:pb-[50px] pb-[60px] 2xl:pb-[100px] text-[#F5F5F5]" style={poppinsFontStyle}>Designed and Developed by <span className="border-b-[1px] "><Link to="https://www.fowzimedia.com/" target="_blank">Fowzi Media.</Link></span> Copyright © Daisane For State Representative. All rights reserved.</h4>
            </div>

        </div>
    );
}

export default Footer;