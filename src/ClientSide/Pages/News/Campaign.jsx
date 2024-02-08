
import camp from "/cmapaign.png"
import "./Campaign.css"

const Campaign = () => {
    // const customFontStyle = {
    //     fontFamily: "'Oswald', sans-serif",
    // };

    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };
    return (
        <div className="lR border-t-[2px] border-[#12225D] border-b-[2px]">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
            </style>
            <div className="xl:flex items-center">
                <div className="">
                    <img className="2xl:pt-[60px] 2xl:pb-[60px] xl:pt-[50px] xl:pb-[50px] pt-[15px] pb-[32px] 2xl:w-[583px] xl:w-[515px] w-[309px] object-cover mainCardCamp " src={camp} alt="" />
                </div>
                <div className="2xl:ml-[96px] xl:ml-[70px] mainGap">
                    <h3 className="2xl:text-[40px] xl:text-[30px] text-[15px] leading-[19px] xl:leading-[40px] 2xl:leading-[40px] xl:mb-[25px] 2xl:mb-[35px] mb-[15px] font-bold mainText" style={poppinsFontStyle}>Campaign kickoff for Abdi Daisane for Minnesota House 14A</h3>
                    <h4 className="2xl:text-[25px] xl:text-[20px] text-[12px] leading-[18px] 2xl:leading-[37.5px] 2xl:mb-[8px] mb-[10px] xl:mb-[10px]"style={poppinsFontStyle}><span className="font-bold 2xl:text-[25px] text-[12px] xl:text-[20px] 2xl:leading-[37.5px] mainh2"style={poppinsFontStyle} >Address : </span>Capital Event Center at 3123 Roosevelt Rd,St.  Cloud 56301.</h4>
                    <h4 className="2xl:text-[25px] xl:text-[20px] text-[12px] leading-[18px] 2xl:leading-[37.5px] 2xl:mb-[8px] xl:mb-[10px] mb-[10px]"style={poppinsFontStyle}><span className="font-bold 2xl:text-[25px] text-[12px] xl:text-[20px] 2xl:leading-[37.5px] mainh2" style={poppinsFontStyle}>Date : </span>Jan 5th, 2024</h4>
                    <h4 className="2xl:text-[25px] xl:text-[20px] mb-[15px] xl:mb-auto 2xl:mb-auto text-[12px] leading-[18px] 2xl:leading-[37.5px]"style={poppinsFontStyle}><span className="font-bold 2xl:text-[25px] xl:text-[20px] 2xl:leading-[37.5px]" style={poppinsFontStyle}>Time : </span>6:00 Pm</h4>
                </div>
            </div>
        </div>
    );
};

export default Campaign;