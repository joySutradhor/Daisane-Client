import hero1 from "/heroNew.png"
import heroOne from "/heroOne.png"
import fb from "/fb.png"
import x from "/x.png"
import linkedin from "/linkedin.png"
import "./HeroSection.css"
import { Link } from "react-router-dom"
import logoTwo from "/updated.png"


const HeroSeciton = () => {
    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };
    return (
        // <div>
        //     <style>
        //         {`
        //   @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
        // `}
        //     </style>
        //     <div className="2xl:mb-[250px] xl:mb-[200px] mb-[60px] bg-[#12225D] xl:rounded-[44px] rounded-[15px]">
        //         <div className="2xl:ml-[150px] xl:ml-[100px] ml-[25px] heroLeft flex  relative ">
        //             <div className="w-[40%] lg:w-[40%] md:w-[50%]" >
        //                 <h2 className="2xl:w-[652px]  2xl:pt-[176px] 2xl:text-[80px] font-bold xl:pt-[149px] pt-[34px] 2xl:leading-[90px] xl:leading-[80px] 2xl:mr-[227px] xl:mr-[13px] xl:text-[60px] text-white heroText" style={customFontStyle}>
        //                     My story is one of resilience, <br /> perseverance,   and a deep commitment to serving others .
        //                 </h2>
        //                 <img className="md:w-[100px] w-[30px] md:py-[25px] pt-[10px]" src={logoTwo} alt="" />
        //                 <div className="xl:w-[289px] w-[80px] bg-[#D9D9D9] flex 2xl:mt-[176px] xl:mt-[149px] mt-[34px]  xl:rounded-t-[24px] rounded-t-[10px]  heroTexBottom" >
        //                     <div className="flex xl:py-[22.5px] py-[5.64px] ">
        //                         <Link to="https://www.facebook.com/ahdaisane?mibextid=LQQJ4d" target="_blank"><img className="xl:ml-[41px] ml-[14.36px]  mr-[10.3px] xl:mr-[39.13px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px]" src={fb} alt="" /></Link>
        //                         <Link to="https://twitter.com/AbdiFor14A" target="_blank"><img className="xl:mr-[37.29px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px] mr-[9.56px] " src={x} alt="x icon" /></Link>
        //                         <Link to="https://www.linkedin.com/in/abdidaisane/" target="_blank"><img className="xl:mr-[48.04px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px] mr-[14.37px] " src={linkedin} alt="linkedin icon" /></Link>

        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="absolute bottom-0 2xl:right-10 right-2">
        //                 <img className=" 2xl:w-[779px]  2xl:h-[955px] xl:h-auto h-[220px] xl:w-[681px]  w-[171px]  mt-[3px] xl:mt-[39px] object-cover  2xl:mt-[33px]  pr-[12px] xl:pr-[48px] 2xl:pr-0 heroImg " src={heroOne} alt="daisane hero image" />
        //             </div>
        //         </div>

        //     </div>
        // </div>
        <div>
        <style>
            {`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
`}
        </style>
        <div className="relative 2xl:mb-[250px] xl:mb-[200px] mb-[60px] bg-[#12225D] xl:rounded-[44px] rounded-[15px]">
            <div className="2xl:ml-[150px] xl:ml-[100px] ml-[25px] newsHeroLeft flex justify-between items-center ">
                <div className="w-[40%]">
                <h2 className="2xl:w-[652px]   2xl:text-[80px] font-bold md:pt-[60px]  2xl:leading-[90px] xl:leading-[50px] 2xl:mr-[227px] xl:mr-[13px] xl:text-[40px] text-white md:text-[25px] heroText" style={customFontStyle}>
                            My story is one of resilience, <br /> perseverance,   and a deep commitment to serving others .
                        </h2>
                        <img className="lg:w-[100px] md:w-[60px] w-[30px] md:py-[25px] pt-[10px]" src={logoTwo} alt="" />
                    <div className="xl:w-[289px] w-[80px] bg-[#D9D9D9] flex 2xl:mt-[327px]  xl:mt-[304px] mt-[74px] md:mt-0 xl:rounded-t-[24px] rounded-t-[10px] absolute bottom-[-2px] md:absolute md:bottom-[-2px]  newsSocail" >
                        <div className="flex xl:py-[22.5px] py-[5.64px] ">
                            <Link to="https://www.facebook.com/ahdaisane?mibextid=LQQJ4d" target="_blank"><img className="xl:ml-[41px] ml-[14.36px]  mr-[10.3px] xl:mr-[39.13px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px]" src={fb} alt="" /></Link>
                            <Link to="https://twitter.com/AbdiFor14A" target="_blank"><img className="xl:mr-[37.29px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px] mr-[9.56px] " src={x} alt="x icon" /></Link>
                            <Link to="https://www.linkedin.com/in/abdidaisane/" target="_blank"><img className="xl:mr-[48.04px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px] mr-[14.37px] " src={linkedin} alt="linkedin icon" /></Link>

                        </div>
                    </div>
                </div>
                <img className=" 2xl:w-[860px] 2xl:pt-[79px] xl:w-[657px] xl:pt-[63px]  md:w-[350px]  w-[193px]   object-cover xl:pr-[42px] 2xl:pr-[55px] newsImg " src={heroOne} alt="daisane hero image" />
            </div>

        </div>
    </div>
    );
};

export default HeroSeciton;