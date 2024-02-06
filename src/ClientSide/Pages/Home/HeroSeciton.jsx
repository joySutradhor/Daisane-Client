import hero1 from "/hero1.png"
import fb from "/fb.png"
import x from "/x.png"
import linkedin from "/linkedin.png"
import "./HeroSection.css"
import { Link } from "react-router-dom"


const HeroSeciton = () => {
    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };
    return (
        <div>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
        `}
            </style>
            <div className="2xl:mb-[250px] xl:mb-[200px] mb-[60px] bg-[#12225D] xl:rounded-[44px] rounded-[15px]">
                <div className="2xl:ml-[150px] xl:ml-[100px] xl:flex ">
                    <div>
                        <h2 className="2xl:w-[652px]  2xl:pt-[176px] 2xl:text-[80px] xl:pt-[149px] 2xl:leading-[90px] xl:leading-[80px] 2xl:mr-[103px] xl:mr-[13px] xl:text-[60px] text-white heroText"  style={customFontStyle}>
                            My story is one of resilience, <br /> perseverance,   and a deep commitment to serving others .
                        </h2>
                        <div className="xl:w-[289px] bg-[#D9D9D9] flex 2xl:mt-[176px] xl:mt-[149px]  rounded-t-[24px] heroTexBottom" >
                            <div className="flex py-[22.5px]  ">
                                <Link to="https://www.facebook.com/ahdaisane?mibextid=LQQJ4d" target="_blank"><img className="ml-[41px] mr-[39.13px] h-[41.18px] w-[41.18px]" src={fb} alt="" /></Link>
                                <img className="mr-[37.29px] h-[41.18px] w-[41.18px] " src={x} alt="" />
                                <img className="mr-[48.04px] h-[41.18px] w-[41.18px] " src={linkedin} alt="" />
                                
                            </div>
                        </div>
                    </div>
                    <img className=" 2xl:w-[961px] 2xl:h-[809px] xl:w-[793px] xl:h-[667px] xl:mt-[117px]  2xl:mt-[79px]  object-cover xl:pr-[48px] heroImg " src={hero1} alt="daisane hero image" />
                </div>

            </div>
        </div>
    );
};

export default HeroSeciton;