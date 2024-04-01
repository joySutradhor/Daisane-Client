
import camp from "/campaign.jpg"
import "./Campaign.css"
import { Link } from "react-router-dom";

const Campaign = () => {
    // const customFontStyle = {
    //     fontFamily: "'Oswald', sans-serif",
    // };

    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };
    return (
        <div className="lR newsLeftRight border-t-[2px] border-[#12225D] border-b-[2px]">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
            </style>
            <div className="md:flex   items-center">
                <div className=" 2xl:w-[583px] xl:w-[515px] w-[309px] 2xl:pt-[60px] 2xl:pb-[60px] xl:pt-[50px] xl:pb-[50px] pt-[15px] pb-[32px]   mainCardCamp newsHeadImg">
                    <img className="w-full h-full object-cover " src={camp} alt="" />
                </div>
                <div className="2xl:ml-[96px] xl:ml-[70px] md:ml-[40px] mainGap">
                    <h3 className="2xl:text-[40px] xl:text-[30px] text-[15px] leading-[19px] xl:leading-[40px] 2xl:leading-[40px] xl:mb-[25px] 2xl:mb-[35px] mb-[15px] font-bold mainText" style={poppinsFontStyle}>Campaign kickoff for Abdi Daisane for Minnesota House 14A</h3>
                    <h4 className="2xl:text-[25px] xl:text-[20px] text-[14px] leading-[18px] 2xl:leading-[37.5px] 2xl:mb-[8px] mb-[10px] xl:mb-[10px]" style={poppinsFontStyle}><span className="font-bold 2xl:text-[25px] text-[14px] xl:text-[20px] 2xl:leading-[37.5px] mainh2" style={poppinsFontStyle} >Address : </span>Capital Event Center at 3123 Roosevelt Rd,St.  Cloud 56301.</h4>
                    <h4 className="2xl:text-[25px] xl:text-[20px] text-[14px] leading-[18px] 2xl:leading-[37.5px] 2xl:mb-[8px] xl:mb-[10px] mb-[10px]" style={poppinsFontStyle}><span className="font-bold 2xl:text-[25px] text-[14px] xl:text-[20px] 2xl:leading-[37.5px] mainh2" style={poppinsFontStyle}>Date : </span>Jan 5th, 2024</h4>
                    <h4 className="2xl:text-[25px] xl:text-[20px] mb-[15px] xl:mb-[50px] 2xl:mb-[50px] text-[14px] leading-[18px] 2xl:leading-[37.5px]" style={poppinsFontStyle}><span className="font-bold 2xl:text-[25px] xl:text-[20px] 2xl:leading-[37.5px]" style={poppinsFontStyle}>Time : </span>6:00 Pm</h4>

                    <Link to="https://www.facebook.com/Xidigtv/posts/pfbid0Tnvgpj7VeaCxYvirpnVE3ujWK2qq8etBQEWtgVRTBCfG54dqWcL3tTBBwVRuCLgFl" target="_blank"><button className="xl:text-[20px] text-[12px] border border-white-[1px] xl:px-6 xl:py-2 px-4 py-1 xl:mb-auto mb-[15px] bg-[#12225D] text-white xl:rounded-[10px] rounded-[6px]" style={poppinsFontStyle}>View Gallery</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Campaign;